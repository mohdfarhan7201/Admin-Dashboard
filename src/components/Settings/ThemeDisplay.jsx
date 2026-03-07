// src/components/settings/ThemeDisplay.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeDisplay({ language, setLanguage }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-2xl shadow transition-colors
      ${darkMode ? "bg-gray-900 text-white shadow-gray-500 " : "bg-white text-black"}`}
    >
      <h2 className="font-semibold mb-4">Theme & Display</h2>

      {/* Dark/Light toggle */}
      <div className="flex justify-between items-center py-2">
        <span>{darkMode ? "🌙Dark Mode" : "☀️ Light Mode"}</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
            darkMode ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white transform transition ${
              darkMode ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>

      {/* Language select */}
      <div className="flex justify-between items-center py-2">
        <span>Language</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`p-1 rounded shadow transition-colors
          ${darkMode ? "bg-gray-900 text-white border-1 border-white" : "bg-white text-black"}`}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
}
