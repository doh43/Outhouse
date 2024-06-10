import React, { useState } from "react";
import { SafeUser } from "@/app/types";
import Avatar from "../profile/Avatar";

interface EditProfileModalProps {
  currentUser: SafeUser;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: Partial<SafeUser>) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ currentUser, isOpen, onClose, onSave }) => {
  const [name, setName] = useState(currentUser.name || "");
  const [selectedImage, setSelectedImage] = useState(currentUser.image || "");

  const handleSave = () => {
    console.log('Saving profile with:', { name, image: selectedImage });
    onSave({ name, image: selectedImage });
    onClose();
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Avatar selectedImage={selectedImage} onSelect={handleImageSelect} />
        <div className="flex justify-end">
          <button className="px-4 py-2 mr-2 bg-gray-500 text-white rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
