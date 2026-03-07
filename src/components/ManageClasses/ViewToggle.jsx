import React from "react";
import { FiGrid, FiList, FiSearch } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext"; // ✅ import theme

export default function ViewToggle({ view, setView }) {
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-lg transition-colors duration-300
            ${view === "grid"
              ? darkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-white"
              : darkMode
              ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
              : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          onClick={() => setView("grid")}
        >
          <FiGrid className="inline mr-1" /> Grid Cards
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors duration-300
            ${view === "table"
              ? darkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-white"
              : darkMode
              ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
              : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          onClick={() => setView("table")}
        >
          <FiList className="inline mr-1" /> Table
        </button>
      </div>

      <div className="relative flex items-center w-full md:w-80">
        <FiSearch
          className={`absolute left-3 ${darkMode ? "text-gray-400" : "text-gray-400"}`}
          size={18}
        />
        <input
          type="text"
          placeholder="Instructor / Class / Tag"
          className={`pl-10 pr-4 py-2 rounded-lg w-full border transition-colors duration-300
            ${darkMode ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}
          `}
        />
      </div>
    </div>
  );
}
