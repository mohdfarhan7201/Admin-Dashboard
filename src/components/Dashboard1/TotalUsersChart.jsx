import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useInView } from "react-intersection-observer";
import { MdPadding } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext"; // <-- added

const lineChartData = [
  { month: "Jan", users: 1200, lastYear: 1000 },
  { month: "Feb", users: 2100, lastYear: 1500 },
  { month: "Mar", users: 800, lastYear: 900 },
  { month: "Apr", users: 1600, lastYear: 1400 },
  { month: "May", users: 900, lastYear: 1100 },
  { month: "Jun", users: 1700, lastYear: 1600 },
];

export default function TotalUsersChart() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { darkMode } = useTheme(); // <-- added

  // axis label style that respects theme
  const axisLabelStyle = {
    fontWeight: 600,
    fontSize: 14,
    fill: darkMode ? "#ffffff" : "#333333",
  };

  const axisTickStyle = { fill: darkMode ? "#ffffff" : "#333333" };
  const axisLineColor = darkMode ? "#394856" : "#333333";
  const gridStroke = darkMode ? "#2b394f" : "#f0f0f0";
  const tooltipStyle = {
    backgroundColor: darkMode ? "#1f273d" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  };
  const tooltipWrapperBorder = darkMode ? "1px solid #333" : "1px solid #ccc";
  const legendColor = darkMode ? "#ffffff" : "#000000";

  return (
    <div
      ref={ref}
      className={`col-span-2 p-6 rounded-lg shadow hover:shadow-2xl transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-white text-black"
      }`}
    >
      <h3 className="text-lg font-semibold mb-4 text-black" style={{ color: darkMode ? "#fff" : undefined }}>
        Total Users
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={lineChartData}
          animationBegin={0}
          animationDuration={inView ? 1500 : 0}
        >
          <CartesianGrid stroke={gridStroke} strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            label={{
              value: "Month",
              position: "insideBottom",
              offset: 2,
              style: axisLabelStyle,
            }}
            tick={axisTickStyle}
            tickLine={{ stroke: axisLineColor }}
            axisLine={{ stroke: axisLineColor }}
          />

          <YAxis
            label={{
              value: "Users",
              angle: -90,
              position: "insideLeft",
              offset: 0,
              style: axisLabelStyle,
            }}
            tick={axisTickStyle}
            tickLine={{ stroke: axisLineColor }}
            axisLine={{ stroke: axisLineColor }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: tooltipStyle.backgroundColor,
              color: tooltipStyle.color,
            }}
            wrapperStyle={{
              border: tooltipWrapperBorder,
              borderRadius: 8,
            }}
            formatter={(value) => value}
          />

          <Legend wrapperStyle={{ color: legendColor }} />

          {/* Current Year Line */}
          <Line
            type="monotone"
            dataKey="users"
            stroke="#14b8a6"
            strokeWidth={3}
            name="This Year"
            isAnimationActive={inView}
          />

          {/* Last Year Line (Dotted) */}
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#f97316"
            strokeWidth={3}
            strokeDasharray="5 5"
            name="Last Year"
            isAnimationActive={inView}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
