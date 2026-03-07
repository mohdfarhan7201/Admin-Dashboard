import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext"; // ✅ import your theme

export default function TrainerGrid({ trainers }) {
  const cardsRef = useRef([]);
  const { darkMode } = useTheme(); // ✅ get darkMode

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      {trainers.map((t, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`p-6 rounded-lg flex items-center space-x-4 fade-in-up shadow transition-all duration-300
            ${
              darkMode
                ? "bg-gray-800 border border-gray-700 text-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                : "bg-white border border-gray-200 text-gray-700 hover:shadow-lg"
            }`}
        >
          <img
            src={t.image || "/placeholder.jpg"}
            alt={t.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              {t.name}
            </h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-sm`}>
              {t.role}
            </p>
            <div className={`flex space-x-4 mt-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              <span>{t.photos} Photos</span>
              <span>{t.videos} Videos</span>
              <span>{t.feedback} Feedback</span>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className={`px-3 py-1 text-sm rounded-lg transition
                ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-purple-100 hover:bg-purple-200 text-gray-700"}`}>
                View Media
              </button>
              <button className={`px-3 py-1 text-sm rounded-lg transition
                ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-purple-100 hover:bg-purple-200 text-gray-700"}`}>
                View Feedback
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
