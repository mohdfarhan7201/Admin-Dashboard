import React from "react";
import { useTheme } from "../../context/ThemeContext"; // ✅ import theme

export default function TrainerTable({ trainers }) {
  const { darkMode } = useTheme(); // ✅ get darkMode

  return (
    <div
      className={`rounded-lg shadow overflow-x-auto mb-6 transition-all duration-300
        ${darkMode ? "bg-gray-800 text-gray-200 border border-gray-700" : "bg-white text-gray-700 border border-gray-200"}
      `}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-black"}`}>
          Instructor Feedback Summary
        </h2>
        <button
          className={`text-sm transition ${
            darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Filter
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead
          className={`text-sm font-medium ${
            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
          }`}
        >
          <tr>
            <th className="px-4 py-3 text-left">Instructor Name</th>
            <th className="px-4 py-3 text-left">Branch/Location</th>
            <th className="px-4 py-3 text-center">Photos</th>
            <th className="px-4 py-3 text-center">Videos</th>
            <th className="px-4 py-3 text-center">Feedback</th>
            <th className="px-4 py-3 text-center">View Details</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((t, i) => {
            const isPurpleRow = i % 2 === 1;
            return (
              <tr
                key={i}
                className={`border-t transition-all duration-300 ${
                  darkMode
                    ? i % 2 === 0
                      ? "bg-gray-700"
                      : "bg-gray-600"
                    : isPurpleRow
                    ? "bg-purple-100"
                    : "bg-blue-50"
                }`}
              >
                <td className="px-4 py-3 flex items-center space-x-3">
                  <img
                    src={t.image || "/placeholder.jpg"}
                    alt={t.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className={darkMode ? "text-white font-medium" : "text-gray-800 font-medium"}>
                    {t.name}
                  </span>
                </td>
                <td className={darkMode ? "px-4 py-3 text-sm text-gray-300" : "px-4 py-3 text-sm text-gray-600"}>
                  {t.branch || "-"}
                </td>
                <td className="px-4 py-3 text-center">{t.photos}</td>
                <td className="px-4 py-3 text-center">{t.videos}</td>
                <td className="px-4 py-3 text-center">{t.feedback}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    className={`px-4 py-1 rounded-lg text-sm font-medium transition
                      ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-white"
                          : isPurpleRow
                          ? "bg-purple-200 hover:bg-purple-300 text-black"
                          : "bg-blue-100 hover:bg-blue-200 text-black"
                      }`}
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
