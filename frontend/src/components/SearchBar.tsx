import React from "react";
import backgroundImage from "../assets/background.jpg";

const SearchBar = () => {
  return (
    <div
      className="bg-gray-200" // Light gray background
      style={{
        height: "50vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "lighten", // Ensures the background image blends softly
      }}
    >
      <form
        className="max-w-md mx-auto"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          paddingTop: "100px",
        }}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400" // Light gray icon
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-700 bg-white-100 border border-gray-300 rounded-lg focus:ring-blue-300 focus:border-blue-300"
            placeholder="Browse buildings on campus"
            required
          />
          <button
            type="submit"
            className="text-gray-700 absolute end-2.5 bottom-2.5 bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 border border-gray-300 hover:border-gray-400"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
