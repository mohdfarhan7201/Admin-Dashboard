import React, { useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaFilter } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../context/ThemeContext"; // ✅ adjust path

// Weekly data for each week
const weeklyDataFull = {
  "Week 1": [
    { day: "Mon", "Weekly User Signup": 70, "Monthly New User": 50, "Pending Requests": 30 },
    { day: "Tue", "Weekly User Signup": 80, "Monthly New User": 60, "Pending Requests": 40 },
    { day: "Wed", "Weekly User Signup": 65, "Monthly New User": 55, "Pending Requests": 20 },
    { day: "Thu", "Weekly User Signup": 90, "Monthly New User": 75, "Pending Requests": 50 },
    { day: "Fri", "Weekly User Signup": 60, "Monthly New User": 40, "Pending Requests": 25 },
    { day: "Sat", "Weekly User Signup": 60, "Monthly New User": 40, "Pending Requests": 25 },
    { day: "Sun", "Weekly User Signup": 60, "Monthly New User": 40, "Pending Requests": 25 },
  ],
  "Week 2": [
    { day: "Mon", "Weekly User Signup": 75, "Monthly New User": 55, "Pending Requests": 35 },
    { day: "Tue", "Weekly User Signup": 82, "Monthly New User": 62, "Pending Requests": 42 },
    { day: "Wed", "Weekly User Signup": 68, "Monthly New User": 58, "Pending Requests": 22 },
    { day: "Thu", "Weekly User Signup": 92, "Monthly New User": 78, "Pending Requests": 52 },
    { day: "Fri", "Weekly User Signup": 63, "Monthly New User": 43, "Pending Requests": 28 },
    { day: "Sat", "Weekly User Signup": 65, "Monthly New User": 45, "Pending Requests": 27 },
    { day: "Sun", "Weekly User Signup": 62, "Monthly New User": 42, "Pending Requests": 24 },
  ],
};

// Monthly data
const monthlyDataFull = {
  January: [
    { day: "Week 1", "Weekly User Signup": 300, "Monthly New User": 250, "Pending Requests": 150 },
    { day: "Week 2", "Weekly User Signup": 320, "Monthly New User": 280, "Pending Requests": 140 },
    { day: "Week 3", "Weekly User Signup": 280, "Monthly New User": 260, "Pending Requests": 120 },
    { day: "Week 4", "Weekly User Signup": 350, "Monthly New User": 300, "Pending Requests": 160 },
  ],
  February: [
    { day: "Week 1", "Weekly User Signup": 280, "Monthly New User": 240, "Pending Requests": 140 },
    { day: "Week 2", "Weekly User Signup": 300, "Monthly New User": 260, "Pending Requests": 130 },
    { day: "Week 3", "Weekly User Signup": 270, "Monthly New User": 250, "Pending Requests": 110 },
    { day: "Week 4", "Weekly User Signup": 340, "Monthly New User": 290, "Pending Requests": 150 },
  ],
};

export default function GoalProgressChart() {
  const [chartType, setChartType] = useState("week");
  const [filter, setFilter] = useState("All");
  const { darkMode } = useTheme(); // ✅ use theme

  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Dropdown options
  const weekOptions = ["All Weeks", ...Object.keys(weeklyDataFull)];
  const monthOptions = ["All Months", ...Object.keys(monthlyDataFull)];

  // Get filtered chart data
  let chartData = [];
  if (chartType === "week") {
    if (filter === "All" || filter === "All Weeks") {
      chartData = weeklyDataFull["Week 1"];
    } else {
      chartData = weeklyDataFull[filter] || [];
    }
  } else {
    if (filter === "All" || filter === "All Months") {
      chartData = monthlyDataFull["January"];
    } else {
      chartData = monthlyDataFull[filter] || [];
    }
  }

  return (
    <div
      ref={ref}
      className={`p-6 rounded-lg shadow hover:shadow-2xl mb-12 transition-shadow duration-300 ${
        darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Goal Progress</h3>
        <div className="flex items-center gap-3">
          {/* Chart Type Dropdown */}
          <select
            value={chartType}
            onChange={(e) => {
              setChartType(e.target.value);
              setFilter("All");
            }}
            className={`border rounded px-2 py-1 text-sm focus:outline-none ${
              darkMode
                ? "bg-[#1f273d] border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
          </select>

          {/* Filter Dropdown */}
          <div
            className={`flex items-center border rounded px-2 py-1 ${
              darkMode ? "bg-[#1f273d] border-gray-600" : "bg-white border-gray-300"
            }`}
          >
            <FaFilter className={`mr-2 ${darkMode ? "text-gray-300" : "text-gray-500"}`} />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`focus:outline-none text-sm bg-transparent ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {(chartType === "week" ? weekOptions : monthOptions).map((option) => (
                <option
                  key={option}
                  value={option}
                  className={darkMode ? "bg-[#1f273d] text-white" : "bg-white text-black"}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={chartData}
          margin={{ top: 20 }}
          barCategoryGap={15}
          animationBegin={0}
          animationDuration={inView ? 1500 : 0}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
          <XAxis dataKey="day" stroke={darkMode ? "#fff" : "#000"} />
          <YAxis
            domain={[0, chartType === "week" ? 100 : 400]}
            tickFormatter={(value) => `${value}%`}
            stroke={darkMode ? "#fff" : "#000"}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1f273d" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend
            wrapperStyle={{ color: darkMode ? "#fff" : "#000" }}
          />
          <Bar dataKey="Weekly User Signup" fill="#14b8a6" isAnimationActive={inView} />
          <Bar dataKey="Monthly New User" fill="#059669" isAnimationActive={inView} />
          <Bar dataKey="Pending Requests" fill="#f59e0b" isAnimationActive={inView} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
