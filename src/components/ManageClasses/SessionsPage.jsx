// import React, { useState } from "react";
// import { FiCalendar, FiClock } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";

// export default function SessionsPage() {
//   const [month, setMonth] = useState("This Month");
//   const [filter, setFilter] = useState("All");

//   const navigate = useNavigate();

//   const data = [
//     {
//       id: 1,
//       title: "Morning Yoga For Beginners",
//       instructor: "Dr. Meera Singh",
//       role: "Yoga Instructor",
//       date: "20 Aug 2025",
//       time: "7:00 AM",
//       thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
//     },
//     {
//       id: 2,
//       title: "Yoga For Stress Relief",
//       instructor: "Vashu Verma",
//       role: "Physiotherapist",
//       date: "20 Aug 2025",
//       time: "7:00 AM",
//       thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/0.jpg",
//     },
//     {
//       id: 3,
//       title: "Evening Yoga For Flexibility",
//       instructor: "Nandita Pandey",
//       role: "Yoga Doctor",
//       date: "20 Aug 2025",
//       time: "7:00 AM",
//       thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/0.jpg",
//     },
//     {
//       id: 4,
//       title: "Meditation & Breathing Session",
//       instructor: "Arjun Patel",
//       role: "AI Consultant",
//       date: "25 Sep 2025",
//       time: "6:30 PM",
//       thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/0.jpg",
//     },
//     {
//       id: 5,
//       title: "Strength Yoga Advanced",
//       instructor: "Riya Sharma",
//       role: "Yoga Trainer",
//       date: "15 Sep 2025",
//       time: "8:00 AM",
//       thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/0.jpg",
//     },
//     {
//       id: 6,
//       title: "Power Yoga For Core",
//       instructor: "Manish Kumar",
//       role: "Yoga Doctor",
//       date: "22 Aug 2025",
//       time: "7:30 AM",
//       thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg",
//     },
//   ];

//   // Filter Logic
//   const filteredData = data.filter((item) => {
//     const monthMatch =
//       month === "This Month"
//         ? item.date.includes("Aug 2025")
//         : month === "Next Month"
//         ? item.date.includes("Sep 2025")
//         : true;

//     const roleMatch = filter === "All" ? true : item.role === filter;

//     return monthMatch && roleMatch;
//   });

//   // helper to extract YouTube video ID from thumbnail URL
//   const getYoutubeId = (url) => {
//     try {
//       return url.split("/vi/")[1].split("/")[0];
//     } catch {
//       return null;
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <button
//         onClick={() => navigate(-1)}
//         className="text-blue-800 hover:underline mb-4 flex items-center space-x-2"
//       >
//         {"<"} Back to Analytics
//       </button>

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Upcoming Classes</h2>
//         <div className="relative flex items-center w-120">
//           <FiSearch className="absolute left-3 text-gray-400" size={18} />
//           <input
//             type="text"
//             placeholder="Instructor / Class / Tag"
//             className="pl-10 pr-4 py-2 border rounded-lg w-full"
//           />
//         </div>
//         <select
//           className="border rounded-md p-2"
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//         >
//           <option>This Month</option>
//           <option>Next Month</option>
//           <option>All</option>
//         </select>
//       </div>

//       {/* Filters */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         {["All", "Yoga Trainer", "Yoga Doctor", "Physiotherapist", "AI Consultant"].map(
//           (f) => (
//             <button
//               key={f}
//               onClick={() => setFilter(f)}
//               className={`px-4 py-2 rounded-full border ${
//                 filter === f
//                   ? "bg-black text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {f}
//             </button>
//           )
//         )}
//       </div>

//       {/* Grid Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredData.map((item) => {
//           const videoId = getYoutubeId(item.thumbnail);
//           return (
//             <div
//               key={item.id}
//               className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
//             >
//               <div className="relative w-full h-40 mb-4 group overflow-hidden rounded-md">
//                 {/* Thumbnail */}
//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                   className="w-full h-full object-cover absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
//                 />

//                 {/* YouTube Preview */}
//                 {videoId && (
//                   <iframe
//                     className="w-full h-full rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
//                     title={item.title}
//                     allow="autoplay; encrypted-media"
//                   ></iframe>
//                 )}
//               </div>

//               <h3 className="font-semibold text-lg">{item.title}</h3>
//               <p className="text-gray-500">{item.instructor}</p>
//               <p className="text-sm text-indigo-500">{item.role}</p>

//               <div className="flex items-center text-gray-600 mt-2 text-sm">
//                 <FiCalendar className="mr-2" /> {item.date}
//               </div>
//               <div className="flex items-center text-gray-600 text-sm">
//                 <FiClock className="mr-2" /> {item.time}
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-between mt-4">
//                 <button className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300">
//                   Edit
//                 </button>
//                 <button className="px-3 py-1 text-sm bg-red-200 rounded-md hover:bg-red-300">
//                   Cancel
//                 </button>
//                 <button className="px-3 py-1 text-sm bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
//                   View
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {filteredData.length === 0 && (
//         <p className="text-gray-500 mt-6">
//           No sessions available for this filter.
//         </p>
//       )}
//     </div>
//   );
// }





import React, { useState } from "react";
import { FiCalendar, FiClock, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

export default function SessionsPage() {
  const [month, setMonth] = useState("This Month");
  const [filter, setFilter] = useState("All");
  const { darkMode } = useTheme(); // ✅ Access dark mode
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      title: "Morning Yoga For Beginners",
      instructor: "Dr. Meera Singh",
      role: "Yoga Instructor",
      date: "20 Aug 2025",
      time: "7:00 AM",
      thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
    },
    {
      id: 2,
      title: "Yoga For Stress Relief",
      instructor: "Vashu Verma",
      role: "Physiotherapist",
      date: "20 Aug 2025",
      time: "7:00 AM",
      thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/0.jpg",
    },
    {
      id: 3,
      title: "Evening Yoga For Flexibility",
      instructor: "Nandita Pandey",
      role: "Yoga Doctor",
      date: "20 Aug 2025",
      time: "7:00 AM",
      thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/0.jpg",
    },
    {
      id: 4,
      title: "Meditation & Breathing Session",
      instructor: "Arjun Patel",
      role: "AI Consultant",
      date: "25 Sep 2025",
      time: "6:30 PM",
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/0.jpg",
    },
    {
      id: 5,
      title: "Strength Yoga Advanced",
      instructor: "Riya Sharma",
      role: "Yoga Trainer",
      date: "15 Sep 2025",
      time: "8:00 AM",
      thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/0.jpg",
    },
    {
      id: 6,
      title: "Power Yoga For Core",
      instructor: "Manish Kumar",
      role: "Yoga Doctor",
      date: "22 Aug 2025",
      time: "7:30 AM",
      thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg",
    },
  ];

  // Filter Logic
  const filteredData = data.filter((item) => {
    const monthMatch =
      month === "This Month"
        ? item.date.includes("Aug 2025")
        : month === "Next Month"
        ? item.date.includes("Sep 2025")
        : true;

    const roleMatch = filter === "All" ? true : item.role === filter;

    return monthMatch && roleMatch;
  });

  // helper to extract YouTube video ID from thumbnail URL
  const getYoutubeId = (url) => {
    try {
      return url.split("/vi/")[1].split("/")[0];
    } catch {
      return null;
    }
  };

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`mb-4 flex items-center space-x-2 ${
          darkMode
            ? "text-blue-400 hover:underline"
            : "text-blue-800 hover:underline"
        }`}
      >
        {"<"} Back to Analytics
      </button>

      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold">Upcoming Classes</h2>
        <div className="relative flex items-center w-80">
          <FiSearch
            className={`absolute left-3 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
            size={18}
          />
          <input
            type="text"
            placeholder="Instructor / Class / Tag"
            className={`pl-10 pr-4 py-2 rounded-lg w-full outline-none transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400"
                : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
        <select
          className={`rounded-md p-2 transition-colors duration-300 ${
            darkMode
              ? "bg-gray-800 border border-gray-700 text-gray-200"
              : "bg-white border border-gray-300 text-gray-900"
          }`}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option>This Month</option>
          <option>Next Month</option>
          <option>All</option>
        </select>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["All", "Yoga Trainer", "Yoga Doctor", "Physiotherapist", "AI Consultant"].map(
          (f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                filter === f
                  ? darkMode
                    ? "bg-green-500 text-white"
                    : "bg-green-600 text-white"
                  : darkMode
                  ? "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {f}
            </button>
          )
        )}
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredData.map((item) => {
          const videoId = getYoutubeId(item.thumbnail);
          return (
            <div
              key={item.id}
              className={`rounded-2xl shadow transition-all duration-300 p-4 ${
                darkMode
                  ? "bg-gray-800 hover:shadow-lg hover:bg-gray-700"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <div className="relative w-full h-40 mb-4 group overflow-hidden rounded-md">
                {/* Thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* YouTube Preview */}
                {videoId && (
                  <iframe
                    className="w-full h-full rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
                    title={item.title}
                    allow="autoplay; encrypted-media"
                  ></iframe>
                )}
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                {item.instructor}
              </p>
              <p
                className={`text-sm ${
                  darkMode ? "text-indigo-400" : "text-indigo-500"
                }`}
              >
                {item.role}
              </p>

              <div
                className={`flex items-center mt-2 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FiCalendar className="mr-2" /> {item.date}
              </div>
              <div
                className={`flex items-center text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FiClock className="mr-2" /> {item.time}
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Edit
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                    darkMode
                      ? "bg-red-800 hover:bg-red-700 text-white"
                      : "bg-red-200 hover:bg-red-300"
                  }`}
                >
                  Cancel
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                    darkMode
                      ? "bg-indigo-500 hover:bg-indigo-600"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  } text-white`}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredData.length === 0 && (
        <p
          className={`mt-6 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          No sessions available for this filter.
        </p>
      )}
    </div>
  );
}
