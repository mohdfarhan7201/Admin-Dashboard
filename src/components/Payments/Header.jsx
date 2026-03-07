// src/components/settings/Header.jsx
import React, { useContext } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-4xl p-5 mb-2 flex justify-between items-center mt-4 ml-4 mr-4 shadow transition-colors duration-300 
        ${darkMode ? "bg-gray-900 text-white shadow-gray-500 " : "bg-[#E1F7F5] text-gray-800"}`}
    >
      
      <div>
        <p className={`text-3xl font-bold ml-5 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-600"}`}>
          Payment
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative w-100">
        <input
          type="text"
          placeholder="Search"
          className={`w-full pl-10 pr-4 py-2 rounded-md border transition-colors duration-300
            ${darkMode 
              ? "bg-gray-800 text-white border-white placeholder-white focus:ring-blue-400" 
              : "bg-white text-black border-gray-300 placeholder-gray-500 focus:ring-teal-400"}`}
        />
        <FaSearch className={`absolute top-3 left-3 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-400"}`} />
      </div>

      {/* Notification Icon */}
      <FaBell className={`text-xl cursor-pointer mr-10 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`} />

      {/* User Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="User avatar"
        className="-ml-50 w-10 h-10 rounded-full"
      />
    </div>
  );
}
