"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { usePathname } from "next/navigation";

export function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: 43.6532,
        lng: -79.3832,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 13,
        mapId: "google-map-script",
      };

      if (mapRef.current) {
        new google.maps.Map(mapRef.current, mapOptions);
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: "725px", width: "100%" }} />;
}
