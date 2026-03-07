// ManagerListStatic.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Sidebar from "../Sidebar";
import { useTheme } from "../../context/ThemeContext"; // 🔹 dark mode hook
import { Sliders } from "lucide-react";

const managers = [
  { id: 1, name: "Name", location: "Mumbai", salary: "₹60,000", crisisHandling: true, hiring: true, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Name", location: "Delhi", salary: "₹40,000", crisisHandling: false, hiring: false, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Name", location: "Pune", salary: "₹50,000", crisisHandling: true, hiring: true, avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 4, name: "Name", location: "Noida", salary: "₹60,000", crisisHandling: false, hiring: false, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Name", location: "Banglore", salary: "₹60,000", crisisHandling: true, hiring: true, avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: 6, name: "Name", location: "Chennai", salary: "₹55,000", crisisHandling: true, hiring: false, avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 7, name: "Name", location: "Hyderabad", salary: "₹48,000", crisisHandling: false, hiring: true, avatar: "https://randomuser.me/api/portraits/women/55.jpg" },
  { id: 8, name: "Name", location: "Kolkata", salary: "₹62,000", crisisHandling: true, hiring: true, avatar: "https://randomuser.me/api/portraits/men/77.jpg" },
];

export default function ManagerListStatic() {
  const navigate = useNavigate();
  const { darkMode } = useTheme(); // 🔹 get darkMode
  const [currentPage, setCurrentPage] = useState(1);
  const managersPerPage = 5;

  const totalPages = Math.ceil(managers.length / managersPerPage);
  const indexOfLast = currentPage * managersPerPage;
  const indexOfFirst = indexOfLast - managersPerPage;
  const currentManagers = managers.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  return (
    <>
    {/* <Sidebar/> */}
    <div className={`p-8 rounded-lg shadow transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Existing Manager List</h2>
        <button
          onClick={() => navigate("/add-manager/new")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Add New Manager
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className={`text-center ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
            <th className="p-3">Name</th>
            <th className="p-3">Job Location</th>
            <th className="p-3">Salary</th>
            <th className="p-3">Crisis Handling</th>
            <th className="p-3">Hiring Permission</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentManagers.map((m, index) => (
            <tr key={m.id} className={`${index % 2 === 1 ? (darkMode ? "bg-gray-700" : "bg-purple-100") : (darkMode ? "bg-gray-600" : "bg-green-100")}`}>
              <td className="flex items-center gap-3 p-3">
                <img src={m.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                {m.name}
              </td>
              <td className="p-3 text-center">{m.location}</td>
              <td className="p-3 text-center">{m.salary}</td>
              <td className="p-3 text-center">
                {m.crisisHandling ? (
                  <span className="flex items-center justify-center text-green-500 gap-1">
                    <FaCheckCircle /> <span className={darkMode ? "text-white" : "text-black"}>Yes</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center text-red-500 gap-1">
                    <FaTimesCircle /> <span className={darkMode ? "text-white" : "text-black"}>No</span>
                  </span>
                )}
              </td>
              <td className="p-3 text-center">
                {m.hiring ? (
                  <span className="flex items-center justify-center text-green-500 gap-1">
                    <FaCheckCircle /> <span className={darkMode ? "text-white" : "text-black"}>Yes</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center text-red-500 gap-1">
                    <FaTimesCircle /> <span className={darkMode ? "text-white" : "text-black"}>No</span>
                  </span>
                )}
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => navigate(`/add-manager/view/${m.id}`)}
                  className={`px-4 py-1 rounded-lg transition-colors duration-300 ${
                    index % 2 === 1
                      ? darkMode ? "bg-purple-600 hover:bg-purple-500" : "bg-[#C9B3ED] hover:bg-blue-700"
                      : darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-[#AEC7ED] hover:bg-[#8db9fa]"
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
      <div className="flex justify-end items-center mt-6 gap-3">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex justify-center items-center border rounded-full ${darkMode ? "border-gray-400" : ""}`}
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`w-8 h-8 flex justify-center items-center border rounded-full transition-colors duration-300 ${
              currentPage === i + 1
                ? "bg-black text-white"
                : darkMode
                ? "bg-gray-700 text-white"
                : ""
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex justify-center items-center border rounded-full ${darkMode ? "border-gray-400" : ""}`}
        >
          {">"}
        </button>
      </div>
    </div>
              </>
  );
}
