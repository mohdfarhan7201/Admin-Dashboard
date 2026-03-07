// src/components/settings/ReportsAnalytics.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaChevronRight } from "react-icons/fa";


export default function ReportsAnalytics() {
  const { darkMode } = useContext(ThemeContext);
  const items = [
    "Download Reports",
    "View Class Performance",
    "Analytics",
    "Payment and Subscription",
  ];

  return (
    <div
      className={`p-6 rounded-2xl shadow transition-colors duration-300 
        ${darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-white text-black"}`}
    >
      <h2 className="font-semibold mb-4">Report & Analytics</h2>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center cursor-pointer hover:text-blue-500"
          >
            {item} <span><FaChevronRight /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
