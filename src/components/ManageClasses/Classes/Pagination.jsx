import React from "react";

const Pagination = ({ activePage, setActivePage, pagination }) => {
  return (
    <div className="flex justify-end mt-6 gap-3">
      <button
        className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
        onClick={() => setActivePage((p) => Math.max(p - 1, 1))}
      >
        &lt;
      </button>
      {pagination.map((page) => (
        <button
          key={page}
          className={`w-7 h-7 border rounded-full flex items-center justify-center font-semibold ${
            activePage === page
              ? "bg-black text-white "
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setActivePage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
        onClick={() =>
          setActivePage((p) => Math.min(p + 1, pagination.length))
        }
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
