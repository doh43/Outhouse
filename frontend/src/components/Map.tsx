"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

    /* Ensure that the environment variable is not undefined */
    if (typeof accessToken !== "string") {
      console.error("Mapbox access token is not set!");
      return;
    }

    mapboxgl.accessToken = accessToken;
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v12",
      attributionControl: false,
      center: [-79.3832, 43.6532], // Centered around downtown Toronto
      zoom: 13,
      maxBounds: [
        [-79.4082, 43.6394], // SW corner coordinates
        [-79.3704, 43.6659], // NE corner coordinates
      ],
    });

    setMap(newMap); // Store the map instance in state

    return () => newMap.remove(); // Cleanup function
  }, []);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to handle search here
    alert("Search functionality needs to be implemented.");
  };

  return (
    <div className="flex">
      <div ref={mapContainerRef} className="w-full h-[800px]" id="map" />
    </div>
  );
};

export default Map;
