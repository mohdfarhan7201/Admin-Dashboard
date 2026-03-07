import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import theme context

export default function StatsCard({ type, title, value, subtitle, link, icon }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <div
      onClick={() => navigate(link)}
      className={`
        rounded-lg p-6 flex flex-col cursor-pointer border-2
        transition-all duration-300
        ${darkMode 
          ? "bg-gray-800 border-gray-700 hover:shadow-xl hover:-translate-y-1" 
          : "bg-white bg-gradient-to-b from-white to-blue-50 border-gray-200 hover:shadow-xl hover:-translate-y-1"
        }
      `}
    >
      <h3 className={`text-2xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
        {title}
      </h3>

      {/* Quarter Goal Circular Progress */}
      {type === "goal" ? (
        <div className="flex items-center justify-center">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke={darkMode ? "#374151" : "#e5e7eb"}
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#06b6d4"
                strokeWidth="8"
                fill="none"
                strokeDasharray={2 * Math.PI * 40}
                strokeDashoffset={(1 - 0.84) * 2 * Math.PI * 40}
                strokeLinecap="round"
              />
            </svg>
            <span className={`absolute inset-0 flex items-center justify-center text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              {value}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <p className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            {value} {icon}
          </p>
          {subtitle && (
            <p className={`text-sm mt-2 mb-8 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Link */}
      {link && (
        <p className={`mt-2 -mb-4 text-sm hover:underline ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}>
          Click to view →
        </p>
      )}
    </div>
  );
}
