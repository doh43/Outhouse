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
    <div className="flex flex-col items-center justify-center h-screen">
      <div ref={mapContainerRef} className="w-full h-5/6" id="map" />
      <form
        onSubmit={handleSearchSubmit}
        className="max-w-md mx-auto w-full"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          paddingTop: "1rem", // Updated to use Tailwind's spacing scale
        }}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400" // Light gray icon
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-blue-300 focus:border-blue-300"
            placeholder="Find a washroom near you"
            required
          />
          <button
            type="submit"
            className="text-gray-700 absolute right-2.5 bottom-2.5 bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 border border-gray-300 hover:border-gray-400"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Map;
