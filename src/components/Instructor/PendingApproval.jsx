import React, { useState, useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaThLarge,
  FaList,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // import your theme hook

const allApplications = [
  { id: 1, name: "John Doe", role: "Yoga Instructor", verified: true },
  { id: 2, name: "Jane Smith", role: "Yoga Doctor", verified: false },
  { id: 3, name: "Amit Sharma", role: "Yoga Instructor", verified: true },
  { id: 4, name: "Priya Verma", role: "Yoga Instructor", verified: false },
  { id: 5, name: "Ravi Kumar", role: "Yoga Doctor", verified: true },
  { id: 6, name: "Neha Singh", role: "Physiotherapist", verified: true },
  { id: 7, name: "Arjun Mehta", role: "AI Consultant", verified: false },
  { id: 8, name: "John Doe", role: "Yoga Instructor", verified: true },
  { id: 9, name: "Jane Smith", role: "Yoga Doctor", verified: false },
  { id: 10, name: "Amit Sharma", role: "Yoga Instructor", verified: true },
  { id: 11, name: "Priya Verma", role: "Yoga Instructor", verified: false },
  { id: 12, name: "Ravi Kumar", role: "Yoga Doctor", verified: true },
  { id: 13, name: "Neha Singh", role: "Physiotherapist", verified: true },
  { id: 14, name: "Arjun Mehta", role: "AI Consultant", verified: false },
];

export default function RecentApplication() {
  const { darkMode } = useTheme(); // get darkMode
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const itemsPerPage = 5;

  const cardRefs = useRef([]);

  useEffect(() => {
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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const filteredData = allApplications.filter((item) => {
    const matchFilter = filter === "All" || item.role === filter;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData =
    viewMode === "table"
      ? filteredData.slice(indexOfFirst, indexOfLast)
      : filteredData;

  const getPageNumbers = () => {
    if (totalPages <= 3) return [...Array(totalPages).keys()].map((i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div
      className={`p-6 rounded-xl shadow-md -mb-5 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Pending Approval</h2>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-4 flex-wrap">
        {[
          "All",
          "Yoga Instructor",
          "Yoga Doctor",
          "Physiotherapist",
          "AI Consultant",
        ].map((role) => (
          <button
            key={role}
            onClick={() => {
              setFilter(role);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border text-lg font-semibold ${
              filter === role
                ? "bg-green-500 text-white"
                : darkMode
                ? "bg-[#2B3153] text-gray-300 border-gray-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Grid/Table Toggle + Search */}
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
            <FaThLarge /> Grid Card
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
            <FaList /> Table
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className={`w-100 pl-10 pr-3 py-2 border rounded-md text-sm ${
              darkMode
                ? "bg-[#2B3153] text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300 placeholder-gray-500"
            }`}
          />
        </div>
      </div>

      {/* Table View */}
      {viewMode === "table" && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className={`text-left text-md ${
                    darkMode ? "bg-[#2B3153] text-gray-300" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <th className="p-3">Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Doc Verified</th>
                  <th className="p-3">Action Button</th>
                  <th className="p-3">View Details</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <tr
                      key={item.id}
                      className={
                        darkMode
                          ? isEven
                            ? "bg-[#2B3153]"
                            : "bg-[#3A4065]"
                          : isEven
                          ? "bg-blue-50"
                          : "bg-purple-50"
                      }
                    >
                      <td className="p-3 flex items-center gap-2">
                        <img
                          src={`https://i.pravatar.cc/40?img=${item.id}`}
                          alt="profile"
                          className="w-8 h-8 rounded-full"
                        />
                        {item.name}
                      </td>
                      <td className="p-3">{item.role}</td>
                      <td className="p-3">
                        {item.verified ? (
                          <span className="flex items-center gap-1 text-green-600 text-sm">
                            <FaCheckCircle /> Yes
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-600 text-sm">
                            <FaTimesCircle /> No
                          </span>
                        )}
                      </td>
                      <td className="p-3 flex gap-2">
                        <button
                          className={`px-3 py-1 rounded-md text-sm ${
                            darkMode
                              ? "bg-green-700 text-white"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          Approved
                        </button>
                        <button
                          className={`px-3 py-1 rounded-md text-sm ${
                            darkMode
                              ? "bg-red-700 text-white"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          Rejected
                        </button>
                      </td>
                      <td className="p-3">
                        <button
                          className={`px-4 py-1 rounded-md text-sm ${
                            isEven
                              ? darkMode
                                ? "bg-blue-600 text-white"
                                : "bg-blue-200 text-blue-800"
                              : darkMode
                              ? "bg-purple-600 text-white"
                              : "bg-purple-200 text-purple-800"
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
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center mt-4 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-full text-sm"
            >
              &lt;
            </button>
            {getPageNumbers().map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentPage === num
                    ? darkMode
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : "bg-white border text-gray-700"
                }`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-full text-sm"
            >
              &gt;
            </button>
          </div>
        </>
      )}

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2">
          {currentData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`p-4 rounded-lg shadow-md flex flex-col gap-3 ${
                darkMode ? "bg-[#2B3153]" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/80?img=${item.id}`}
                  alt="profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {item.role}
                  </p>
                  <p className="text-sm">
                    {item.verified ? (
                      <span className="flex items-center gap-1 text-green-600 text-sm">
                        <FaCheckCircle /> Verified
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-600 text-sm">
                        <FaTimesCircle /> Not Verified
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  className={`px-3 py-1 rounded-md text-xs ${
                    darkMode
                      ? "bg-green-700 text-white"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  Approved
                </button>
                <button
                  className={`px-3 py-1 rounded-md text-xs ${
                    darkMode ? "bg-red-700 text-white" : "bg-red-100 text-red-700"
                  }`}
                >
                  Rejected
                </button>
              </div>
              <button
                className={`mt-2 px-3 py-1 rounded-md text-xs ${
                  darkMode ? "bg-blue-600 text-white" : "bg-blue-200 text-blue-700"
                }`}
              >
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
