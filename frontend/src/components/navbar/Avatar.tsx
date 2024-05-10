"use client";
import Image from "next/image";

// maybe implement random avatar generator here later

const Avatar = () => {
  return (
    <Image
      src="/placeholder-icon.png"
      height={35}
      width={35}
      alt="Avatar"
      className="rounded-full"
    />
  );
};

export default Avatar;
