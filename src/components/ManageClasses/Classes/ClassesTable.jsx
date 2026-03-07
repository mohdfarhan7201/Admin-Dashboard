import React from "react";
import TableRow from "./TableRow";

const ClassesTable = ({ rows }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm">
      <thead className="bg-purple-100">
        <tr>
          <th className="py-3 px-6 text-left">Instructor Name</th>
          <th className="py-3 px-6 text-left">Class Title</th>
          <th className="py-3 px-6 text-left">Date</th>
          <th className="py-3 px-6 text-left">Attendance</th>
          <th className="py-3 px-6 text-left">Feedback</th>
          <th className="py-3 px-6 text-center">View Details</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <TableRow key={row.id} row={row} idx={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default ClassesTable;
