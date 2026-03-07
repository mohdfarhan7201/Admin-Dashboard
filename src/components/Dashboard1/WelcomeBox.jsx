import React from "react";
import yoga_pose from "../../assets/dashboard1.svg";
import { useTheme } from "../../context/ThemeContext"; // ✅ import context

export default function WelcomeBox() {
  const { darkMode } = useTheme(); // ✅ get darkMode state

  return (
    <div
      className={`rounded-xl pl-6 mb-8 shadow flex justify-between items-center 
      ${darkMode 
        ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-gray-500" 
        : "bg-gradient-to-r from-[#5FC4B0] to-[#FFFFFF] text-black"
      }`}
    >
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Welcome Admin!
        </h2>
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
          Here’s your platform summary <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
      <img
        src={yoga_pose}
        alt="Yoga Pose"
        className="w-120 h-50 rounded-lg object-cover"
      />
    </div>
  );
}
