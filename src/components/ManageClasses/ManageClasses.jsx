import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FeedbackPage from "./Feedback/FeedbackPage";
import SessionsPage from "./SessionsPage";
import ClassesPage from "./Classes/ClassesPage";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

const ManageClasses = () => {
  const { darkMode } = useTheme(); // ✅ Access darkMode

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feedback/*" element={<FeedbackPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
    </div>
  );
};

export default ManageClasses;
