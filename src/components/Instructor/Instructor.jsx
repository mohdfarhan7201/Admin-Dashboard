import React from "react";
import Header from "./Header";
import StatusCard from "./Statuscard";
import { useTheme } from "../../context/ThemeContext"; 

function Instructor() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "bg-[#191F36] text-white" : "bg-gray-100 text-black"} min-h-screen`}>
      <Header />
      <StatusCard />
    </div>
  );
}

export default Instructor;
