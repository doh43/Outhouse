"use client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string;
  selectedImage?: string;
  onSelect?: (image: string) => void;
  size?: number; // added size prop so different sizes can be used
}

const imageOptions: string[] = [
  "/female1.png",
  "/female2.png",
  "/female3.png",
  "/female4.png",
  "/female5.png",
  "/male1.png",
  "/male2.png",
  "/male3.png",
  "/male4.png",
  "/male5.png",
];

const Avatar: React.FC<AvatarProps> = ({ src, selectedImage, onSelect, size=100 }) => {
  if (onSelect) {
    // if onSelect is provided, render the image options for selection
    return (
      <div className="flex flex-wrap gap-2">
        {imageOptions.map((imgSrc) => (
          <div
            key={imgSrc}
            className={`cursor-pointer ${selectedImage === imgSrc ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => onSelect(imgSrc)}
          >
            <Image
              src={imgSrc}
              height={size} 
              width={size} 
              alt="Avatar"
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    );
  }

  // if onSelect is not provided, display the current profile picture
  return (
    <div>
      <Image
        src={src || "/female1.png"}
        height={size} 
        width={size} 
        alt="Avatar"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
