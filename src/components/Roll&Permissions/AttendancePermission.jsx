// src/components/AttendancePermissions.jsx
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const AttendancePermission = [
  "View Student Attendance",
  "Mark Attendance",
  "Edit Attendance Records",
];

const actions = ["View", "Create", "Update", "Delete", "Export"];

const AttendancePermissions = () => {
  const { darkMode } = useTheme();

  const [permissions, setPermissions] = useState(
    AttendancePermission.map(() => ({
      View: false,
      Create: false,
      Update: false,
      Delete: false,
      Export: false,
    }))
  );

  const togglePermission = (rowIndex, action) => {
    const updated = [...permissions];
    updated[rowIndex][action] = !updated[rowIndex][action];
    setPermissions(updated);
  };

  return (
    <div
      className={`rounded-lg p-6 mb-8 shadow-md transition-all duration-300 ${
        darkMode ? "bg-[#242B50] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <h3
          className={`font-semibold text-lg ${
            darkMode ? "text-green-400" : "text-green-700"
          }`}
        >
          Attendance Permissions
        </h3>
        <div className="space-x-3">
          <button
            className={`px-4 py-1 rounded-md border transition-all duration-200 ${
              darkMode
                ? "border-gray-500 hover:bg-gray-700"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-1 rounded-md transition-all duration-200 ${
              darkMode
                ? "bg-blue-700 hover:bg-blue-800 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table
          className={`min-w-full border text-sm ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <thead
            className={`${
              darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-600"
            }`}
          >
            <tr>
              <th className="text-left py-2 px-4 border-b">Permission</th>
              {actions.map((action) => (
                <th key={action} className="py-2 px-4 border-b">
                  {action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AttendancePermission.map((perm, rowIndex) => (
              <tr
                key={perm}
                className={`border-b transition-all ${
                  darkMode
                    ? "hover:bg-gray-800 border-gray-700"
                    : "hover:bg-gray-50 border-gray-200"
                }`}
              >
                <td className="py-2 px-4 text-left">{perm}</td>
                {actions.map((action) => (
                  <td key={action} className="py-2 px-4 text-center">
                    <button
                      onClick={() => togglePermission(rowIndex, action)}
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mx-auto transition-all ${
                        darkMode
                          ? "border-gray-500 hover:border-blue-400"
                          : "border-gray-400 hover:border-blue-600"
                      }`}
                    >
                      {permissions[rowIndex][action] && (
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            darkMode ? "bg-blue-400" : "bg-blue-600"
                          }`}
                        ></span>
                      )}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePermissions;
