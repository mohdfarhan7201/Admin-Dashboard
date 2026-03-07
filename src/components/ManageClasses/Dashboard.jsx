import React, { useState } from "react";
import Header from "./Header";
import StatsCards from "./StatsCards";
import LineChart from "./LineChart";
import Filters from "./Filters";
import ViewToggle from "./ViewToggle";
import TrainerGrid from "./TrainerGrid";
import TrainerTable from "./TrainerTable";
import Pagination from "./Pagination";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

export default function Dashboard() {
  const { darkMode } = useTheme(); // ✅ Access darkMode from context
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const trainers = [
    { name: "Name", role: "Yoga Trainer", photos: 12, videos: 19, feedback: "4.5", image: "https://via.placeholder.com/100" },
    { name: "Dr. Shaikh sahab", role: "Yoga Doctor", photos: 15, videos: 12, feedback: "4.7", image: "https://via.placeholder.com/100" },
    { name: "Aditi Srivastava", role: "Physiotherapist", photos: 10, videos: 9, feedback: "4.6", image: "https://via.placeholder.com/100" },
    { name: "Aditi Srivastava", role: "Yoga Trainer", photos: 12, videos: 19, feedback: "4.5", image: "https://via.placeholder.com/100" },
    { name: "Dr. Aditi Srivastava", role: "Yoga Doctor", photos: 15, videos: 12, feedback: "4.7", image: "https://via.placeholder.com/100" },
    { name: "Aditi Srivastava", role: "Physiotherapist", photos: 10, videos: 9, feedback: "4.6", image: "https://via.placeholder.com/100" },
    { name: "Aditi Srivastava", role: "Yoga Trainer", photos: 12, videos: 19, feedback: "4.5", image: "https://via.placeholder.com/100" },
    { name: "Dr. Aditi Srivastava", role: "Yoga Doctor", photos: 15, videos: 12, feedback: "4.7", image: "https://via.placeholder.com/100" },
    { name: "Aditi Srivastava", role: "Physiotherapist", photos: 10, videos: 9, feedback: "4.6", image: "https://via.placeholder.com/100" },
    { name: "Aditi Srivastava", role: "Yoga Trainer", photos: 12, videos: 19, feedback: "4.5", image: "https://via.placeholder.com/100" },
    { name: "Dr. Aditi Srivastava", role: "Yoga Doctor", photos: 15, videos: 12, feedback: "4.7", image: "https://via.placeholder.com/100" },
    { name: "Aditi Srivastava", role: "Physiotherapist", photos: 10, videos: 9, feedback: "4.6", image: "https://via.placeholder.com/100" },
  ];

  const filtered = filter === "All" ? trainers : trainers.filter(t => t.role === filter);

  // Pagination logic
  const perPage = 5;
  const totalPages = Math.ceil(filtered.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentData = filtered.slice(startIndex, startIndex + perPage);

  return (
    <div
      className={`p-6 min-h-screen transition-all duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-gray-50 text-black"
      }`}
    >
      <Header />
      <StatsCards />
      <LineChart />
      <Filters
        onFilter={(f) => {
          setFilter(f);
          setCurrentPage(1);
        }}
      />
      <ViewToggle
        view={view}
        setView={(v) => {
          setView(v);
          setCurrentPage(1);
        }}
      />

      {view === "grid" ? (
        // Scrollable Grid
        <div className="h-[430px] overflow-y-auto">
          <TrainerGrid trainers={filtered} />
        </div>
      ) : (
        <>
          <TrainerTable trainers={currentData} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
