// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const ThemeContext = createContext();

// ThemeProvider to wrap the app
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  // Apply theme classes to body and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark", "bg-[#191F36]", "text-white");
      document.body.classList.remove("bg-gray-100", "text-black");
    } else {
      document.body.classList.remove("dark", "bg-[#191F36]", "text-white");
      document.body.classList.add("bg-gray-100", "text-black");
    }
    // Save current theme
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme easily
export function useTheme() {
  return useContext(ThemeContext);
}
