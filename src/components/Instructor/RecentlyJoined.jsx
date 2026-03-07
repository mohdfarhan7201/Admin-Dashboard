import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaList, FaThLarge } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // import your theme hook

const applicantsData = [
  // ... your applicants data
    {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Aman Gupta",
    email: "aman123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Sneha Verma",
    email: "sneha123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    name: "Kavya Nair",
    email: "kavya123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 7,
    name: "Rohit Singh",
    email: "rohit123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=7",
  },
  {
    id: 8,
    name: "Ishita Roy",
    email: "ishita123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: 9,
    name: "Vikas Patel",
    email: "vikas123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 10,
    name: "Meera Joshi",
    email: "meera123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=10",
  },
   {
    id: 11,
    name: "Rahul Kumar",
    email: "rahul123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 12,
    name: "Priya Sharma",
    email: "priya123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 13,
    name: "Aman Gupta",
    email: "aman123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 14,
    name: "Sneha Verma",
    email: "sneha123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 15,
    name: "Arjun Mehta",
    email: "arjun123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 16,
    name: "Kavya Nair",
    email: "kavya123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 17,
    name: "Rohit Singh",
    email: "rohit123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=7",
  },
  {
    id: 18,
    name: "Ishita Roy",
    email: "ishita123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: 19,
    name: "Vikas Patel",
    email: "vikas123@gmail.com",
    specialization: "Yoga Instructor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 20,
    name: "Meera Joshi",
    email: "meera123@gmail.com",
    specialization: "Yoga Doctor",
    doj: "01-Sep-2025",
    img: "https://i.pravatar.cc/100?img=10",
  },

];

export default function RecentApplication() {
  const { darkMode } = useTheme(); // get darkMode from context
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const recordsPerPage = 5;
  const totalPages = Math.ceil(applicantsData.length / recordsPerPage);

  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".animate-on-scroll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fadeIn");
            }
          });
        },
        { threshold: 0.1 }
      );

      cards.forEach((card) => observer.observe(card));
      return () => {
        cards.forEach((card) => observer.unobserve(card));
      };
    }
  }, [viewMode]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = applicantsData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 3) return [...Array(totalPages).keys()].map((n) => n + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md -mb-5 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Recently Join</h2>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-4 flex-wrap">
        {["All", "Yoga Trainer", "Yoga Doctor", "Physiotherapist", "AI Consultant"].map(
          (filter, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full border text-lg font-semibold ${
                filter === "All"
                  ? "bg-green-500 text-white"
                  : darkMode
                  ? "bg-[#2B3153] text-gray-300 border-gray-600"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Grid/Table Toggle + Search Bar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition ${
              viewMode === "grid"
                ? darkMode
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-800"
                : darkMode
                ? "bg-[#2B3153] text-gray-300 border border-gray-600"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
          >
            <FaThLarge />
            Grid Card
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-2 px-6 py-1 rounded-md text-md font-bold transition ${
              viewMode === "table"
                ? darkMode
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-800"
                : darkMode
                ? "bg-[#2B3153] text-gray-300 border border-gray-600"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
          >
            <FaList />
            Table
          </button>
        </div>

        <div className="relative flex-1 ml-80">
          <FaSearch
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`}
          />
          <input
            type="text"
            placeholder="Instructor / Class / Tag"
            className={`w-100 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm ${
              darkMode
                ? "bg-[#2B3153] text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300 placeholder-gray-500"
            }`}
          />
        </div>
      </div>

      {viewMode === "table" ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className={`text-left text-md font-semibold ${
                    darkMode ? "bg-[#2B3153] text-gray-300" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Specialization</th>
                  <th className="p-3">Date of Joining</th>
                  <th className="p-3">View Details</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((applicant, index) => (
                  <tr
                    key={applicant.id}
                    className={`${
                      darkMode
                        ? index % 2 === 0
                          ? "bg-[#2B3153]"
                          : "bg-[#3A4065]"
                        : index % 2 === 0
                        ? "bg-blue-50"
                        : "bg-purple-50"
                    }`}
                  >
                    <td className="p-3 flex items-center gap-2">
                      <img
                        src={applicant.img}
                        alt="profile"
                        className="w-8 h-8 rounded-full"
                      />
                      {applicant.name}
                    </td>
                    <td className="p-3">{applicant.email}</td>
                    <td className="p-3">{applicant.specialization}</td>
                    <td className="p-3">{applicant.doj}</td>
                    <td className="p-3">
                      <button
                        className={`px-4 py-1 rounded-md text-sm ${
                          darkMode
                            ? "bg-[#4C5270] text-white"
                            : index % 2 === 0
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-4">
            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1 border rounded-full disabled:opacity-50"
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              {getPageNumbers().map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded-full ${
                    currentPage === page
                      ? darkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : "border"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 border rounded-full disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[390px] overflow-y-auto pr-2"
        >
          {applicantsData.map((applicant) => (
            <div
              key={applicant.id}
              className={`p-5 rounded-xl shadow hover:shadow-lg transition flex items-center gap-4 animate-on-scroll ${
                darkMode
                  ? "bg-[#2B3153]"
                  : "bg-gradient-to-br from-purple-50 to-blue-50"
              }`}
            >
              <img
                src={applicant.img}
                alt={applicant.name}
                className="w-16 h-16 rounded-full border-2 border-white shadow"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{applicant.name}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {applicant.email}
                </p>
                <p className={`text-sm font-medium ${darkMode ? "text-gray-100" : "text-gray-700"}`}>
                  {applicant.specialization}
                </p>
                <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {applicant.doj}
                </p>
                <button
                  className={`mt-2 px-3 py-1 text-sm rounded-md hover:bg-green-200 ${
                    darkMode
                      ? "bg-green-700 text-white hover:bg-green-600"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
