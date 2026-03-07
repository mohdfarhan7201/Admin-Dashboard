import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

export default function Filters({ onFilter }) {
  const { darkMode } = useTheme(); // ✅ Access darkMode from context
  const filters = ["All", "Yoga Trainer", "Yoga Doctor", "Physiotherapist", "AI Consultant"];
  const [activeFilter, setActiveFilter] = useState("All"); // default active "All"

  const handleClick = (filter) => {
    setActiveFilter(filter);
    onFilter(filter);
  };

  return (
    <div className="flex space-x-3 mb-6 transition-all duration-300">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => handleClick(f)}
          className={`px-4 py-2 rounded-full border font-medium transition-all duration-300
            ${
              activeFilter === f
                ? "bg-green-500 text-white border-green-500"
                : darkMode
                ? "border-gray-600 text-gray-200 hover:bg-[#2B335A]"
                : "border-gray-300 text-gray-700 hover:bg-green-100"
            }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
