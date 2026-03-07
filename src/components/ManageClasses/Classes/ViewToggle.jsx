import React from "react";
import { LayoutGrid, Table } from "lucide-react";

const ViewToggle = ({ view, setView }) => {
  return (
    <div className="flex justify-end mb-6 gap-2">
      <button
        className={`flex items-center gap-1 px-3 py-1 rounded-md border ${
          view === "grid"
            ? "bg-purple-600 text-white border-purple-600"
            : "border-gray-300 text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => setView("grid")}
      >
        <LayoutGrid size={16} /> Grid
      </button>
      <button
        className={`flex items-center gap-1 px-3 py-1 rounded-md border ${
          view === "table"
            ? "bg-purple-600 text-white border-purple-600"
            : "border-gray-300 text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => setView("table")}
      >
        <Table size={16} /> Table
      </button>
    </div>
  );
};

export default ViewToggle;
