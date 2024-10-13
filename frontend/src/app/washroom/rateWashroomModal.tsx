import React, { useState, useEffect } from "react";
import { SafeUser } from "@/app/types";  
import { useSearchParams } from 'next/navigation';

interface RateWashroomProps {
  currentUser: SafeUser | null;  // allow for null if no user is logged in
  isOpen: boolean;
  onClose: () => void;
  washroomId: string;
}

const RateWashroom: React.FC<RateWashroomProps> = ({ currentUser, isOpen, onClose, washroomId }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const [clean, setClean] = useState<number>(0);
  const [easyToFind, setEasyToFind] = useState<number>(0);
  const [privacy, setPrivacy] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserRating = async () => {
      if (currentUser && currentUser.id && washroomId) {
        try {
          const response = await fetch(`/api/user-rating?washroomId=${washroomId}&userId=${currentUser.id}`);
          const data = await response.json();
  
          if (response.ok && data) {
            console.log('washroomId:', washroomId);
            console.log('currentUser.id:', currentUser?.id);

            setClean(data.clean);
            setEasyToFind(data.easyToFind);
            setPrivacy(data.privacy);
            setIsEditing(true);  // user is editing an existing rating
          } else {
            setIsEditing(false);  // user has not rated this washroom yet
          }
        } catch (error) {
          console.log('Error fetching user rating:', error);
        }
      }
    };

    fetchUserRating();
  }, [currentUser, washroomId]);

  const handleRatingSubmit = async () => {
    if (!currentUser) {
      setMessage("You must be logged in to rate washrooms.");
      return;
    }

    try { 
      const response = await fetch("/api/rate-washroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser.id,
          washroomId,
          clean,
          easyToFind,
          privacy,
        }),
      });

      if (response.ok) {
        console.log(clean);
        alert(isEditing ? "You have updated your rating" : "Rating submitted successfully!");
        onClose();
      } else {
        console.log("Failed to submit rating.", Error);
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      setMessage("An error occurred while submitting your rating.");
    }
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            &times
        </button>
        {currentUser ? (
          <div>
            <h2 className="text-xl font-bold mb-4">{isEditing ? `Editing rating for ${name}` : `Rating ${name}`}</h2>
            <div className="mb-4">
              <label className="block font-semibold">Cleanliness: </label>
              <input
                type="number"
                min="0"
                max="10"
                value={clean}
                onChange={(e) => setClean(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Easy to Find: </label>
              <input
                type="number"
                min="0"
                max="10"
                value={easyToFind}
                onChange={(e) => setEasyToFind(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Privacy: </label>
              <input
                type="number"
                min="0"
                max="10"
                value={privacy}
                onChange={(e) => setPrivacy(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
              onClick={handleRatingSubmit}
            >
              {isEditing ? "Updating Rating" : "Submit Rating"}
            </button>
            {message && <p className="mt-4 text-red-500">{message}</p>}
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded mt-4"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        ) : (
            <div>
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    x
                </button>
                <p className="text-red-500">You must be signed in to rate washrooms.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default RateWashroom;
