import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import theme context

export default function InstructorPerformanceChart() {
  const { darkMode } = useTheme(); // ✅ Access dark mode

  const data = [
    { name: "Nandita", role: "Physiotherapist", score: 280 },
    { name: "Aditi", role: "Yoga Trainer", score: 220 },
    { name: "Vashu", role: "Yoga Doctor", score: 160 },
    { name: "Ekram", role: "Yoga Trainer", score: 250 },
    { name: "Farhan", role: "Yoga Trainer", score: 260 },
    { name: "Shreya", role: "Yoga Doctor", score: 270 },
    { name: "Aisha", role: "Physiotherapist", score: 190 },
  ];

  return (
    <div
      className={`p-6 rounded-2xl shadow hover:shadow-lg transition-all ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Instructor Performance Score</h3>
        <button
          className={`flex items-center gap-1 text-sm border px-3 py-1 rounded-lg transition ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
        >
          This Month <FiChevronDown size={14} />
        </button>
      </div>

      {/* Chart Section */}
      <div className="flex items-center">
        {/* Left Vertical Label */}
        <div
          className={`text-sm font-bold -rotate-90 whitespace-nowrap -mr-16 -ml-14 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Performance Score
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} barSize={40}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={darkMode ? "#8B5CF6" : "#7C3AED"}
                  stopOpacity={0.9}
                />
                <stop
                  offset="100%"
                  stopColor={darkMode ? "#A78BFA" : "#C4B5FD"}
                  stopOpacity={0.4}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={darkMode ? "#374151" : "#e5e7eb"}
            />
            <XAxis
              dataKey="name"
              tick={({ x, y, payload }) => {
                const instructor = data.find((d) => d.name === payload.value);
                return (
                  <g transform={`translate(${x},${y + 10})`}>
                    <text
                      x={0}
                      y={0}
                      dy={10}
                      textAnchor="middle"
                      fill={darkMode ? "#E5E7EB" : "#374151"}
                      fontSize={12}
                      fontWeight="600"
                    >
                      {payload.value}
                    </text>
                    <text
                      x={0}
                      y={15}
                      dy={10}
                      textAnchor="middle"
                      fill={darkMode ? "#9CA3AF" : "#9ca3af"}
                      fontSize={11}
                    >
                      {instructor?.role}
                    </text>
                  </g>
                );
              }}
            />
            <YAxis
              tick={{
                fill: darkMode ? "#D1D5DB" : "#6b7280",
                fontSize: 12,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                color: darkMode ? "#f9fafb" : "#111827",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                fontSize: "12px",
              }}
            />
            <Bar
              dataKey="score"
              fill="url(#barGradient)"
              radius={[6, 6, 0, 0]}
              className="transition-transform  cursor-pointer"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Label */}
      <div
        className={`flex justify-center mt-2 text-sm font-bold ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Instructor Name & Roles
      </div>
    </div>
  );
}
