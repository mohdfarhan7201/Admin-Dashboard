import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import dark mode context

export default function GrowthChart() {
  const { darkMode } = useTheme(); // ✅ access dark mode
  const [filter, setFilter] = useState("Yearly");
  const [selectedYear, setSelectedYear] = useState("2023");

  const dataset = {
    "2016": { yearlyGrowth: 2000, monthly: [...Array(12)].map((_, i) => ({ month: `M${i+1}`, growth: 200 + i * 150 })), topMonth: "Dec 2016", topInstructor: { name: "Ravi Kumar", role: "Fitness Trainer" }},
    "2017": { yearlyGrowth: 3200, monthly: [...Array(12)].map((_, i) => ({ month: `M${i+1}`, growth: 300 + i * 170 })), topMonth: "Dec 2017", topInstructor: { name: "Priya Sharma", role: "Yoga Coach" }},
    "2018": { yearlyGrowth: 5500, monthly: [...Array(12)].map((_, i) => ({ month: `M${i+1}`, growth: 400 + i * 200 })), topMonth: "Sep 2018", topInstructor: { name: "Ravi Kumar", role: "Fitness Trainer" }},
    "2022": { yearlyGrowth: 16000, monthly: [...Array(12)].map((_, i) => ({ month: `M${i+1}`, growth: 1000 + i * 250 })), topMonth: "Dec 2022", topInstructor: { name: "Priya Sharma", role: "Yoga Coach" }},
    "2023": { yearlyGrowth: 20000, monthly: [...Array(12)].map((_, i) => ({ month: `M${i+1}`, growth: 1200 + i * 300 })), topMonth: "Nov 2023", topInstructor: { name: "Adil Srivastava", role: "Yoga Trainer" }},
  };

  const yearlyData = Object.keys(dataset).map((year) => ({
    year,
    growth: dataset[year].yearlyGrowth,
  }));

  const bestYear = Object.keys(dataset).reduce((a, b) =>
    dataset[a].yearlyGrowth > dataset[b].yearlyGrowth ? a : b
  );

  const chartData =
    filter === "Yearly" ? yearlyData : dataset[selectedYear].monthly;

  const stats = {
    topMonth:
      filter === "Monthly"
        ? dataset[selectedYear].topMonth
        : dataset[bestYear].topMonth,
    topYear: bestYear,
    topInstructor:
      filter === "Monthly"
        ? dataset[selectedYear].topInstructor
        : dataset[bestYear].topInstructor,
  };

  return (
    <div
      className={`p-6 rounded-2xl shadow transition-all ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-2xl">Growth</h3>
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={`text-sm border px-3 py-1 rounded-lg transition ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-200"
                : "bg-white border-gray-300 text-gray-700"
            }`}
          >
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
          </select>

          {filter === "Monthly" && (
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className={`text-sm border px-3 py-1 rounded-lg transition ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-200"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              {Object.keys(dataset).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={darkMode ? "#10B981" : "#22c55e"}
                stopOpacity={0.6}
              />
              <stop
                offset="100%"
                stopColor={darkMode ? "#10B981" : "#22c55e"}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={darkMode ? "#374151" : "#e5e7eb"}
          />
          <XAxis
            dataKey={filter === "Yearly" ? "year" : "month"}
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
              border: "1px solid #e5e7eb",
              fontSize: "12px",
            }}
          />

          <Area
            type="monotone"
            dataKey="growth"
            stroke="none"
            fill="url(#growthGradient)"
          />

          <Line
            type="monotone"
            dataKey="growth"
            stroke={darkMode ? "#10B981" : "#22c55e"}
            strokeWidth={3}
            dot={{
              r: 4,
              fill: darkMode ? "#10B981" : "#22c55e",
              strokeWidth: 2,
              stroke: "#fff",
            }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Bottom labels */}
      <div
        className={`flex justify-between mt-3 text-xs ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span>{filter === "Yearly" ? "Years" : "Months"}</span>
        <span>Growth Value</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-6 text-center">
        <div>
          <p className="text-sm text-gray-400">Top Month</p>
          <p className="text-lg font-semibold text-yellow-500">
            {stats.topMonth}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Top Year</p>
          <p className="text-lg font-semibold">{stats.topYear}</p>
          <p className="text-xs text-gray-500">Best Performing Year</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Top Instructor</p>
          <div className="flex items-center justify-center mt-1 gap-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="Instructor"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-left">
              <p className="text-sm font-medium">{stats.topInstructor.name}</p>
              <p className="text-xs text-gray-500">
                {stats.topInstructor.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
