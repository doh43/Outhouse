"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { format } from "date-fns";
import EditProfileModal from "../profile/editProfileModal";
import Avatar from "../profile/Avatar";

interface ProfileMenuProps {
  initialUser: SafeUser | null;
}

const ProfileLayout: React.FC<ProfileMenuProps> = ({ initialUser }) => {
  const { data: session, update } = useSession();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // manages the edit profile modal visibility
  const [user, setUser] = useState<SafeUser | null>(initialUser); // manages user data
  const [selectedImage, setSelectedImage] = useState<string | undefined>(user?.image); // manages the selected profile picture

  // updates user state when the session data changes
  useEffect(() => {
    if (session?.user) {
      setUser(session.user as SafeUser);
      console.log('Session user updated:', session.user);
    }
  }, [session]);

  const handleEditProfile = useCallback(() => {
    setIsEditModalOpen(true);
    setSelectedImage(user?.image); 
  }, [user]);

  // handles saving profile changes
  const handleSaveProfile = async (updatedUser: Partial<SafeUser>) => {
    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log("Updated User:", data);
        setIsEditModalOpen(false);

        // clone the session object
        const clonedSession = JSON.parse(JSON.stringify(session));

        // update the session user data
        clonedSession.user = {
          ...clonedSession.user,
          name: data.name,
          image: data.image,
        };

        // update the session and await the result
        const updatedSession = await update(clonedSession);

        // log the updated session
        console.log('Session after update:', updatedSession);
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const formattedDate = user?.createdAt ? format(new Date(user.createdAt), "MMMM dd, yyyy") : '';

  return (
    <>
      {user ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <div className="flex flex-col items-center mr-8">
            <Avatar src={user.image} onSelect={isEditModalOpen ? setSelectedImage : undefined} selectedImage={selectedImage} />
              <h2 className="mt-4 font-semibold text-lg">{user?.name}</h2>
              <button
                className="mt-2 px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 shadow-xl"
                onClick={handleEditProfile}
              >
                Edit profile
              </button>
            </div>
            <div className="inline-flex flex-col ml-5 justify-center">
              <span className="text-2xl font-bold">{user?.Rating?.length}</span>
              <span className="ml-2 text-lg">reviews</span>
              <div className="text-lg">Joined on {formattedDate}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>Sign in to see stats! *this is a placeholder*</div>
      )}
      {user && (
        <EditProfileModal
          currentUser={user}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveProfile}
        />
      )}
    </>
  );
};

export default ProfileLayout;
