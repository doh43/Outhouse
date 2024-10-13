'use client';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { MapView } from "@/components/home/MapView";
import RateWashroom from '@/app/washroom/rateWashroomModal';

interface RatingBarProps {
  label: string;
  rating: number | string;
  maxRating?: number;
}

const RatingBar: React.FC<RatingBarProps> = ({ label, rating, maxRating = 10 }) => {
  const percentage = typeof rating === 'number' ? (rating / maxRating) * 100 : 0;

  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <span>{label}</span>
        <span>{typeof rating === 'number' ? rating.toFixed(1) : "No rating"}</span>
      </div>
      <div className="relative w-full bg-gray-200 rounded">
        <div
          className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const WashroomPage = () => {
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const currentUser = session?.user;
  const washroomId = searchParams.get('washroomId');
  const name = searchParams.get('name');
  const description = searchParams.get('description');
  const averageRating = searchParams.get('averageRating');
  const coordinates = searchParams.get('coordinates');
  const [isRateModalOpen, setIsRateModalOpen] = useState(false);

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

  // State for user's personal rating
  const [userRating, setUserRating] = useState<{
    clean: number | string;
    easyToFind: number | string;
    privacy: number | string;
    averageRating: number | string;
  } | null>(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch(`/api/washrooms?washroomId=${washroomId}&userId=${currentUser?.email}`);
        const data = await response.json();
        console.log('API response data:', data);

        // Set general washroom ratings
        const washroomRatings = data.washroomRatings;
        if (washroomRatings.length > 0) {
          const cleanAvg = washroomRatings.reduce((acc: number, rating: { clean: number }) => acc + rating.clean, 0) / washroomRatings.length;
          const easyToFindAvg = washroomRatings.reduce((acc: number, rating: { easyToFind: number }) => acc + rating.easyToFind, 0) / washroomRatings.length;
          const privacyAvg = washroomRatings.reduce((acc: number, rating: { privacy: number }) => acc + rating.privacy, 0) / washroomRatings.length;
          const averageRating = washroomRatings.reduce((acc: number, rating: { averageRating: number }) => acc + rating.averageRating, 0) / washroomRatings.length;

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

        // Set the user's own rating if available
        if (data.userRating) {
          setUserRating(data.userRating);
        }

      } catch (error) {
        console.log('Error fetching ratings:', error);
        setRatings({
          clean: "No rating",
          easyToFind: "No rating",
          privacy: "No rating",
          averageRating: "No rating",
        });
      }
    };

    if (washroomId && currentUser?.email) {
      fetchRatings();
    }
  }, [washroomId, currentUser]);

  return (
    <>
      {/* Container for the details and map, with flexbox */}
      <div className="flex flex-row gap-4">
        {/* Washroom details */}
        <div className="p-6 w-1/2 bg-white rounded-lg shadow-lg ">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <RatingBar label="Cleanliness" rating={ratings.clean} maxRating={10} />
          <RatingBar label="Easiness to locate" rating={ratings.easyToFind} maxRating={10} />
          <RatingBar label="Privacy" rating={ratings.privacy} maxRating={10} />
          <RatingBar label="Average Rating" rating={ratings.averageRating} maxRating={10} />

          {userRating && (
            <>
              <h3>Your Personal Rating:</h3>
              <RatingBar label="Your Cleanliness" rating={userRating.clean} maxRating={10} />
              <RatingBar label="Your Easiness to Find" rating={userRating.easyToFind} maxRating={10} />
              <RatingBar label="Your Privacy" rating={userRating.privacy} maxRating={10} />
            </>
          )}
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              setIsRateModalOpen(true);
              console.log('opening modal:', isRateModalOpen);
              console.log(currentUser);
            }}
          >
            Rate it!
          </button>
        </div>

        {/* Map section */}
        <div className="flex-grow border border-solid-black">
          <MapView />
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isRateModalOpen && (
        <RateWashroom
          currentUser={currentUser}  // Pass the actual currentUser object here
          washroomId={washroomId || ''}
          isOpen={isRateModalOpen}
          onClose={() => setIsRateModalOpen(false)} // Close modal when done
        />
      )}
    </>
  );
};

export default WashroomPage;
