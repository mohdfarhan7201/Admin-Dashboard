// src/components/Header.jsx
import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // 🔹 import theme hook

export default function Header() {
  const { darkMode } = useTheme(); // 🔹 get darkMode state

  return (
    <div
      className={`rounded-4xl p-5 mb-6 shadow flex justify-between items-center transition-colors duration-300 ${
        darkMode ? "bg-[#1E293B] text-white" : "bg-[#E1F7F5] text-black"
      }`}
    >
      {/* Greeting + Welcome */}
     <div>
        
        <p className={`text-2xl font-semibold ${darkMode ? "text-gray-100 " : "text-gray-600"}`}>
          Manager
        </p>
      </div>
      {/* Search Bar */}
      <div
        className={`relative w-100 -mr-50 ml-30 transition-colors duration-300 ${
          darkMode ? "bg-[#334155]" : "bg-white"
        }`}
      >
        <input
          type="text"
          placeholder="Search by name or location"
          className={`w-full pl-10 pr-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors duration-300 ${
            darkMode
              ? "bg-[#334155] border-gray-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-black placeholder-gray-500"
          }`}
        />
        <FaSearch
          className={`absolute top-3 left-3 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        />
      </div>

      {/* Notification Icon */}
      <FaBell
        className={`text-xl cursor-pointer ml-6 transition-colors duration-300 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      />

      {/* User Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="User avatar"
        className="w-10 h-10 rounded-full -ml-50"
      />
    </div>
  );
}
