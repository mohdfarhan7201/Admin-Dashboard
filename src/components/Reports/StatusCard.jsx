import React, { useState } from 'react';
import { FaUser, FaFileAlt, FaClock, FaUserPlus } from 'react-icons/fa';
import User from "./TotalUser/TotalUser";
import Instructor from './Instructor/Instructor';
import Manager from './Maneger/Manager';
import Customer from './Customer/Customer';

const cards = [
  {
    id: 1,
    title: 'Total User',
    icon: <FaUser size={22} />,
    component: <User />,
    gradient: 'from-blue-100 via-blue-50 to-white',
  },
  {
    id: 2,
    title: 'Instructor',
    icon: <FaFileAlt size={22} />,
    component: <Instructor />,
    gradient: 'from-blue-100 via-blue-50 to-white',
  },
  {
    id: 3,
    title: 'Manager',
    icon: <FaClock size={22} />,
    component: <Manager />,
    gradient: 'from-blue-100 via-blue-50 to-white',
  },
  {
    id: 4,
    title: 'Customer',
    icon: <FaUserPlus size={22} />,
    component: <Customer />,
    gradient: 'from-blue-100 via-blue-50 to-white',
  },
];

export default function DashboardCards() {
  // Default active card = Existing Instructor (id:1)
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="mx-auto px-4 py-6 -mt-5">
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCard(c.id)}
            className={`group block rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition duration-200 ease-in-out ${
              activeCard === c.id ? `bg-gradient-to-br ${c.gradient}` : 'bg-white'
            }`}
          >
            <div className="p-4 flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-xl mb-3 flex items-center justify-center ${
                  activeCard === c.id
                    ? `bg-gradient-to-br ${c.gradient}`
                    : 'bg-gradient-to-br from-gray-50 to-white'
                }`}
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)' }}
              >
                <div className="text-blue-600 group-hover:scale-105 transition-transform duration-200">
                  {c.icon}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-700">{c.title}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected component renders here */}
      <div>{cards.find((c) => c.id === activeCard)?.component}</div>
    </div>
  );
}
