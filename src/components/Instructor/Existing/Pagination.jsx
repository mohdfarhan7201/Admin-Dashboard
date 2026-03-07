import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext"; // Import theme hook

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const { darkMode } = useTheme(); // Get darkMode

  // Compute startPage so that currentPage is always inside the 3-page window
  let startPage = Math.max(currentPage - 1, 1);
  if (startPage + 2 > totalPages) {
    startPage = Math.max(totalPages - 2, 1);
  }

  const pages = Array.from({ length: 3 }, (_, i) => startPage + i).filter(
    (p) => p <= totalPages
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Button colors
  const arrowBtn = darkMode
    ? "bg-[#2A2F4A] text-gray-300 border-gray-600 disabled:opacity-50 hover:bg-[#3A3650]"
    : "bg-gray-100 text-gray-700 border-gray-300 disabled:opacity-50 hover:bg-gray-200";

  return (
    <div className="flex justify-end items-end mt-4 gap-2">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`p-2 rounded-full border transition-colors duration-300 ${arrowBtn}`}
      >
        <ChevronLeft size={14} />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => {
        const pageBtn =
          page === currentPage
            ? darkMode
              ? "bg-blue-600 text-white border-blue-500"
              : "bg-black text-white border-blue-500"
            : darkMode
            ? "bg-[#2A2F4A] text-gray-300 border-gray-600 hover:bg-[#3A3650]"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100";

        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-full border transition-colors duration-300 ${pageBtn}`}
          >
            {page}
          </button>
        );
      })}

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full border transition-colors duration-300 ${arrowBtn}`}
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
