import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext"; // ✅ import theme
import FeedbackModal from "./FeedbackModal";

export default function FeedbackGrowthPage() {
  const navigate = useNavigate();
  const { darkMode } = useTheme(); // ✅ use theme context

  // Dummy Data
  const data = [
    { id: 1, name: "Customer A", feedback: "Great service ", date: "02/07/2025", rating: 5, img: "https://randomuser.me/api/portraits/men/31.jpg" },
    { id: 2, name: "Customer B", feedback: "Nice session", date: "01/07/2025", rating: 4, img: "https://randomuser.me/api/portraits/women/32.jpg" },
    { id: 3, name: "Customer C", feedback: "Average class", date: "30/06/2025", rating: 3, img: "https://randomuser.me/api/portraits/men/33.jpg" },
    { id: 4, name: "Customer D", feedback: "Loved it", date: "29/06/2025", rating: 5, img: "https://randomuser.me/api/portraits/women/34.jpg" },
    { id: 5, name: "Customer E", feedback: "Need improvement", date: "28/06/2025", rating: 2, img: "https://randomuser.me/api/portraits/men/35.jpg" },
    { id: 6, name: "Customer F", feedback: "Excellent trainer", date: "27/06/2025", rating: 5, img: "https://randomuser.me/api/portraits/women/36.jpg" },
    { id: 7, name: "Customer G", feedback: "Good but late start", date: "26/06/2025", rating: 4, img: "https://randomuser.me/api/portraits/men/37.jpg" },
    { id: 8, name: "Customer H", feedback: "Bad experience", date: "25/06/2025", rating: 1, img: "https://randomuser.me/api/portraits/women/38.jpg" },
    { id: 9, name: "Customer I", feedback: "Class was fun", date: "24/06/2025", rating: 5, img: "https://randomuser.me/api/portraits/men/39.jpg" },
    { id: 10, name: "Customer J", feedback: "Nice but crowded", date: "23/06/2025", rating: 3, img: "https://randomuser.me/api/portraits/women/40.jpg" },
    { id: 11, name: "Customer K", feedback: "Good class", date: "22/06/2025", rating: 4, img: "https://randomuser.me/api/portraits/men/41.jpg" },
    { id: 12, name: "Customer L", feedback: "Very good", date: "21/06/2025", rating: 5, img: "https://randomuser.me/api/portraits/women/42.jpg" },
    { id: 13, name: "Customer M", feedback: "Instructor was rude", date: "20/06/2025", rating: 2, img: "https://randomuser.me/api/portraits/men/43.jpg" },
    { id: 14, name: "Customer N", feedback: "Loved yoga session", date: "19/06/2025", rating: 5, img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 15, name: "Customer O", feedback: "Average experience", date: "18/06/2025", rating: 3, img: "https://randomuser.me/api/portraits/men/45.jpg" },
  ];

  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Date");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const rowsPerPage = 5;

  // Filter + Sort
  const filteredData = data
    .filter((row) => row.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (filterBy === "Date") return new Date(b.date) - new Date(a.date);
      if (filterBy === "Rating") return b.rating - a.rating;
      if (filterBy === "Customer") return a.name.localeCompare(b.name);
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className={`mb-4 flex items-center space-x-2 font-medium transition ${
          darkMode
            ? "text-blue-400 hover:text-blue-300"
            : "text-blue-600 hover:text-blue-500"
        }`}
      >
        ← Back to Analytics
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">Growth Feedback Report</h2>

      {/* Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <select
          className={`border rounded-lg px-3 py-2 ${
            darkMode
              ? "bg-gray-800 text-gray-100 border-gray-700"
              : "bg-white text-gray-800 border-gray-300"
          }`}
          value={filterBy}
          onChange={(e) => {
            setFilterBy(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option>Date</option>
          <option>Rating</option>
          <option>Customer</option>
        </select>

        <input
          type="text"
          placeholder="Instructor / Class / Tag / Date / Words"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className={`border rounded-lg px-3 py-2 flex-1 ${
            darkMode
              ? "bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400"
              : "bg-white text-gray-800 border-gray-300 placeholder-gray-400"
          }`}
        />
      </div>

      {/* Table */}
      <table
        className={`w-full text-sm text-left border-separate border-spacing-y-2 ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        <thead
          className={`text-lg ${
            darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
          }`}
        >
          <tr>
            <th className="p-3">Customer Name</th>
            <th className="p-3">Feedback</th>
            <th className="p-3">Date</th>
            <th className="p-3">Rating</th>
            <th className="p-3">View Details</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, i) => (
            <tr
              key={row.id}
              className={`rounded-lg transition ${
                darkMode
                  ? i % 2 === 0
                    ? "bg-gray-800"
                    : "bg-gray-700"
                  : i % 2 === 0
                  ? "bg-purple-100"
                  : "bg-blue-50"
              }`}
            >
              <td className="p-3 flex items-center space-x-3">
                <img
                  src={row.img}
                  alt={row.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{row.name}</span>
              </td>
              <td className="p-3 space-x-3 ">{row.feedback}</td>
              <td className="p-3">{row.date}</td>
              <td className="p-3 flex">
                {Array.from({ length: 5 }, (_, idx) => (
                  <FaStar
                    key={idx}
                    className={`${
                      idx < row.rating
                        ? "text-green-500"
                        : darkMode
                        ? "text-gray-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </td>
              <td className="p-3">
                <button
                  onClick={() => setSelectedFeedback(row)}
                  className={`px-4 py-1 rounded-lg font-medium ${
                    darkMode
                      ? "bg-blue-800 text-blue-200 hover:bg-blue-700"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-full border ${
            currentPage === 1
              ? darkMode
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
              : darkMode
              ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 rounded-full border ${
              currentPage === idx + 1
                ? darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-black text-white"
                : darkMode
                ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-full border ${
            currentPage === totalPages
              ? darkMode
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
              : darkMode
              ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {">"}
        </button>
      </div>

      {/* Modal */}
      {selectedFeedback && (
        <FeedbackModal
          feedback={selectedFeedback}
          onClose={() => setSelectedFeedback(null)}
        />
      )}
    </div>
  );
}
