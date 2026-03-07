import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // Import theme hook

export default function Header() {
  const { darkMode } = useTheme();

  // Backgrounds
  const headerBg = darkMode ? "bg-[#1F2240]" : "bg-[#E1F7F5]";
  const textColor = darkMode ? "text-gray-300" : "text-gray-600";

  // Search bar styles
  const searchBg = darkMode ? "bg-[#2A2F4A] text-gray-300 placeholder-gray-400 border-gray-600" : "bg-white text-gray-700 placeholder-gray-400 border-gray-300";
  const searchFocus = darkMode ? "focus:ring-teal-500" : "focus:ring-teal-400";

  const iconColor = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`rounded-4xl p-5 mb-6 shadow flex justify-between items-center mt-4 ml-4 mr-4 ${headerBg} transition-colors duration-300`}>
      
      {/* Greeting + Welcome */}
      <div>
        <p className={`text-3xl font-bold ml-5 ${textColor}`}>Instructor</p>
      </div>

      {/* Search Bar */}
      <div className="relative w-100 -mr-50">
        <input
          type="text"
          placeholder="Search"
          className={`w-full pl-10 pr-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${searchBg} ${searchFocus} transition-colors duration-300`}
        />
        <FaSearch className={`absolute top-3 left-3 ${iconColor} transition-colors duration-300`} />
      </div>

      {/* Notification Icon */}
      <FaBell className={`${iconColor} text-xl cursor-pointer ml-6 transition-colors duration-300`} />

      {/* User Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="User avatar"
        className="w-10 h-10 rounded-full -ml-50"
      />
    </div>
  );
}
