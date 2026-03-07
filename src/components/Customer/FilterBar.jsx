import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function FilterBar({ search, setSearch, filter, setFilter }) {
  const { darkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={`px-4 py-2 rounded-md border-2 
          ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-black"}
        `}
      >
        <option value="All">Filter</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
      </select>

      <input
        type="text"
        placeholder="Search by name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`flex-1 px-4 py-2 rounded-md border-2
          ${darkMode ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" : "border-gray-300 bg-white text-black placeholder-gray-500"}
        `}
      />
    </div>
  );
}
