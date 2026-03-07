// src/components/settings/AccountProfile.jsx
import React, { useContext, useState } from "react";
import defaultProfile from "../../assets/default.jpg";
import Dashboard from "../../assets/dashboard1.svg";
import { ThemeContext } from "../../context/ThemeContext"; // ✅ Import context

export default function AccountProfile() {
  const { darkMode } = useContext(ThemeContext); // ✅ useTheme hook
  const [profile, setProfile] = useState({
    name: "Admin Name",
    username: "admin_user",
    email: "abc123@gmail.com",
    phone: "1234567890",
    profileImage: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`p-6 rounded-2xl  shadow transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-white shadow-gray-500 " : "bg-white text-black"}`}
    >
      <div className="flex items-center gap-4 mb-4 ">
        <img
          src={profile.profileImage ? profile.profileImage : defaultProfile}
          alt="profile"
          className="w-16 h-16 rounded-full border-white border-2"
        />
        <h2 className="font-semibold text-lg">{profile.name}</h2>
      </div>

      <div className="flex flex-col gap-3  ">
        <div className="relative">

        <label className={`absolute -top-3 left-3 rounded-xl transition-colors duration-300 
          ${darkMode ? "bg-gray-800 text-white border-white" : "bg-white text-black border-gray-300"}`}>Admin Name</label>
        <input
          className={`border p-2 rounded w-full transition-colors duration-300 
            ${darkMode ? "bg-gray-800 text-white border-white" : "bg-white text-black border-gray-300"}`}
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            />
            </div>
            <div className="relative">
        <label className={`absolute -top-3 left-3 transition-colors duration-300 
               ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}>E-mail</label>
        <input
          className={`border p-2 rounded w-full transition-colors duration-300 
            ${darkMode ? "bg-gray-800 text-white border-white" : "bg-white text-black border-gray-300"}`}
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            />
            </div>
            <div className="relative">
 <label className={`absolute -top-3 left-3 transition-colors duration-300 
               ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}>Phone Number</label>
        <input
          className={`border p-2 rounded w-full transition-colors duration-300 
          ${darkMode ? "bg-gray-800 text-white border-white" : "bg-white text-black border-gray-300"}`}
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />
        </div>
      </div>
    </div>
  );
}
