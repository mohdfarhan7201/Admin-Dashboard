// src/components/settings/ActiveStatusChart.jsx
import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/ThemeContext";

const totalUsersData = [
  { name: "New", value: 8000 },
  { name: "Active", value: 4209 },
  { name: "Inactive", value: 2100 },
];
const COLORS = ["#1dab62", "#d1d5db", "red"];

export default function ActiveStatusChart() {
  const { darkMode } = useContext(ThemeContext);
  const { ref, inView } = useInView({
    triggerOnce: true, // run animation only once
    threshold: 0.3, // 30% of the element must be visible
  });

  return (
    <div
      ref={ref}
      className={`p-6 rounded-lg shadow hover:shadow-2xl transition-shadow duration-500 
        ${darkMode ? "bg-gray-900 text-white  shadow-gray-500" : "bg-white text-gray-700"}`}
    >
      <h3
        className={`text-lg font-semibold mb-4 transition-colors duration-300 
          ${darkMode ? "text-white" : "text-gray-700"}`}
      >
        Active Status
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3 w-1/2">
          {totalUsersData.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span
                className={`font-medium transition-colors duration-300 
                  ${darkMode ? "text-gray-200" : "text-gray-700"}`}
              >
                {entry.name}
              </span>
              <span
                className={`ml-auto transition-colors duration-300 
                  ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                {(
                  (entry.value /
                    totalUsersData.reduce((acc, cur) => acc + cur.value, 0)) *
                  100
                ).toFixed(1)}
                %
              </span>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={totalUsersData}
                dataKey="value"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={5}
                isAnimationActive={inView} // animate only when visible
                animationBegin={0}
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {totalUsersData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
