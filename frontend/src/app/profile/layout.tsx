"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { format } from "date-fns";
import EditProfileModal from "../profile/editProfileModal";
import Avatar from "../profile/Avatar";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

interface ProfileMenuProps {
  initialUser: SafeUser | null;
}

const ProfileLayout: React.FC<ProfileMenuProps> = ({ initialUser }) => {
  const { data: session, update, status } = useSession();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // manages the edit profile modal visibility
  const [user, setUser] = useState<SafeUser | null>(initialUser); // manages user data
  const [selectedImage, setSelectedImage] = useState<string | undefined>(initialUser?.image); // manages the selected profile picture
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  // updates user state when the session data changes
  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setUser(session.user as SafeUser);
      console.log('Session user updated:', session.user);
    } else if (status === "unauthenticated") {
      loginModal.onOpen();
    }
  }, [session, status, loginModal]);

  const handleEditProfile = useCallback(() => {
    setIsEditModalOpen(true);
    setSelectedImage(user?.image);
  }, [user]);

  // loading animation when the information hasn't been processed yet
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-800"></div>
      </div>
    );
  }

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
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setUser(data);
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
        await fetch("/api/auth/session?update");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const formattedDate = user?.createdAt ? format(new Date(user.createdAt), "MMMM dd, yyyy") : '';

  return (
    // user sees this when signed in
    <>
      {user ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <div className="flex flex-col items-center mr-8">
              <Avatar src={user.image} size={100} onSelect={isEditModalOpen ? setSelectedImage : undefined} selectedImage={selectedImage} />
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
        // this is the message the user sees if they're not signed in
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800">Sign in to view your profile!</h2>
            <p className="mt-4 text-gray-600">You need to be signed in to access your profile.</p>
          </div>
        </div>
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
