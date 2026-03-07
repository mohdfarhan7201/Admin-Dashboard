import React, { useState } from "react";

export default function FeedbackTable() {
  const data = [
    {
      id: 1,
      name: "Instructor A",
      role: "Yoga Instructor",
      attendance: 60,
      feedback: 4.0,
      performance: "Very Good",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Instructor A",
      role: "Yoga Doctor",
      attendance: 50,
      feedback: 3.0,
      performance: "Need Improvement",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Instructor A",
      role: "Yoga Instructor",
      attendance: 89,
      feedback: 3.9,
      performance: "Average",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "Instructor A",
      role: "Yoga Instructor",
      attendance: 69,
      feedback: 4.9,
      performance: "Excellent",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      id: 5,
      name: "Instructor A",
      role: "Yoga Doctor",
      attendance: 67,
      feedback: 3.3,
      performance: "Below Average",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 6,
      name: "Instructor B",
      role: "Yoga Instructor",
      attendance: 72,
      feedback: 4.2,
      performance: "Very Good",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 7,
      name: "Instructor C",
      role: "Yoga Doctor",
      attendance: 48,
      feedback: 2.8,
      performance: "Need Improvement",
      img: "https://randomuser.me/api/portraits/women/19.jpg",
    },
  ];

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-700 font-bold text-2xl mb-4">
        Recent Instructor Feedback Performance
      </h3>

      <table className="w-full text-sm text-left border-separate border-spacing-y-2">
        <thead className="bg-gray-100 text-gray-700 text-mb font-bold">
          <tr>
            <th className="p-3">Instructor Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Attendance</th>
            <th className="p-3">Feedback</th>
            <th className="p-3">Performance Level</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, i) => (
            <tr
              key={row.id}
              className={`rounded-lg ${
                i % 2 === 0 ? "bg-purple-100" : "bg-blue-50"
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
              <td className="p-3">{row.role}</td>
              <td className="p-3">{row.attendance}</td>
              <td className="p-3">{row.feedback}</td>
              <td className="p-3">{row.performance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2 ml-200">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 border rounded-full disabled:opacity-50"
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-full ${
              currentPage === i + 1 ? "bg-black text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 border rounded-full disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
