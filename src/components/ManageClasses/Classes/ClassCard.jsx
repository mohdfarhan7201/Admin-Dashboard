import React from "react";

const ClassCard = ({ title, instructor, role, date, rating, status }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 relative">
      <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
        {status}
      </div>
      <div className="h-24 bg-gray-100 rounded mb-4"></div>
      <h3 className="font-bold mb-1">{title}</h3>
      <div className="flex items-center mb-1">
        <div className="w-7 h-7 rounded-full bg-gray-300 mr-3"></div>
        <div>
          <p className="text-sm font-medium">{instructor}</p>
          <p className="text-xs text-green-600">{role}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-2">{date}</p>
      <div className="flex items-center justify-between">
        <div className="text-green-600 font-semibold text-sm flex items-center">
          {rating} <span className="ml-1">★</span>
        </div>
        <button className="text-purple-600 text-xs font-semibold border border-purple-600 rounded-md px-3 py-1 hover:bg-purple-50 transition">
          View Report
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
