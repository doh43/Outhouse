"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface LayoutProps {
  initialUser: SafeUser | null;
}

const FavouriteLayout: React.FC<LayoutProps> = ({ initialUser }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<SafeUser | null>(initialUser);

  const favouriteIds = user?.favouriteId || []; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <h2 className="mt-4 font-bold text-2xl text-gray-800 text-center">These are your favourite washrooms!</h2>
        {favouriteIds.length > 0 ? (
          <ul className="mt-4 space-y-2 w-full text-center">
            {favouriteIds.map((washroomId: string) => (
              <li key={washroomId} className="text-lg text-gray-700 bg-gray-50 rounded-lg p-4 shadow-md w-full text-center">
                {washroomId}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-600 text-center">You don't have any favorite washrooms! Go use one and add it to your list!</p>
        )}
      </div>
    </div>
  );
};

export default FavouriteLayout;
