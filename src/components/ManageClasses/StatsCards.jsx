import React from "react";
import { useNavigate } from "react-router-dom";
import { FiThumbsUp, FiUsers, FiCalendar } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import Theme Context

const stats = [
  {
    title: "Average Feedback",
    value: "4.5",
    icon: <FiThumbsUp size={28} />,
    link: "/manage-classes/feedback",
  },
  {
    title: "Upcoming Sessions",
    value: "25",
    icon: <FiUsers size={28} />,
    link: "/manage-classes/sessions",
  },
  {
    title: "Class Covered",
    value: "50",
    icon: <FiCalendar size={28} />,
    link: "/manage-classes/classes",
  },
];

export default function StatsCards() {
  const navigate = useNavigate();
  const { darkMode } = useTheme(); // ✅ Get dark mode state

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((s, i) => (
        <div
          key={i}
          onClick={() => navigate(s.link)}
          className={`rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer border-2 transition-all duration-300 transform 
            ${
              darkMode
                ? "bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                : "bg-gradient-to-b from-white to-blue-50 border-gray-200 hover:-translate-y-1 hover:shadow-xl"
            }`}
        >
          {/* Icon */}
          <div
            className={`mb-3 ${
              darkMode ? "text-blue-400" : "text-blue-500"
            }`}
          >
            {s.icon}
          </div>

          {/* Title */}
          <p
            className={`font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {s.title}
          </p>

          {/* Value */}
          <h2
            className={`text-2xl font-bold mt-1 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {s.value}
          </h2>

          {/* Button */}
          <button
            className={`mt-3 text-sm px-4 py-1 rounded-full font-medium border shadow-sm transition-all duration-200
              ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-blue-400 hover:bg-gray-700 hover:border-gray-500"
                  : "bg-white border border-gray-200 text-blue-500 hover:bg-blue-100"
              }`}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
