import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext"; // Import theme hook

export default function SearchBar({ value, setSearch }) {
  const { darkMode } = useTheme(); // Get darkMode

  const inputBg = darkMode ? "bg-[#2A2F4A] text-gray-300 border-gray-600 placeholder-gray-400" : "bg-white text-gray-700 border-gray-200 placeholder-gray-400";
  const focusRing = darkMode ? "focus:ring-indigo-500" : "focus:ring-indigo-200";

  return (
    <div className="relative w-1/3 ml-5">
      <input
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Instructor Class/Tag"
        className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-1 ${inputBg} ${focusRing} transition-colors duration-300`}
      />
      <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-400"}`}>
        <FaSearch />
      </div>
    </div>
  );
}
