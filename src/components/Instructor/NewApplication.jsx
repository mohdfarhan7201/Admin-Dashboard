// import React, { useState, useRef, useEffect } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaThLarge, FaList } from "react-icons/fa";
// import { useTheme } from "../../context/ThemeContext"; // Import dark mode hook

// const data = [
//   { id: 1, name: "Rahul", role: "Yoga Instructor" },
//   { id: 2, name: "Priya", role: "Yoga Doctor" },
//   { id: 3, name: "Amit", role: "Yoga Instructor" },
//   { id: 4, name: "Neha", role: "Yoga Doctor" },
//   { id: 5, name: "Rohan", role: "Yoga Instructor" },
//   { id: 6, name: "Sita", role: "Yoga Doctor" },
//   { id: 7, name: "Vikas", role: "Yoga Instructor" },
//   { id: 8, name: "Kiran", role: "Yoga Doctor" },
//   { id: 9, name: "Anjali", role: "Yoga Instructor" },
//   { id: 10, name: "Raj", role: "Yoga Doctor" },
//   // ... rest of the data
// ];

// const pageSize = 5;

// export default function RecentApplication() {
//   const { darkMode } = useTheme(); // Get darkMode
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState("grid");
//   const gridRef = useRef(null);
//   const [visibleCards, setVisibleCards] = useState({});

//   // 🔹 Track visible cards
//   useEffect(() => {
//     if (!gridRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const id = entry.target.getAttribute("data-id");
//           if (entry.isIntersecting) {
//             setVisibleCards((prev) => ({ ...prev, [id]: true }));
//           }
//         });
//       },
//       { threshold: 0.2, root: gridRef.current }
//     );

//     const cards = gridRef.current.querySelectorAll(".card-item");
//     cards.forEach((card) => observer.observe(card));

//     return () => {
//       cards.forEach((card) => observer.unobserve(card));
//     };
//   }, [searchTerm, activeFilter, viewMode]);

//   // 🔹 Filter logic
//   const filteredData =
//     activeFilter === "All"
//       ? data
//       : data.filter((item) =>
//           item.role.toLowerCase().includes(activeFilter.toLowerCase())
//         );

//   // 🔹 Search filter
//   const searchedData = filteredData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(searchedData.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const paginatedData = searchedData.slice(startIndex, startIndex + pageSize);

//   // 🔹 Pagination numbers
//   const getPaginationNumbers = () => {
//     if (totalPages <= 3) return [...Array(totalPages)].map((_, i) => i + 1);
//     if (currentPage === 1) return [1, 2, 3];
//     if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
//     return [currentPage - 1, currentPage, currentPage + 1];
//   };

//   // 🔹 Colors for dark/light mode
//   const containerBg = darkMode ? "bg-[#1E1F2A]" : "bg-white";
//   const textColor = darkMode ? "text-gray-300" : "text-gray-900";
//   const filterActive = darkMode ? "bg-green-600 text-white border-green-600" : "bg-green-500 text-white border-green-500";
//   const filterInactive = darkMode
//     ? "bg-[#2A2F4A] text-gray-300 border-gray-600 hover:bg-[#3A3650]"
//     : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200";
//   const toggleActive = darkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-800";
//   const toggleInactive = darkMode ? "bg-[#2A2F4A] text-gray-300 border-gray-600 hover:bg-[#3A3650]" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100";
//   const inputBg = darkMode ? "bg-[#2A2F4A] text-gray-300 border-gray-600 placeholder-gray-400" : "bg-white text-gray-700 border-gray-300 placeholder-gray-400";

//   return (
//     <div className={`p-6 rounded-lg shadow-md -mb-5 transition-colors duration-300 ${containerBg}`}>
//       <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>New Application</h2>

//       {/* Filter buttons */}
//       <div className="flex gap-3 mb-4 flex-wrap">
//         {["All", "Yoga Instructor", "Yoga Doctor", "Physiotherapist", "AI Consultant"].map((btn, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setActiveFilter(btn);
//               setCurrentPage(1);
//             }}
//             className={`px-4 py-2 rounded-full text-lg font-semibold border transition-colors duration-300 ${activeFilter === btn ? filterActive : filterInactive}`}
//           >
//             {btn}
//           </button>
//         ))}
//       </div>

//       {/* Search + Toggle */}
//       <div className="flex items-center justify-between mb-4">
//         {/* Toggle */}
//         <div className="flex gap-2">
//           <button
//             onClick={() => setViewMode("grid")}
//             className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition-colors duration-300 ${viewMode === "grid" ? toggleActive : toggleInactive}`}
//           >
//             <FaThLarge /> Grid Card
//           </button>
//           <button
//             onClick={() => setViewMode("table")}
//             className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition-colors duration-300 ${viewMode === "table" ? toggleActive : toggleInactive}`}
//           >
//             <FaList /> Table
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative w-72">
//           <FiSearch className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-400"}`} />
//           <input
//             type="text"
//             placeholder="Search Instructor/ Class/ Tag"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             className={`w-full border rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300 ${inputBg}`}
//           />
//         </div>
//       </div>

//       {/* Table View */}
//       {viewMode === "table" && (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className={`text-md transition-colors duration-300 ${darkMode ? "bg-[#2A2F4A] text-gray-300" : "bg-gray-100 text-gray-900"}`}>
//                 <th className="p-3 text-left">Name</th>
//                 <th className="p-3 text-center">Role</th>
//                 <th className="p-3 text-center">Action Button</th>
//                 <th className="p-3 text-center">View Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.map((item, index) => {
//                 const isEven = index % 2 === 0;
//                 const rowBg = darkMode
//                   ? isEven
//                     ? "bg-[#2A2F4A]"
//                     : "bg-[#3A3650]"
//                   : isEven
//                   ? "bg-blue-50"
//                   : "bg-purple-50";
//                 return (
//                   <tr key={item.id} className={`text-sm transition-colors duration-300 ${rowBg} ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
//                     <td className="p-3 flex items-center gap-2">
//                       <img
//                         src={`https://i.pravatar.cc/40?img=${item.id}`}
//                         alt="avatar"
//                         className="w-8 h-8 rounded-full"
//                       />
//                       {item.name}
//                     </td>
//                     <td className="p-3 text-center">{item.role}</td>
//                     <td className="p-3 flex gap-2 items-center justify-center">
//                       <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs">Approved</button>
//                       <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-xs">Rejected</button>
//                     </td>
//                     <td className="p-3 text-center">
//                       <button className={`px-3 py-1 rounded-md text-xs ${isEven ? "bg-blue-200 text-blue-700" : "bg-purple-200 text-purple-700"} ${darkMode ? "bg-[#3A3650] text-gray-300" : ""}`}>
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="flex justify-end items-center gap-2 mt-4">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((p) => p - 1)}
//               className={`px-3 py-1 border rounded-full transition-colors duration-300 ${darkMode ? "bg-[#2A2F4A] text-gray-300 border-gray-600 disabled:opacity-50" : "bg-gray-100 text-gray-700 border-gray-300 disabled:opacity-50"}`}
//             >
//               ‹
//             </button>
//             {getPaginationNumbers().map((num) => (
//               <button
//                 key={num}
//                 onClick={() => setCurrentPage(num)}
//                 className={`px-3 py-1 border rounded-full transition-colors duration-300 ${
//                   currentPage === num
//                     ? darkMode
//                       ? "bg-blue-600 text-white border-blue-600"
//                       : "bg-black text-white"
//                     : darkMode
//                     ? "bg-[#2A2F4A] text-gray-300 border-gray-600 hover:bg-[#3A3650]"
//                     : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
//                 }`}
//               >
//                 {num}
//               </button>
//             ))}
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((p) => p + 1)}
//               className={`px-4 py-1 border rounded-full transition-colors duration-300 ${darkMode ? "bg-[#2A2F4A] text-gray-300 border-gray-600 disabled:opacity-50" : "bg-gray-100 text-gray-700 border-gray-300 disabled:opacity-50"}`}
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Grid View */}
//       {viewMode === "grid" && (
//         <div
//           ref={gridRef}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2"
//         >
//           {searchedData.map((item, index) => {
//             const isEven = index % 2 === 0;
//             const cardBg = darkMode
//               ? isEven
//                 ? "bg-[#2A2F4A]"
//                 : "bg-[#3A3650]"
//               : isEven
//               ? "bg-blue-50"
//               : "bg-purple-50";
//             return (
//               <div
//                 key={item.id}
//                 data-id={item.id}
//                 className={`card-item p-4 rounded-lg shadow-md flex flex-col gap-3 transition-opacity duration-500 ${cardBg} ${visibleCards[item.id] ? "opacity-100 animate-fadeIn" : "opacity-0"}`}
//               >
//                 {/* Profile */}
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={`https://i.pravatar.cc/80?img=${item.id}`}
//                     alt="avatar"
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-300" : ""}`}>{item.name}</h3>
//                     <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>{item.role}</p>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-2 mt-2 justify-center">
//                   <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs">Approved</button>
//                   <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-xs">Rejected</button>
//                 </div>

//                 {/* View Button */}
//                 <button
//                   className={`px-3 py-1 rounded-md text-xs ${isEven ? "bg-blue-200 text-blue-700" : "bg-purple-200 text-purple-700"} ${darkMode ? "bg-[#3A3650] text-gray-300" : ""}`}
//                 >
//                   View
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }







import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaThLarge, FaList } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import InstructorOverview from "./InstructorOverview"; // ✅ Import new page

const data = [
  { id: 1, name: "Rahul", role: "Yoga Instructor" },
  { id: 2, name: "Priya", role: "Yoga Doctor" },
  { id: 3, name: "Amit", role: "Yoga Instructor" },
  { id: 4, name: "Neha", role: "Yoga Doctor" },
  { id: 5, name: "Rohan", role: "Yoga Instructor" },
  { id: 6, name: "Sita", role: "Yoga Doctor" },
  { id: 7, name: "Vikas", role: "Yoga Instructor" },
  { id: 8, name: "Kiran", role: "Yoga Doctor" },
  { id: 9, name: "Anjali", role: "Yoga Instructor" },
  { id: 10, name: "Raj", role: "Yoga Doctor" },
];

const pageSize = 5;

export default function RecentApplication() {
  const { darkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const gridRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  // 🔹 Intersection observer for fade-in cards
  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2, root: gridRef.current }
    );

    const cards = gridRef.current.querySelectorAll(".card-item");
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, [searchTerm, activeFilter, viewMode]);

  // 🔹 Filter + Search
  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((item) =>
          item.role.toLowerCase().includes(activeFilter.toLowerCase())
        );
  const searchedData = filteredData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Pagination
  const totalPages = Math.ceil(searchedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = searchedData.slice(startIndex, startIndex + pageSize);

  const getPaginationNumbers = () => {
    if (totalPages <= 3) return [...Array(totalPages)].map((_, i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  // 🔹 Theme colors
  const containerBg = darkMode ? "bg-[#1E1F2A]" : "bg-white";
  const textColor = darkMode ? "text-gray-300" : "text-gray-900";
  const filterActive = darkMode
    ? "bg-green-600 text-white border-green-600"
    : "bg-green-500 text-white border-green-500";
  const filterInactive = darkMode
    ? "bg-[#2A2F4A] text-gray-300 border-gray-600 hover:bg-[#3A3650]"
    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200";
  const toggleActive = darkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-800";
  const toggleInactive = darkMode
    ? "bg-[#2A2F4A] text-gray-300 border-gray-600 hover:bg-[#3A3650]"
    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100";
  const inputBg = darkMode
    ? "bg-[#2A2F4A] text-gray-300 border-gray-600 placeholder-gray-400"
    : "bg-white text-gray-700 border-gray-300 placeholder-gray-400";

  return (
    <>
      {selectedInstructor ? (
        <InstructorOverview onBack={() => setSelectedInstructor(null)} />
      ) : (
        <div className={`p-6 rounded-lg shadow-md transition-colors duration-300 ${containerBg}`}>
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>New Application</h2>

          {/* Filter Buttons */}
          <div className="flex gap-3 mb-4 flex-wrap">
            {["All", "Yoga Instructor", "Yoga Doctor", "Physiotherapist", "AI Consultant"].map(
              (btn, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveFilter(btn);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-lg font-semibold border transition-colors duration-300 ${
                    activeFilter === btn ? filterActive : filterInactive
                  }`}
                >
                  {btn}
                </button>
              )
            )}
          </div>

          {/* Search + Toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition-colors duration-300 ${
                  viewMode === "grid" ? toggleActive : toggleInactive
                }`}
              >
                <FaThLarge /> Grid
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition-colors duration-300 ${
                  viewMode === "table" ? toggleActive : toggleInactive
                }`}
              >
                <FaList /> Table
              </button>
            </div>

            <div className="relative w-72">
              <FiSearch className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400`} />
              <input
                type="text"
                placeholder="Search Instructor..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className={`w-full border rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${inputBg}`}
              />
            </div>
          </div>

          {/* Table View */}
          {viewMode === "table" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr
                    className={`text-md ${
                      darkMode ? "bg-[#2A2F4A] text-gray-300" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-center">Role</th>
                    <th className="p-3 text-center">Action</th>
                    <th className="p-3 text-center">View</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const rowBg = darkMode
                      ? isEven
                        ? "bg-[#2A2F4A]"
                        : "bg-[#3A3650]"
                      : isEven
                      ? "bg-blue-50"
                      : "bg-purple-50";
                    return (
                      <tr key={item.id} className={`${rowBg}`}>
                        <td className="p-3 flex items-center gap-2">
                          <img
                            src={`https://i.pravatar.cc/40?img=${item.id}`}
                            alt="avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          {item.name}
                        </td>
                        <td className="p-3 text-center">{item.role}</td>
                        <td className="p-3 flex gap-2 items-center justify-center">
                          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs">
                            Approved
                          </button>
                          <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-xs">
                            Rejected
                          </button>
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => setSelectedInstructor(item)} // ✅ Navigate to Overview
                            className={`px-3 py-1 rounded-md text-xs ${
                              isEven ? "bg-blue-200 text-blue-700" : "bg-purple-200 text-purple-700"
                            }`}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-1 border rounded-full disabled:opacity-50"
                >
                  ‹
                </button>
                {getPaginationNumbers().map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`px-3 py-1 rounded-full ${
                      currentPage === num ? "bg-black text-white" : "bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-1 border rounded-full disabled:opacity-50"
                >
                  ›
                </button>
              </div>
            </div>
          )}

          {/* Grid View */}
          {viewMode === "grid" && (
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2"
            >
              {searchedData.map((item, index) => {
                const isEven = index % 2 === 0;
                const cardBg = darkMode
                  ? isEven
                    ? "bg-[#2A2F4A]"
                    : "bg-[#3A3650]"
                  : isEven
                  ? "bg-blue-50"
                  : "bg-purple-50";
                return (
                  <div
                    key={item.id}
                    data-id={item.id}
                    className={`card-item p-4 rounded-lg shadow-md flex flex-col gap-3 ${cardBg}`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://i.pravatar.cc/80?img=${item.id}`}
                        alt="avatar"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-2 justify-center">
                      <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs">
                        Approved
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-xs">
                        Rejected
                      </button>
                    </div>

                    <button
                      onClick={() => setSelectedInstructor(item)} // ✅ Open Overview
                      className="px-3 py-1 bg-blue-200 text-blue-700 rounded-md text-xs"
                    >
                      View
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}
