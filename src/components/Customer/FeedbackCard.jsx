import React from "react";
import { FaStar } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function FeedbackCard({ name, image, text, rating }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-lg shadow p-4 flex gap-4 mb-4 w-5xl
        ${darkMode ? "bg-gray-800 text-white shadow-gray-600" : "bg-white text-gray-800"}
      `}
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">{name}</h2>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-yellow-400" : darkMode ? "text-gray-600" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {text}
        </p>
      </div>
    </div>
  );
}
