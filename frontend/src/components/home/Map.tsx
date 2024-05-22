"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import mapboxgl from "mapbox-gl";

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY as string; // insertion as string

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

  const mapHeight =
    pathname === "/search" || pathname?.startsWith("/search")
      ? "full"
      : "[800px]";

  return (
    <div className="flex w-full h-full">
      <div ref={mapContainerRef} className={`w-full h-${mapHeight}`} id="map" />
    </div>
  );
};

export default Map;
