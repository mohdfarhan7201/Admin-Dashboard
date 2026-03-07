// src/components/settings/NotificationSettings.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"; // ✅ Import context

export default function NotificationSettings({ notifications, setNotifications }) {
  const { darkMode } = useContext(ThemeContext); // ✅ Get darkMode from context

  const toggle = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const options = [
    { key: "email", label: "Email Notification" },
    { key: "request", label: "Request Notification" },
    { key: "payment", label: "Payment Notification" },
    { key: "feedback", label: "Feedback Notification" },
    { key: "allowAll", label: "Allow All Notifications" },
  ];

  return (
    <div
      className={`p-6 rounded-2xl shadow transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-white text-black"}`}
    >
      <h2 className="font-semibold mb-4">Notification Settings</h2>

      {options.map(({ key, label }) => (
        <div key={key} className="flex justify-between items-center py-2">
          <span>{label}</span>
          <button
            onClick={() => toggle(key)}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
              notifications[key] ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
                notifications[key] ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
