import React from "react";

const TableRow = ({ row, idx }) => {
  return (
    <tr className={`${idx % 2 === 0 ? "bg-blue-50" : "bg-purple-50"}`}>
      <td className="py-2 px-6 flex items-center gap-3">
        <img
          src={row.instructorImage}
          alt={row.instructorName}
          className="w-8 h-8 rounded-full"
        />
        {row.instructorName}
      </td>
      <td className="py-2 px-6">{row.classTitle}</td>
      <td className="py-2 px-6">{row.date}</td>
      <td className="py-2 px-6">{row.attendance}</td>
      <td className="py-2 px-6">{row.feedback}</td>
      <td className="py-2 px-6 text-center">
        <button className="text-purple-600 border border-purple-600 rounded-md px-3 py-1 text-xs font-semibold hover:bg-purple-50 transition">
          View
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
