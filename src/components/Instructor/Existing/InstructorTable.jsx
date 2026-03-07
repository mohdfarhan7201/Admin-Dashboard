// import React from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// export default function InstructorTable({ data, page, setPage, pageSize = 5 }) {
//   const totalPages = Math.ceil(data.length / pageSize);
//   const start = (page - 1) * pageSize;
//   const visible = data.slice(start, start + pageSize);

//   // Pagination logic → show max 3 pages at a time
//   let startPage = Math.max(1, page - 1);
//   let endPage = Math.min(totalPages, startPage + 2);
//   if (endPage - startPage < 2) {
//     startPage = Math.max(1, endPage - 2);
//   }
//   const pages = [];
//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(i);
//   }

//   return (
//     <div className="-mt-122">
//       <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
//         <table className="min-w-full">
//           <thead>
//             <tr className="text-left text-sm text-gray-600 bg-gray-50">
//               <th className="p-3">Name</th>
//               <th className="p-3">Specialization</th>
//               <th className="p-3">Experience</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">View Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {visible.map((r, i) => (
//               <tr
//                 key={r.id}
//                 className={`${
//                   i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
//                 } border-t border-gray-100 hover:bg-gray-100 transition`}
//               >
//                 {/* Name */}
//                 <td className="p-3">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={r.avatar}
//                       alt={r.name}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-medium text-sm">{r.name}</div>
//                       <div className="text-xs text-gray-500">{r.gender}</div>
//                     </div>
//                   </div>
//                 </td>

//                 {/* Specialization */}
//                 <td className="p-3 text-sm">{r.role}</td>

//                 {/* Experience */}
//                 <td className="p-3 text-sm">{r.experience}</td>

//                 {/* Status Badge (updated like image) */}
//                 <td className="p-3">
//                   <span
//                     className={`px-3 py-1 text-xs font-medium rounded-full ${
//                       r.active
//                         ? 'bg-green-100 text-green-600'
//                         : 'bg-red-100 text-red-600'
//                     }`}
//                   >
//                     {r.active ? '● Active' : '● Inactive'}
//                   </span>
//                 </td>

//                 {/* View Details */}
//                 <td className="p-3">
//                   <button
//                     className={`px-4 py-1 text-sm rounded-full transition ${
//                       r.active
//                         ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
//                         : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
//                     }`}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="mt-3 flex items-end justify-end gap-2 ">
//         <button
//           onClick={() => setPage((p) => Math.max(1, p - 1))}
//           className="px-3 py-1 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
//           disabled={page === 1}
//         >
//           <FaChevronLeft />
//         </button>

//         <div className="flex items-center gap-1">
//           {pages.map((p) => (
//             <button
//               key={p}
//               onClick={() => setPage(p)}
//               className={`px-3 py-1 rounded-full text-sm ${
//                 page === p
//                   ? 'bg-black text-white'
//                   : 'bg-white border border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {p}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//           className="px-3 py-1 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
//           disabled={page === totalPages}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext"; // Import theme hook

export default function InstructorTable({ data }) {
  const { darkMode } = useTheme();

  // Table colors
  const tableBg = darkMode ? "bg-[#1F2240]" : "bg-gray-100";
  const headerBg = darkMode ? "bg-[#2A2F4A]" : "bg-gray-100";
  const rowBg = darkMode ? "bg-[#2A2F4A] text-gray-300" : "bg-white text-gray-700";
  const borderColor = darkMode ? "border-gray-600" : "border-white";

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className={`w-full border-6 rounded-lg  ${borderColor} transition-colors duration-300`}>
        <thead className={`${headerBg} transition-colors duration-300`}>
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Specialization</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">View Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr key={i.id} className={`border-t border-4 ${borderColor} transition-colors duration-300 ${rowBg}`}>
              <td className="p-3 flex items-center gap-2">
                <img src={i.img} alt="profile" className="w-8 h-8 rounded-full" />
                {i.name}
              </td>
              <td className="p-3">{i.specialization}</td>
              <td className="p-3">{i.exp}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    i.status === "Active"
                      ? darkMode
                        ? "bg-green-800 text-green-300"
                        : "bg-green-100 text-green-600"
                      : darkMode
                      ? "bg-red-800 text-red-300"
                      : "bg-red-100 text-red-600"
                  } transition-colors duration-300`}
                >
                  {i.status}
                </span>
              </td>
              <td className="p-3">
                <Link
                  to={`/instructor/${i.id}`}
                  className={`px-3 py-1 rounded ml-4 transition-colors duration-300 ${
                    darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
                  }`}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
