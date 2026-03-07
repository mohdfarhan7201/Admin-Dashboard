// src/components/settings/PrivacySecurity.jsx
import React, { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext"; // ✅ Import context
import { useContext } from "react";

export default function PrivacySecurity() {
  const { darkMode } = useContext(ThemeContext); // ✅ useTheme hook

  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }
    if (form.newPassword.length < 6) {
      setMessage("❌ Password must be at least 6 characters");
      return;
    }
    setMessage("✅ Password changed successfully (mock update)");
    setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div
      className={`p-6 rounded-2xl shadow transition-colors duration-300
      ${darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-white text-black"}`}
    >
      <h2 className="font-semibold mb-4">Privacy & Security</h2>

      {/* ✅ fixed template string */}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-3 transition-colors duration-300`}
      >
        <input
          type="password"
          name="oldPassword"
          placeholder="Old Password"
          value={form.oldPassword}
          onChange={handleChange}
          className={`border p-2 rounded w-full transition-colors duration-300
          ${darkMode ? "bg-gray-800 text-white border-white placeholder-white" : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={form.newPassword}
          onChange={handleChange}
          className={`border p-2 rounded w-full transition-colors duration-300
          ${darkMode ? "bg-gray-800 text-white border-white placeholder-white" : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={`border p-2 rounded w-full transition-colors duration-300
          ${darkMode ? "bg-gray-800 text-white border-white placeholder-white" : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        />
        <button
          type="submit"
          className={`p-2 rounded mt-2 w-full transition-colors duration-300
          ${darkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          Change Password
        </button>
      </form>

      {message && (
        <p
          className={`mt-3 text-sm transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
