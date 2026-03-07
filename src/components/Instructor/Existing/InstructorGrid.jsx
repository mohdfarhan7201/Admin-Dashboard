// import React from 'react';
// import InstructorCard from './InstructorCard';

// export default function InstructorGrid({ data }) {
//   return (
//     <div className="-mt-115 ">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[440px] overflow-auto pr-2">
//         {data.map((d) => (
//           <InstructorCard key={d.id} item={d} />
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { Link } from "react-router-dom";

// export default function InstructorGrid({ data }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//       {data.map((i) => (
//         <div key={i.id} className="border p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
//           <img src={i.img} alt={i.name} className="w-16 h-16 rounded-full mb-2" />
//           <h3 className="font-semibold">{i.name}</h3>
//           <p className="text-sm text-gray-500">{i.specialization}</p>
//           <p className="text-sm">{i.exp}</p>
//           <span
//             className={`px-2 py-1 mt-1 rounded text-xs ${
//               i.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
//             }`}
//           >
//             {i.status}
//           </span>
//           <Link
//             to={`/instructor/${i.id}`}
//             className="mt-3 px-3 py-1 bg-blue-500 text-white rounded"
//           >
//             View
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext"; // Import theme hook

export default function InstructorGrid({ data }) {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef({});
  const { darkMode } = useTheme(); // Get darkMode from context

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleCards((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    data.forEach((item) => {
      if (cardRefs.current[item.id]) {
        observer.observe(cardRefs.current[item.id]);
      }
    });

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {data.map((i, index) => {
        const isEven = index % 2 === 0;

        // Card backgrounds for light/dark mode
        const cardBg = darkMode
          ? isEven
            ? "bg-[#2A2F4A]"
            : "bg-[#3A3050]"
          : isEven
          ? "bg-blue-50"
          : "bg-purple-50";

        // Text color
        const textColor = darkMode ? "text-gray-300" : "text-gray-700";

        // Button background & text
        const btnBg = darkMode
          ? isEven
            ? "bg-blue-600 text-white"
            : "bg-purple-600 text-white"
          : isEven
          ? "bg-blue-200 text-blue-700"
          : "bg-purple-200 text-purple-700";

        // Status badge
        const statusBg =
          i.status === "Active"
            ? darkMode
              ? "bg-green-800 text-green-300"
              : "bg-green-100 text-green-600"
            : darkMode
            ? "bg-red-800 text-red-300"
            : "bg-red-100 text-red-600";

        return (
          <div
            key={i.id}
            data-id={i.id}
            ref={(el) => (cardRefs.current[i.id] = el)}
            className={`card-item p-4 rounded-lg shadow-md flex flex-col gap-3 transition-colors duration-300 ${cardBg} ${
              visibleCards[i.id] ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            {/* Profile */}
            <div className="flex items-center gap-3">
              <img src={i.img} alt={i.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className={`text-lg font-semibold ${textColor}`}>{i.name}</h3>
                <p className={`text-sm ${textColor}`}>{i.specialization}</p>
              </div>
            </div>

            {/* Experience and Status */}
            <div className={`ml-15 ${textColor}`}>
              Experience: <span className="text-sm ml-2">{i.exp}</span>
            </div>
            <div className={`ml-15`}>
              Status:{" "}
              <span
                className={`px-2 py-1 mt-1 rounded text-xs ml-2 ${statusBg}`}
              >
                {i.status}
              </span>
            </div>

            {/* View Button */}
            <Link
              to={`/instructor/${i.id}`}
              className={`mt-3 px-3 py-1 rounded-md text-xs text-center ${btnBg} transition-colors duration-300`}
            >
              View
            </Link>
          </div>
        );
      })}
    </div>
  );
}
