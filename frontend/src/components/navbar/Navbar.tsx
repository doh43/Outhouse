"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Card from "./UserCard";
import UserMenu from "./UserMenu";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-wrap gap-5 p-5 flex-col md:flex-row items-center">
      <Link
        href="/"
        className="font-rufina font-bold title-font font-medium items-center text-sky-900"
      >
        <span className="mb-3 mt-3 ml-8 text-4xl">Soulage</span>
      </Link>
      <div className="md:mr-auto md:ml-4 gap-5 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <Link
          href="/profile"
          className="hover:text-gray-400 flex items-center justify-center text-center pl-6"
        >
          <h2>Profile</h2>
        </Link>
        <Link
          href="/mylist"
          className="hover:text-gray-400 flex items-center justify-center text-center"
        >
          <h2>Your List</h2>
        </Link>
        <Link
          href="/favourites"
          className="hover:text-gray-400 flex items-center justify-center text-center"
        >
          <h2>Favourites</h2>
        </Link>
      </div>
      {/* Adjusted search bar and UserMenu container */}
      <div className="flex flex-row flex-nowrap items-center w-full lg:w-[50%] gap-3">
        <div className="bg-gray-100 p-[6px] rounded-md flex-grow flex items-center py-2 cursor-pointer">
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
            className="bg-transparent outline-none w-full"
          />
        </div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
