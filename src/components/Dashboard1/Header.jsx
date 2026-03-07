import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // ✅ adjust path

export default function Header() {
  const { darkMode } = useTheme();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div
      className={`rounded-4xl p-5 mb-6 shadow flex justify-between items-center transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white shadow-gray-500" : "bg-[#E1F7F5] text-black"
      }`}
    >
      {/* Greeting + Welcome */}
      <div>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
          {getGreeting()}
        </p>
        <p className={`text-xl font-semibold ${darkMode ? "text-gray-100" : "text-gray-600"}`}>
          Welcome Back!
        </p>
      </div>

      {/* Search Bar */}
      <div
        className={`relative w-100 -mr-50 ${
          darkMode ? "bg-[#1f273d]" : "bg-white"
        } rounded-md`}
      >
        <input
          type="text"
          placeholder="Search"
          className={`w-full pl-10 pr-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-teal-400 ${
            darkMode
              ? "bg-[#1f273d] border-gray-600 text-white placeholder-gray-400"
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
        className={`text-xl cursor-pointer ml-6 ${
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
