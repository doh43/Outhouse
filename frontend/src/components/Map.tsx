"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2hkYW5pZWw0MyIsImEiOiJjbHZ1YXVxazYxZ2U0MmttZzg2a2x5MWI4In0.jF05z4jevBKb-XYJy-xRsw";

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [data, setData] = useState<any>(null);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.3832, 43.6532],
      zoom: 5,
      maxBounds: [
        [-79.4082, 43.6394], // SW corner coordinates
        [-79.3704, 43.6659], // NE corner coordinates
      ],
    });

    setMap(newMap); // Store the map instance in state

    // Cleanup function to remove the map instance when the component unmounts
    return () => {
      newMap.remove();
    };
  }, []);

  return (
    <div className="flex">
      <div ref={mapContainerRef} className="h-[800px] w-full" id="map" />
    </div>
  );
};

export default Map;
