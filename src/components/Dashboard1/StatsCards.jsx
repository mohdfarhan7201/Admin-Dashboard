import React from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa"; // Growth + Right arrow icons
import { useTheme } from "../../context/ThemeContext"; // <-- import ThemeContext

export default function StatsCards() {
  const { darkMode } = useTheme(); // <-- get dark mode

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      
      {/* Total Users Card */}
      <div
        className={`p-6 rounded-lg shadow hover:shadow-xl h-48 flex flex-col justify-between transition duration-300 border box-border
        ${darkMode 
          ? "bg-gray-900 border-gray-700 hover:bg-[#334155] text-white" 
          : "bg-white border-gray-300 hover:bg-teal-50 text-black"}`}
      >
        <div>
          <h3 className={`text-gray-500 font-bold ${darkMode && "text-white font-bold"}`}>
            Total Users
          </h3>
          <p className="text-4xl font-bold flex items-center gap-2 p-3">
            10k 
            <FaArrowUp className="text-green-500 text-xl" /> {/* Growth Icon */}
          </p>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-400"}`}>
            Lorem amet has been include users report.
          </p>
        </div>
        {/* Link */}
        <a
          href="#"
          className={`font-medium flex items-center gap-2 hover:underline 
          ${darkMode ? "text-orange-400" : "text-orange-800"}`}
        >
          User Report
          <FaArrowRight />
        </a>
      </div>

      {/* Revenue Card */}
      <div
        className={`p-6 rounded-lg shadow hover:shadow-xl h-48 flex flex-col justify-between transition duration-300 border box-border
        ${darkMode 
          ? "bg-gray-900 border-gray-700 hover:bg-[#334155] text-white" 
          : "bg-white border-gray-300 hover:bg-teal-50 text-black"}`}
      >
        <div>
          <h3 className={`text-gray-500 font-bold ${darkMode && "text-white font-bold"}`}>
            Revenue This Month
          </h3>
          <p className="text-4xl font-bold flex items-center gap-2 p-3">
            8.5k
            <FaArrowUp className="text-green-500 text-xl" />
          </p>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-400"}`}>
            Lorem amet has been include Revenue report.
          </p>
        </div>
        <a
          href="#"
          className={`font-medium flex items-center gap-2 hover:underline 
          ${darkMode ? "text-orange-400" : "text-orange-800"}`}
        >
          Revenue Report
          <FaArrowRight />
        </a>
      </div>

      {/* Pending Requests Card */}
      <div
        className={`p-6 rounded-lg shadow hover:shadow-xl h-48 flex flex-col justify-between transition duration-300 border box-border
        ${darkMode 
          ? "bg-gray-900 border-gray-700 hover:bg-[#334155] text-white" 
          : "bg-white border-gray-300 hover:bg-teal-50 text-black"}`}
      >
        <div>
          <h3 className={`text-gray-500 font-bold ${darkMode && "text-white font-bold"}`}>
            Pending Requests
          </h3>
          <p className="text-4xl font-bold flex items-center gap-2 p-3">
            1k
            <FaArrowUp className="text-green-500 text-xl" />
          </p>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-400"}`}>
            Lorem amet has been include Request report.
          </p>
        </div>
        <a
          href="#"
          className={`font-medium flex items-center gap-2 hover:underline 
          ${darkMode ? "text-orange-400" : "text-orange-800"}`}
        >
          Request Report
          <FaArrowRight />
        </a>
      </div>

    </div>
  );
}
