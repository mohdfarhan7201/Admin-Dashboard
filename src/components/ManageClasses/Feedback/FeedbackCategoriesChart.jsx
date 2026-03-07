import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import theme context

export default function FeedbackCategoriesChart() {
  const { darkMode } = useTheme(); // ✅ Get theme state

  const data = [
    { name: "Excellent", value: 60000 },
    { name: "Very Good", value: 80000 },
    { name: "Good", value: 55000 },
    { name: "Average", value: 45000 },
    { name: "Poor", value: 30000 },
  ];

  const colors = ["#3b82f6", "#22c55e", "#ec4899", "#f59e0b", "#8b5cf6"];

  return (
    <div
      className={`p-6 rounded-2xl shadow hover:shadow-lg transition relative ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Header with Title */}
      <div className="flex justify-between items-center mb-4">
        <h3
          className={`font-bold text-2xl ${
            darkMode ? "text-gray-100" : "text-gray-700"
          }`}
        >
          Feedback
        </h3>
      </div>

      {/* Dropdown Buttons */}
      <div className="flex gap-2 mb-7">
        <button
          className={`flex items-center gap-1 text-sm border px-3 py-1 rounded-lg transition ${
            darkMode
              ? "text-gray-300 border-gray-600 hover:bg-gray-700"
              : "text-gray-600 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Metric <FiChevronDown size={14} />
        </button>
        <button
          className={`flex items-center gap-1 text-sm border px-3 py-1 rounded-lg transition ${
            darkMode
              ? "text-gray-300 border-gray-600 hover:bg-gray-700"
              : "text-gray-600 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Today <FiChevronDown size={14} />
        </button>
      </div>

      {/* Rotated Y-axis label */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-bold ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Feedback Values
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ left: 30, right: 10, bottom: 20 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={darkMode ? "#374151" : "#e5e7eb"}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: darkMode ? "#d1d5db" : "#6b7280", fontSize: 12 }}
          />
          <YAxis
            tick={{ fill: darkMode ? "#d1d5db" : "#6b7280", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1f2937" : "#ffffff",
              color: darkMode ? "#f9fafb" : "#111827",
              borderRadius: "10px",
              border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
              fontSize: "12px",
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* X-axis label */}
      <div
        className={`text-center mt-2 text-sm font-bold ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Feedback Categories
      </div>
    </div>
  );
}
