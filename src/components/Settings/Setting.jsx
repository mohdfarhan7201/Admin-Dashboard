// src/pages/AdminSettings.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AccountProfile from "./AccountProfile";
import PrivacySecurity from "./PrivacySecurity";
import NotificationSettings from "./NotificationSettings";
import ThemeDisplay from "./ThemeDisplay";
import ReportsAnalytics from "./ReportsAnalytics";
import AdminControl from "./AdminControl";
import SystemControl from "./SystemControl";
import HelpSection from "./HelpSection";

export default function AdminSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: false,
    request: false,
    payment: false,
    feedback: false,
    allowAll: false,
  });
  const [language, setLanguage] = useState("English");

  // Apply dark mode by toggling a "dark" class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark", "bg-gray-900", "text-white");
      document.body.classList.remove("bg-gray-100", "text-black");
    } else {
      document.body.classList.remove("dark", "bg-gray-900", "text-white");
      document.body.classList.add("bg-gray-100", "text-black");
    }
  }, [darkMode]);

  return (
    <>
      <Header />
      <div className='min-h-screen transition-colors grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <AccountProfile darkMode={darkMode} />
          <PrivacySecurity darkmode={darkMode} />
          <HelpSection darkMode={darkMode} />
          <SystemControl darkMode={darkMode} />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <NotificationSettings
          darkmode={darkMode}
            notifications={notifications}
            setNotifications={setNotifications}
          />
          <ThemeDisplay
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            setLanguage={setLanguage}
          />
          <ReportsAnalytics darkMode={darkMode} />
          <AdminControl darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}
