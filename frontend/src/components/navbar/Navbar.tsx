"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  // const { data: session } = useSession();
  // const [profileClick,setProfileClick]=useState(false);

  return (
    <div className="container mx-auto flex flex-wrap gap-5 p-5 flex-col md:flex-row items-center">
      {" "}
      {/*  */}
      <Link
        href="/"
        className="font-rufina font-bold title-font font-medium items-center text-sky-900"
      >
        <span className="mb-3 mt-3 ml-8 text-4xl">Soulage</span>
      </Link>
      <a className="md:mr-auto md:ml-4 gap-5 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <h2>Profile</h2>
        <h2>Your List</h2>
        <h2>Favourites</h2>
      </a>
      {/* Search bar below */}
      <div
        className=" bg-gray-100 p-[6px] rounded-md
      flex md:w-[40%] gap-3 md:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Find restrooms near you"
          className="bg-transparent 
        outline-none w-full"
        />
      </div>
      {/* <div>
        {session?.user ? (
          <>
            <Image
              src={session.user.image}
              alt="user"
              width={40}
              height={40}
              onClick={()=>setProfileClick(!profileClick)}
              className="rounded-full cursor-pointer 
              hover:border-[2px] border-blue-500"
            />
           {profileClick? <div className="absolute bg-white p-3
            shadow-md border-[1px] mt-2 z-30
            right-4 ">
              <h2 className="cursor-pointer
               hover:text-blue-500 hover:font-bold"
               onClick={()=>signOut()}>Logout</h2>
            </div>:null}
          </>
        ) : null}
      </div> */}
    </div>
  );
};

export default Navbar;
