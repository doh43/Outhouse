'use client'
import { useSearchParams } from 'next/navigation';
import StarRating from '@/components/home/StarRating';
import React, { useEffect, useState } from 'react';
import { MapView } from "@/components/home/MapView";

const WashroomPage = () => {
  const searchParams = useSearchParams();

  const washroomId = searchParams.get('washroomId');
  const name = searchParams.get('name');
  const description = searchParams.get('description');
  const averageRating = searchParams.get('averageRating');
  const coordinates = searchParams.get('coordinates');

  const [ratings, setRatings] = useState<{
    clean: number | string;
    easyToFind: number | string;
    privacy: number | string;
    averageRating: number | string;
  }>({
    clean: "No rating",
    easyToFind: "No rating",
    privacy: "No rating",
    averageRating: "No rating",
  });

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch(`/api/ratings?washroomId=${washroomId}`);
        const data = await response.json();
  
        if (data.length > 0) {
          const cleanAvg = data.reduce((acc: number, rating: { clean: number }) => acc + rating.clean, 0) / data.length;
          const easyToFindAvg = data.reduce((acc: number, rating: { easyToFind: number }) => acc + rating.easyToFind, 0) / data.length;
          const privacyAvg = data.reduce((acc: number, rating: { privacy: number }) => acc + rating.privacy, 0) / data.length;
          const averageRating = data.reduce((acc: number, rating: { averageRating: number }) => acc + rating.averageRating, 0) / data.length;
  
          setRatings({
            clean: cleanAvg || "No rating",
            easyToFind: easyToFindAvg || "No rating",
            privacy: privacyAvg || "No rating",
            averageRating: averageRating || "No rating",
          });
        } else {
          setRatings({
            clean: "No rating",
            easyToFind: "No rating",
            privacy: "No rating",
            averageRating: "No rating",
          });
        }
      } catch (error) {
        console.error('Error fetching ratings:', error);
        setRatings({
          clean: "No rating",
          easyToFind: "No rating",
          privacy: "No rating",
          averageRating: "No rating",
        });
      }
    };
  
    if (washroomId) {
      fetchRatings();
    }
  }, [washroomId]);
  

  return (
    <>
      <div className="p-6 w-1/2 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 mb-4">Cleaniness: {ratings.clean}</p>
        <p className="text-gray-700 mb-4">Easiness to locate: {ratings.easyToFind}</p>
        <p className="text-gray-700 mb-4">Privacy: {ratings.privacy}</p>
        <p className="text-gray-700 mb-4">Average Rating: </p> <StarRating rating={ratings.averageRating}/>
        <a text-gray-700 mb-4>Rate it!</a>
      </div>
      <div className="w-1/2 border border-solid-black">
        <MapView />
      </div>
    </>
  );
};

export default WashroomPage;
