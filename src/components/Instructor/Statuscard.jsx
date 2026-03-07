import React, { useState } from "react";
import { FaUser, FaFileAlt, FaClock, FaUserPlus } from "react-icons/fa";
import ExistingInstructor from "../Instructor/Existing/ExistingInstructor";
import NewApplication from "./NewApplication";
import PendingApproval from "./PendingApproval";
import RecentlyJoined from "./RecentlyJoined";
import { useTheme } from "../../context/ThemeContext"; // optional dark mode hook

const cards = [
  {
    id: 1,
    title: "Existing Instructor",
    icon: <FaUser size={22} />,
    component: <ExistingInstructor />,
    // gradient: "from-blue-400 via-blue-300 to-blue-200",
  },
  {
    id: 2,
    title: "New Application",
    icon: <FaFileAlt size={22} />,
    component: <NewApplication />,
    // gradient: "from-green-400 via-green-300 to-green-200",
  },
  {
    id: 3,
    title: "Pending Approval",
    icon: <FaClock size={22} />,
    component: <PendingApproval />,
    // gradient: "from-yellow-400 via-yellow-300 to-yellow-200",
  },
  {
    id: 4,
    title: "Recently Joined",
    icon: <FaUserPlus size={22} />,
    component: <RecentlyJoined />,
    // gradient: "from-purple-400 via-purple-300 to-purple-200",
  },
];

export default function DashboardCards() {
  const [activeCard, setActiveCard] = useState(1);
  const { darkMode } = useTheme(); // optional

  return (
    <div className={`mx-auto px-4 py-6 -mt-5 ${darkMode ? "bg-[#191056]" : ""}`}>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {cards.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCard(c.id)}
            className={`group block rounded-lg border shadow-sm transition duration-200 ease-in-out ${
              activeCard === c.id
                ? `bg-gradient-to-br ${c.gradient} border-transparent`
                : darkMode
                ? "bg-[#343749] border-gray-600 hover:shadow-lg"
                : "bg-white border-gray-200 hover:shadow-lg"
            }`}
          >
            <div className="p-4 flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-xl mb-3 flex items-center justify-center ${
                  activeCard === c.id
                    ? `bg-gradient-to-br ${c.gradient}`
                    : darkMode
                    ? "bg-[#3A4065]"
                    : "bg-gradient-to-br from-gray-50 to-white"
                }`}
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
              >
                <div
                  className={`${
                    darkMode ? "text-white" : "text-blue-600"
                  } group-hover:scale-105 transition-transform duration-200`}
                >
                  {c.icon}
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {c.title}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Render selected component */}
      <div className="">{cards.find((c) => c.id === activeCard)?.component}</div>
    </div>
  );
}
