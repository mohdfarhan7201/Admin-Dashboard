import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";

export default function Header() {

  return (
    <div className="bg-[#E1F7F5] rounded-4xl p-5 mb-6 shadow flex justify-between items-center mt-4 ml-4 mr-4">
      
      {/* Greeting + Welcome */}
      <div>
        
        <p className="text-3xl text-gray-600 font-bold ml-5">Report</p>
      </div>

      {/* Search Bar */}
      <div className="relative w-100 bg-white -mr-50">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
      </div>

      {/* Notification Icon */}
      <FaBell className="text-gray-600 text-xl cursor-pointer ml-6" />

      {/* User Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="User avatar"
        className="w-10 h-10 rounded-full -ml-50"
      />
    </div>
  );
}
