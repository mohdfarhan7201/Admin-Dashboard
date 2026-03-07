import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ClassCardsGrid from "./ClassCardsGrid";
import ClassesTable from "./ClassesTable";
import Pagination from "./Pagination";
import ViewToggle from "./ViewToggle";
import { useNavigate } from "react-router-dom";

const CoveredClasses = () => {
  const [activePage, setActivePage] = useState(1);
  const [view, setView] = useState("grid"); // "grid" or "table"
  const rowsPerPage = 5; // <-- FIXED: 5 rows per table page

  const cards = [
    {
      title: "Morning Yoga For Beginners",
      instructor: "Dr. Meera Singh",
      role: "Yoga Doctor",
      date: "20 Aug 2025, 7:00 AM",
      rating: 4.5,
      status: "Completed",
    },
    {
      title: "Morning Yoga For Beginners",
      instructor: "Dr. Meera Singh",
      role: "Yoga Doctor",
      date: "20 Aug 2025, 7:00 AM",
      rating: 4.5,
      status: "Completed",
    },
    {
      title: "Morning Yoga For Beginners",
      instructor: "Dr. Meera Singh",
      role: "Yoga Doctor",
      date: "20 Aug 2025, 7:00 AM",
      rating: 4.5,
      status: "Completed",
    },
  ];

  const tableRows = [
    {
      id: 1,
      instructorName: "Instructor A",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      classTitle: "Morning Yoga For Beginners",
      date: "20 Aug 2025",
      attendance: 56,
      feedback: 4.0,
    },
    {
      id: 2,
      instructorName: "Instructor A",
      instructorImage: "https://randomuser.me/api/portraits/men/43.jpg",
      classTitle: "Morning Yoga For Beginners",
      date: "20 Aug 2025",
      attendance: 77,
      feedback: 3.0,
    },
    {
      id: 3,
      instructorName: "Instructor A",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      classTitle: "Morning Yoga For Beginners",
      date: "20 Aug 2025",
      attendance: 24,
      feedback: 3.9,
    },
    {
      id: 4,
      instructorName: "Instructor A",
      instructorImage: "https://randomuser.me/api/portraits/women/52.jpg",
      classTitle: "Morning Yoga For Beginners",
      date: "20 Aug 2025",
      attendance: 98,
      feedback: 4.9,
    },
    {
      id: 5,
      instructorName: "Instructor A",
      instructorImage: "https://randomuser.me/api/portraits/men/55.jpg",
      classTitle: "Morning Yoga For Beginners",
      date: "20 Aug 2025",
      attendance: 78,
      feedback: 5.3,
    },
    {
      id: 6,
      instructorName: "Instructor A",
      instructorImage: "https://randomuser.me/api/portraits/women/61.jpg",
      classTitle: "Morning Yoga For Beginners",
      date: "20 Aug 2025",
      attendance: 61,
      feedback: 4.2,
    },
    {
      id: 7,
      instructorName: "Instructor A",
      instructorImage: "https://randomuser.me/api/portraits/men/71.jpg",
      classTitle: "Morning Yoga For Beginners",
      date: "20 Aug 2025",
      attendance: 84,
      feedback: 4.7,
    },
  ];

  // total pages
  const totalPages = Math.max(1, Math.ceil(tableRows.length / rowsPerPage));

  // clamp activePage if > totalPages
  useEffect(() => {
    if (activePage > totalPages) setActivePage(totalPages);
  }, [totalPages, activePage]);

  // slice rows for current page
  const start = (activePage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedRows = tableRows.slice(start, end);

  // sliding window pagination logic
  const getPaginationNumbers = () => {
    if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (activePage <= 2) return [1, 2, 3];
    if (activePage >= totalPages - 1)
      return [totalPages - 2, totalPages - 1, totalPages];

    return [activePage - 1, activePage, activePage + 1];
  };

  const pagination = getPaginationNumbers();

  const navigate = useNavigate();

  return (
    <div className="p-6 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4 flex items-center space-x-2"
      >
        ← Back to Analytics
      </button>
      <h2 className="font-bold text-xl mb-6">Covered Classes</h2>

      <Filters />

      <ViewToggle view={view} setView={setView} />

      {view === "grid" ? (
        <div className="max-h-[500px] overflow-y-auto pr-2">
          <ClassCardsGrid cards={cards} />
        </div>
      ) : (
        <>
          <ClassesTable rows={paginatedRows} />
          <div className="mt-4">
            <Pagination
              activePage={activePage}
              setActivePage={setActivePage}
              pagination={pagination}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CoveredClasses;
