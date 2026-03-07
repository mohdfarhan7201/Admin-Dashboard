import React, { useContext } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-4xl p-4 md:p-5 mb-2 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 mt-4 mx-4 shadow transition-colors duration-300 
        ${darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-[#E1F7F5] text-gray-800"}`}
    >
      {/* Title */}
      <div className="w-full md:w-auto text-center md:text-left">
        <p
          className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Roll & Permissions
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-1/2 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search"
          className={`w-full pl-10 pr-4 py-2 rounded-md border text-sm md:text-base transition-colors duration-300 focus:outline-none focus:ring-2
            ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:ring-blue-400"
                : "bg-white text-gray-800 border-gray-300 placeholder-gray-500 focus:ring-teal-400"
            }`}
        />
        <FaSearch
          className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-sm md:text-base transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        />
      </div>

      {/* Notification + Avatar */}
      <div className="flex items-center justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0 gap-4">
        <FaBell
          className={`text-lg md:text-xl cursor-pointer transition-colors duration-300 ${
            darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
          }`}
        />
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="User avatar"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 object-cover"
        />
      </div>
    </div>
  );
}
