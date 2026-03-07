import React from "react";

const Filters = () => {
  return (
    <div className="flex gap-4 mb-6">
      {["This Month", "This Year", "Custom"].map((label) => (
        <select
          key={label}
          className="p-2 border border-gray-300 rounded-md outline-none cursor-pointer"
        >
          <option>{label}</option>
        </select>
      ))}
      <input
        type="text"
        placeholder="Instructor/ Class/ Tag"
        className="border border-gray-300 rounded-md p-2 outline-none flex-grow"
      />
    </div>
  );
};

export default Filters;
