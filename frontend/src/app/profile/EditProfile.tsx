import React, { useState, useEffect } from "react";
import Modal from "@/app/hooks/EditProfileModal";
import Avatar from "@/app/profile/Avatar";
import { SafeUser } from "@/app/types";

interface EditProfileModalProps {
  currentUser: SafeUser | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: Partial<SafeUser>) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ currentUser, isOpen, onClose, onSave }) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setImage(currentUser.image || "");
    }
  }, [currentUser]);

  const handleSave = async () => {
    const response = await fetch('/api/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, image }),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      onSave(updatedUser);
    } else {
      console.error('Failed to update profile');
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
          <Avatar selectedImage={image} onSelect={setImage} />
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
