import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // ✅ Import theme context

export default function FeedbackDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme(); // ✅ Use theme

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`mb-4 flex items-center space-x-2 font-medium transition ${
          darkMode
            ? "text-blue-400 hover:text-blue-300"
            : "text-blue-600 hover:text-blue-500"
        }`}
      >
        ← Back
      </button>

      <h2
        className={`text-2xl font-bold mb-4 ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Feedback Details
      </h2>

      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        This is the detailed feedback page for <b>Feedback ID:</b> {id}
      </p>
    </div>
  );
}
