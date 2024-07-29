'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Washroom {
  name: string;
  description: string;
  ratings: any[];
  address?: string;
  coordinates: number[];
}

export function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [washrooms, setWashrooms] = useState<Washroom[]>([]);

  useEffect(() => {
    const fetchWashrooms = async () => {
      try {
        const response = await fetch('/api/washrooms');
        if (!response.ok) {
          throw new Error('Failed to fetch washrooms');
        }
        const data = await response.json();
        console.log('Fetched washrooms:', data.washrooms);
        setWashrooms(data.washrooms);
      } catch (error) {
        console.error('Failed to fetch washrooms', error);
      }
    };

    fetchWashrooms();
  }, []);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
        version: 'weekly',
        libraries: ['marker'],
      });

      const google = await loader.load();

      if (!google) {
        console.error('Google Maps API could not be loaded');
        return;
      }

      const position = {
        lat: 43.6532,
        lng: -79.3832,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 13,
        mapId: 'google-map-script',
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      washrooms.forEach((washroom) => {
        const image = document.createElement('img');
        image.src = '/toilet.png';
        image.style.width = '32px';
        image.style.height = '32px';

        const marker = new google.maps.marker.AdvancedMarkerElement({
          position: {
            lat: washroom.coordinates[0],
            lng: washroom.coordinates[1],
          },
          map,
          title: washroom.name,
          content: image,
        });

        // calculates the average rating for the washroom
        const averageRating = washroom.ratings && washroom.ratings.length > 0 
        ? (washroom.ratings.reduce((acc, rating) => acc + rating.averageRating, 0) / washroom.ratings.length).toFixed(1) 
        : 'N/A';

        const infoWindowContent = `
            <div>
              <h3 className="text-lg font-bold mb-2">${washroom.name}</h3>
              <p className="text-base mb-2">${washroom.description}</p>
              <p className="text-base mb-2>${washroom.address}</p>
              <p className="text-base">Average Rating: ${averageRating}</p>
            </div>
          `;

          const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent,
          });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    initMap();
  }, [washrooms]); 

  return <div ref={mapRef} style={{ height: '725px', width: '100%' }} />;
}
