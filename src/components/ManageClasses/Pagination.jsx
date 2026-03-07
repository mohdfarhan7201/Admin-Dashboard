import React from "react";

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-end items-end space-x-2 mt-6 ">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        className="px-3 py-1 border rounded-full"
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setCurrentPage(p)}
          className={`px-3 py-1  rounded-full ${p === currentPage ? "bg-black text-white" : ""}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        className="px-3 py-1 border rounded-full"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}






// import React from "react";
// import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

// export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
//   const { darkMode } = useTheme(); // ✅ Access theme state

//   if (totalPages <= 1) return null;

//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div
//       className={`flex justify-end items-end space-x-2 mt-6 transition-colors duration-300 ${
//         darkMode ? "text-gray-100" : "text-gray-900"
//       }`}
//     >
//       {/* Prev Button */}
//       <button
//         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//         className={`px-3 py-1 border rounded-full transition-all duration-200 ${
//           darkMode
//             ? "border-gray-700 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900"
//             : "border-gray-300 bg-white hover:bg-gray-100 disabled:bg-gray-200"
//         }`}
//         disabled={currentPage === 1}
//       >
//         &lt;
//       </button>

//       {/* Page Numbers */}
//       {pages.map((p) => (
//         <button
//           key={p}
//           onClick={() => setCurrentPage(p)}
//           className={`px-3 py-1 rounded-full transition-all duration-200 ${
//             p === currentPage
//               ? darkMode
//                 ? "bg-green-500 text-white"
//                 : "bg-green-600 text-white"
//               : darkMode
//               ? "bg-gray-800 hover:bg-gray-700"
//               : "bg-white border border-gray-300 hover:bg-gray-100"
//           }`}
//         >
//           {p}
//         </button>
//       ))}

//       {/* Next Button */}
//       <button
//         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//         className={`px-3 py-1 border rounded-full transition-all duration-200 ${
//           darkMode
//             ? "border-gray-700 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900"
//             : "border-gray-300 bg-white hover:bg-gray-100 disabled:bg-gray-200"
//         }`}
//         disabled={currentPage === totalPages}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// }
