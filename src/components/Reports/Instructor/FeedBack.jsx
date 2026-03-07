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

export default function DashboardCharts() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
      {/* Feedback Score */}
      <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-100 border-gray-200 border-2">
        <h3 className="text-gray-700 font-semibold mb-4">Feedback Score</h3>
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
              <span className="text-xl font-bold text-gray-700">65%</span>
            </div>
          </div>

          {/* Legends */}
          <div className="ml-6 space-y-2">
            {pieData.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-600 hover:shadow-md p-1 rounded cursor-pointer transition"
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
      <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-160 -ml-30 border-gray-200 border-2">
        <div className="flex items-center gap-6 mb-4">
          <h3 className="text-gray-700 font-semibold">Total Instructor</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500">
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
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#000"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#818cf8"
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
