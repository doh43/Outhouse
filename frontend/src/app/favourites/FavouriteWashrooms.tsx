"use client";
import React, { useEffect, useState } from 'react';

interface User {
  favouriteIds: string[];
}

const FavouriteWashrooms: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch('/api/user/currentUser');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>Unable to load user data.</p>;

  const { favouriteIds } = user;

  return (
    <div>
      <h2>Your Favorite Washrooms</h2>
      {favouriteIds.length > 0 ? (
        <ul>
          {favouriteIds.map((washroomId) => (
            <li key={washroomId}>{washroomId}</li>
          ))}
        </ul>
      ) : (
        <p>You don't have any favorite washrooms. Search for them using the search bar above.</p>
      )}
    </div>
  );
};

export default FavouriteWashrooms;
