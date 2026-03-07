import React from "react";
import { FaUser, FaFileAlt, FaUniversity, FaCheck } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext"; // adjust path if needed

export default function ProgressBar({ step }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex items-center mb-8 w-full ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Step 1 */}
      <div className="flex flex-col items-center z-10">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full border-4 transition-all duration-1500 ease-in-out
          ${
            step > 1
              ? "bg-[#1D7464] border-[#1D7464] text-white"
              : step === 1
              ? "bg-[#1D7464] border-[#1D7464] text-white"
              : darkMode
              ? "bg-gray-700 border-gray-500 text-gray-300"
              : "bg-gray-200 border-gray-300 text-gray-500"
          }`}
        >
          {step > 1 ? <FaCheck size={20} /> : <FaUser size={20} />}
        </div>
        <span className="mt-2 text-sm font-medium text-center">
          Personal Details
        </span>
      </div>

      {/* Line between Step 1 & 2 */}
      <div
        className={`flex-1 h-3 -ml-6 -mr-6 -mt-6 transition-all duration-500 ease-in-out ${
          step >= 2 ? "bg-[#1D7464]" : darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      ></div>

      {/* Step 2 */}
      <div className="flex flex-col items-center z-10">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full border-4 transition-all duration-500 ease-in-out
          ${
            step > 2
              ? "bg-[#1D7464] border-[#1D7464] text-white"
              : step === 2
              ? "bg-[#1D7464] border-[#1D7464] text-white"
              : darkMode
              ? "bg-gray-700 border-gray-500 text-gray-300"
              : "bg-gray-200 border-gray-300 text-gray-500"
          }`}
        >
          {step > 2 ? <FaCheck size={20} /> : <FaFileAlt size={20} />}
        </div>
        <span className="mt-2 text-sm font-medium text-center">Document</span>
      </div>

      {/* Line between Step 2 & 3 */}
      <div
        className={`flex-1 h-3 -ml-6 -mr-6 -mt-6 transition-all duration-500 ease-in-out ${
          step >= 3 ? "bg-[#1D7464]" : darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      ></div>

      {/* Step 3 */}
      <div className="flex flex-col items-center z-10">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full border-4 transition-all duration-500 ease-in-out
          ${
            step === 3
              ? "bg-[#1D7464] border-[#1D7464] text-white"
              : darkMode
              ? "bg-gray-700 border-gray-500 text-gray-300"
              : "bg-gray-200 border-gray-300 text-gray-500"
          }`}
        >
          {step > 3 ? <FaCheck size={20} /> : <FaUniversity size={20} />}
        </div>
        <span className="mt-2 text-sm font-medium text-center">
          Bank Details
        </span>
      </div>
    </div>
  );
}
