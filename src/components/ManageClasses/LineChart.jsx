import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart as LC,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiSmile, FiMeh, FiFrown } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

export default function DashboardCharts() {
  const { darkMode } = useTheme(); // ✅ Access darkMode from context

  // Pie chart data
  const pieData = [
    { name: "Positive", value: 65, color: "#22c55e", icon: <FiSmile /> },
    { name: "Neutral", value: 20, color: "#facc15", icon: <FiMeh /> },
    { name: "Negative", value: 15, color: "#ef4444", icon: <FiFrown /> },
  ];

  // Line chart data
  const lineData = [
    { month: "Jan", thisYear: 10000, lastYear: 12000 },
    { month: "Feb", thisYear: 8000, lastYear: 15000 },
    { month: "Mar", thisYear: 12000, lastYear: 11000 },
    { month: "Apr", thisYear: 20000, lastYear: 18000 },
    { month: "May", thisYear: 25000, lastYear: 22000 },
    { month: "Jun", thisYear: 22000, lastYear: 24000 },
    { month: "Jul", thisYear: 24000, lastYear: 28000 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 transition-all duration-300">
      {/* Feedback Score */}
      <div
        className={`shadow rounded-lg p-6 border-2 w-100 transition-all duration-300
        ${darkMode ? "bg-[#242B4E] border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"}
        hover:shadow-xl`}
      >
        <h3 className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-semibold mb-4`}>
          Feedback Score
        </h3>
        <div className="flex items-center">
          {/* Donut Chart */}
          <div className="relative w-40 h-40">
            <PieChart width={160} height={160}>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={70}
                paddingAngle={3}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`text-xl font-bold ${
                  darkMode ? "text-gray-100" : "text-gray-700"
                }`}
              >
                65%
              </span>
            </div>
          </div>

          {/* Legends */}
          <div className="ml-6 space-y-2">
            {pieData.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 p-1 rounded cursor-pointer transition
                  ${darkMode ? "text-gray-300 hover:bg-[#2B335A]" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <span style={{ color: item.color, fontSize: "18px" }}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
                <span className="ml-auto font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Total Users */}
      <div
        className={`shadow rounded-lg p-6 border-2 -ml-28 w-157 transition-all duration-300 
        ${darkMode ? "bg-[#242B4E] border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"}
        hover:shadow-xl`}
      >
        <div className="flex items-center gap-6 mb-4">
          <h3 className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-semibold`}>
            Total Users
          </h3>
          <div
            className={`flex items-center gap-4 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              This year
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-indigo-300 rounded-full"></span>
              Last year
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LC data={lineData}>
            <XAxis
              dataKey="month"
              stroke={darkMode ? "#D1D5DB" : "#374151"} // Axis text color
            />
            <YAxis stroke={darkMode ? "#D1D5DB" : "#374151"} />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#1F2645" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: darkMode ? "1px solid #333" : "1px solid #ddd",
              }}
            />
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke={darkMode ? "#22d3ee" : "#000"}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke={darkMode ? "#818cf8" : "#818cf8"}
              strokeDasharray="4 4"
              strokeWidth={2}
              dot={false}
            />
          </LC>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
