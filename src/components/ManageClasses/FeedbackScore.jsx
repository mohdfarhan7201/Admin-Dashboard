import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

export default function FeedbackScore() {
  const { darkMode } = useTheme(); // ✅ Access darkMode from context

  const data = [
    { name: "Positive", value: 65 },
    { name: "Negative", value: 25 },
    { name: "Neutral", value: 10 },
  ];
  const COLORS = ["#22c55e", "#ef4444", "#facc15"];

  return (
    <div
      className={`flex items-center gap-6 shadow rounded-lg p-6 mb-6 transition-all duration-300 ${
        darkMode ? "bg-[#242B4E] text-white" : "bg-white text-black"
      }`}
    >
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={55}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div>
        <h3
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Feedback Score
        </h3>
        <p className={darkMode ? "text-gray-300" : "text-gray-500"}>
          65% Positive
        </p>
      </div>
    </div>
  );
}
