import React from "react";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import theme context

export default function QuarterGoalPage() {
  const { darkMode } = useTheme();

  return (
    <div className={`p-6 min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-4">Quarter Goal</h2>
      <p>Detailed analytics about quarterly goals will be shown here.</p>
    </div>
  );
}
