// src/components/AddManager.jsx
import React from "react";
import Sidebar from "../Sidebar";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ManagerList from "./Managerlist";
import ViewManager from "./ViewManager/viewManager";
import AddManagerForm from "./Add New Manager/Addnew";
import { useTheme } from "../../context/ThemeContext"; // 🔹 import theme hook

export default function AddManager() {
  const { darkMode } = useTheme(); // 🔹 get darkMode state

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <Routes>
        {/* Manager List */}
        <Route path="/" element={<ManagerList />} />

        {/* View Manager */}
        <Route path="view/:id" element={<ViewManager />} />
        <Route path="new" element={<AddManagerForm />} />
      </Routes>
    </div>
  );
}
