import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext"; // Import theme hook

export default function ViewToggle({ view, setView }) {
  const { darkMode } = useTheme(); // Get darkMode

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setView("grid")}
        className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition-colors duration-300 ${
          view === "grid"
            ? darkMode
              ? "bg-purple-600 text-white"
              : "bg-purple-100 text-purple-800"
            : darkMode
            ? "bg-[#2A2F4A] text-gray-300 border border-gray-600 hover:bg-[#3A3650]"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
        }`}
      >
        <FaThLarge /> Grid Card
      </button>

      <button
        onClick={() => setView("table")}
        className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition-colors duration-300 ${
          view === "table"
            ? darkMode
              ? "bg-purple-600 text-white"
              : "bg-purple-100 text-purple-800"
            : darkMode
            ? "bg-[#2A2F4A] text-gray-300 border border-gray-600 hover:bg-[#3A3650]"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
        }`}
      >
        <FaList /> Table
      </button>
    </div>
  );
}
