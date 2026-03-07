import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-green-100 p-4 rounded-lg mb-6">
      <h1 className="text-xl font-semibold">Class Analytics</h1>
      <div className="flex items-center gap-2 border px-3 py-1 rounded bg-white cursor-pointer">
        <span>This Month</span>
        <FiChevronDown />
      </div>
    </div>
  );
}
