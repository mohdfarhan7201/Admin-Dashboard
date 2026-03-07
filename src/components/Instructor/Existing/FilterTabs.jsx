// import React from 'react';

// export default function FilterTabs({ options, active, onChange }) {
//   return (
//     <div className="flex items-center gap-3 w-200 mb-5">
//       {options.map((opt) => (
//         <button
//           key={opt}
//           onClick={() => onChange(opt)}
//           className={`px-6 py-2 rounded-full text-md font-bold transition ${
//             active === opt
//               ? 'bg-green-500 text-white'
//               : 'bg-white text-gray-700 border border-gray-200'
//           }`}
//         >
//           {opt}
//         </button>
//       ))}
//     </div>
//   );
// }

import React from "react";
import { useTheme } from "../../../context/ThemeContext"; // Import the theme hook

export default function FilterTabs({ filter, setFilter }) {
  const tabs = ["All", "Yoga Instructor", "Yoga Doctor", "Physiotherapist", "AI Consultant"];
  const { darkMode } = useTheme(); // Get darkMode from context

  return (
    <div className="flex gap-3 mb-4 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-2 rounded-full text-lg font-semibold border transition-colors duration-300 ${
            filter === tab
              ? "bg-green-500 text-white border-green-500"
              : darkMode
              ? "bg-[#2A2F4A] text-gray-300 border-gray-600 hover:bg-[#3A4060]"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
