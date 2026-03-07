// import React, { useMemo, useState, useEffect } from 'react';
// import FilterTabs from './FilterTabs';
// import ViewToggle from './ViewToggle';
// import SearchBar from './SearchBar';
// import InstructorGrid from './InstructorGrid';
// import InstructorTable from './InstructorTable';

// export default function ExistingInstructorMain() {
//   // Dummy data (abhi yahin rakho)
//   const DUMMY_INSTRUCTORS = Array.from({ length: 18 }).map((_, i) => ({
//     id: i + 1,
//     name: 'Aditi Srivastava',
//     role: ['Yoga Trainer', 'Yoga Doctor', 'Physiotherapist', 'AI Consultant'][i % 4],
//     instructorId: `INST-1234${i}`,
//     gender: i % 2 === 0 ? 'Female' : 'Male',
//     experience: `${3 + (i % 7)} Years`,
//     joined: 'April 10, 2023',
//     avatar: `https://i.pravatar.cc/150?img=${10 + (i % 70)}`,
//     active: i % 3 !== 0, // 🔹 Status: some active, some inactive
//   }));

//   const [filter, setFilter] = useState('All');
//   const [view, setView] = useState('grid');
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const pageSize = 6;

//   const options = ['All', 'Yoga Trainer', 'Yoga Doctor', 'Physiotherapist', 'AI Consultant'];

//   // Filter + search logic
//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     let arr = DUMMY_INSTRUCTORS;
//     if (filter !== 'All') arr = arr.filter((a) => a.role === filter);
//     if (q)
//       arr = arr.filter((a) =>
//         [a.name, a.role, a.instructorId].join(' ').toLowerCase().includes(q)
//       );
//     return arr;
//   }, [filter, search]);

//   // reset page on filter/search change
//   useEffect(() => setPage(1), [filter, search]);

//   return (
//     <div>
//       {/* Top bar */}
//       <div className="md:flex-row md:items-center md:justify-between p-6 bg-gray-50 min-h-screen">
//         <FilterTabs options={options} active={filter} onChange={setFilter} />
//         <div className="flex items-center gap-4">
//           <ViewToggle view={view} onChange={setView} />
//           <div className="w-72">
//             <SearchBar
//               value={search}
//               onChange={setSearch}
//               placeholder="Instructor/ Class/ Tag"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       {view === 'grid' ? (
//         <InstructorGrid data={filtered} />
//       ) : (
//         <InstructorTable data={filtered} page={page} setPage={setPage} pageSize={pageSize} />
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import FilterTabs from "./FilterTabs";
import ViewToggle from "./ViewToggle";
import SearchBar from "./SearchBar";
import InstructorTable from "./InstructorTable";
import InstructorGrid from "./InstructorGrid";
import Pagination from "./Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorDetails from "./InstructorDetails";

export default function App() {
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const DUMMY_INSTRUCTORS = [
    { id: "INST-1", name: "John Doe", specialization: "Yoga Instructor", exp: "5 years", status: "Active", img: "https://i.pravatar.cc/40?img=1" },
    { id: "INST-2", name: "Alice Smith", specialization: "Yoga Doctor", exp: "4 years", status: "Active", img: "https://i.pravatar.cc/40?img=2" },
    { id: "INST-3", name: "Robert Lee", specialization: "Yoga Instructor", exp: "2 years", status: "Active", img: "https://i.pravatar.cc/40?img=3" },
    { id: "INST-4", name: "Sophia Brown", specialization: "Yoga Instructor", exp: "7 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=4" },
    { id: "INST-5", name: "David Wilson", specialization: "Yoga Doctor", exp: "6 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=5" },
    { id: "INST-6", name: "Emma Watson", specialization: "Yoga Trainer", exp: "3 years", status: "Active", img: "https://i.pravatar.cc/40?img=6" },
    { id: "INST-7", name: "Chris Evans", specialization: "AI Consultant", exp: "8 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=7" },
    { id: "INST-8", name: "John Doe", specialization: "Yoga Instructor", exp: "5 years", status: "Active", img: "https://i.pravatar.cc/40?img=1" },
    { id: "INST-9", name: "Alice Smith", specialization: "Yoga Doctor", exp: "4 years", status: "Active", img: "https://i.pravatar.cc/40?img=2" },
    { id: "INST-10", name: "Robert Lee", specialization: "Yoga Instructor", exp: "2 years", status: "Active", img: "https://i.pravatar.cc/40?img=3" },
    { id: "INST-11", name: "Sophia Brown", specialization: "Yoga Instructor", exp: "7 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=4" },
    { id: "INST-12", name: "David Wilson", specialization: "Yoga Doctor", exp: "6 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=5" },
    { id: "INST-13", name: "Emma Watson", specialization: "Yoga Trainer", exp: "3 years", status: "Active", img: "https://i.pravatar.cc/40?img=6" },
    { id: "INST-14", name: "Chris Evans", specialization: "AI Consultant", exp: "8 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=7" },
    { id: "INST-15", name: "John Doe", specialization: "Yoga Instructor", exp: "5 years", status: "Active", img: "https://i.pravatar.cc/40?img=1" },
    { id: "INST-16", name: "Alice Smith", specialization: "Yoga Doctor", exp: "4 years", status: "Active", img: "https://i.pravatar.cc/40?img=2" },
    { id: "INST-17", name: "Robert Lee", specialization: "Yoga Instructor", exp: "2 years", status: "Active", img: "https://i.pravatar.cc/40?img=3" },
    { id: "INST-18", name: "Sophia Brown", specialization: "Yoga Instructor", exp: "7 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=4" },
  ];

  // Filtering
  const filtered = DUMMY_INSTRUCTORS.filter((i) => {
    return (
      (filter === "All" || i.specialization.includes(filter)) &&
      (search === "" || i.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // Pagination only for table
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6 max-w-6xl mx-auto -mb-6">
      <h1 className="text-2xl font-bold mb-4">Existing Instructor Table</h1>

      <FilterTabs filter={filter} setFilter={setFilter} />
      <div className="flex items-center justify-between my-4">
        <ViewToggle view={view} setView={setView} />
        <SearchBar setSearch={setSearch} />
      </div>

      {/* Grid view scrollable */}
      {view === "grid" ? (
        <div className="overflow-y-auto max-h-[400px]  rounded p-2">
          <InstructorGrid data={filtered} />
        </div>
      ) : (
        <>
          <InstructorTable data={paginatedData} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      <Routes>
  <Route path="/instructor/:id" element={<InstructorDetails />} />
</Routes>
    </div>
  );
}

