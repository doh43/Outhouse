"use client";
import Image from "next/image";

// maybe implement random avatar generator here later

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || "/placeholder-icon.png"}
      height={35}
      width={35}
      alt="Avatar"
      className="rounded-full"
    />
  );
};

export default Avatar;
