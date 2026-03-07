import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-4xl p-5 mb-6 shadow flex justify-between items-center mt-2 ml-2 mr-4
        ${darkMode ? "bg-[#1E1F2E] text-white shadow-gray-500" : "bg-[#E1F7F5] text-gray-600"}
      `}
    >
      {/* Greeting + Welcome */}
      <div>
        <p className="text-3xl font-bold ml-5">Customer FeedBack</p>
      </div>

      {/* Search Bar */}
      <div className={`relative w-100 ${darkMode ? "bg-gray-700 " : "bg-white"} -mr-50`}>
        <input
          type="text"
          placeholder="Search"
          className={`w-full pl-10 pr-4 py-2 rounded-md border 
            ${darkMode ? "border-gray-600 bg-gray-700 text-white placeholder-white focus:ring-teal-400" : "border-gray-300 bg-white text-black placeholder-gray-500 focus:ring-teal-400"} 
            focus:outline-none focus:ring-2`}
        />
        <FaSearch className={`${darkMode ? "text-white" : "text-gray-400"} absolute top-3 left-3`} />
      </div>

      {/* Notification Icon */}
      <FaBell className={`text-xl cursor-pointer ml-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`} />

      {/* User Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="User avatar"
        className="-ml-50 w-10 h-10 rounded-full"
      />
    </div>
  );
}
