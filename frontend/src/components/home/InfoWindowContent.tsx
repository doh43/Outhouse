import React from 'react';
import StarRating from './StarRating';

interface InfowindowContentProps {
  name: string;
  description: string;
  averageRating: number;
  coordinates: number[];
}

const InfowindowContent: React.FC<InfowindowContentProps> = ({ name, description, averageRating, coordinates }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates[0]},${coordinates[1]}`;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-xs">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-sm xs:text-xs text-gray-700 mb-4">{description}</p>
      <div className="flex flex-col space-y-2">
        <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline transition duration-300">
          View Washroom
        </a>
        </div>
      <div className="flex flex-col space-y-2">
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline transition duration-300">
          Open in Google Maps
        </a>
      <p className="text-sm xs:text-xs text-gray-900 mb-4">
        <span className="font-semibold"></span> <StarRating rating={averageRating} />
      </p>
      </div>
    </div>
  );
};

export default InfowindowContent;
