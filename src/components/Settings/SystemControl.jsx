// src/components/settings/SystemControl.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaChevronRight } from "react-icons/fa";


export default function SystemControl() {
  const { darkMode } = useContext(ThemeContext);

  const items = [
    "Data Backup & Restore",
    "Integration Settings",
    "API Keys & Webhooks",
    "Logs",
  ];

  return (
    <div
      className={`p-6 rounded-2xl shadow transition-colors duration-300 
        ${darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-white text-black"}`}
    >
      <h2 className="font-semibold mb-4">System Control</h2>
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
