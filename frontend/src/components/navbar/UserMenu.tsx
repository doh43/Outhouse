"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Card from "./UserCard";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";
import { PiCaretDownThin } from "react-icons/pi";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-3 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <PiCaretDownThin />{" "}
          {/* react icons slow loading time so much like what */}
          <div className="hidden md:block">
            {status === "authenticated" ? (
              <Card user={session.user} pagetype={"Navbar"} />
            ) : (
              <Avatar />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[300px] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              <MenuItem onClick={() => {}} label="Profile" />
              <MenuItem onClick={() => {}} label="Help Centre" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
