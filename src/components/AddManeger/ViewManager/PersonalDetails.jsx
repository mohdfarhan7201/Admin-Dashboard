import React from "react";
import defaultProfile from "../../../assets/default.jpg";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import context

export default function PersonalDetails() {
  const { darkMode } = useTheme(); // ✅ Get darkMode value

  // Example data (ye aapko form/API se milega)
  const user = {
    name: "Anthony Williams",
    employeeId: "EMP123",
    branch: "New York",
    designation: "Manager",
    email: "anthony@gmail.com",
    contact: "+1 234 567 890",
    profileImage: "" //  empty hone par default image dikhega
  };

  return (
    <div className={`${darkMode ? "bg-gray-800 text-white shadow shadow-gray-600" : "bg-white text-black"} shadow-md rounded-lg p-6 mb-5`}>
      <h2 className="text-3xl font-semibold mb-6"> ① Personal details</h2>

      <div className="flex justify-between items-start ml-10">
        {/* Left side: Profile + Info */}
        <div className="flex items-start gap-6">
          {/* Profile Image with fallback */}
          <img
            src={user.profileImage || defaultProfile}
            alt="Profile"
            className="w-24 h-24 rounded-full border"
            onError={(e) => (e.target.src = defaultProfile)}
          />

          {/* User Info */}
          <div className="ml-5">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} font-semibold`}>{user.designation}</p>
            <p className="mt-2"><strong>Employee ID:</strong> {user.employeeId}</p>
            <p><strong>Email ID:</strong> {user.email}</p>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              <button className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-800"} px-4 py-2 rounded font-semibold`}>
                Send Message
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded font-semibold">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Right side: Contact info */}
        <div className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-mb font-semibold mr-50 mt-10`}>
          <p><strong>Contact:</strong> {user.contact}</p>
          <p><strong>Designation:</strong> {user.designation}</p>
          <p><strong>Branch Location:</strong> {user.branch}</p>
        </div>
      </div>
    </div>
  );
}
