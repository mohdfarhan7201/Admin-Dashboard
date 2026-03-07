// src/components/Permissions/UserProfilePermissions.jsx
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const userPermissions = [
  "View User Profiles",
  "Edit User Details",
  "Add Users (only Students/Instructor)",
  "Delete/Deactivate User",
  "Assign Roles to Users",
  "Access Contact Information",
];

const actions = ["View", "Create", "Update", "Delete", "Export"];

const UserProfilePermissions = () => {
  const [permissions, setPermissions] = useState(
    userPermissions.map(() => ({
      View: false,
      Create: false,
      Update: false,
      Delete: false,
      Export: false,
    }))
  );

  const { darkMode } = useContext(ThemeContext);

  const togglePermission = (rowIndex, action) => {
    const updated = [...permissions];
    updated[rowIndex][action] = !updated[rowIndex][action];
    setPermissions(updated);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white shadow-gray-500" : "bg-white text-gray-900"
      } shadow-md rounded-lg p-6 mb-8 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center mb-3">
        <h3
          className={`font-semibold text-xl ${
            darkMode ? "text-green-400" : "text-green-700"
          }`}
        >
          User & Profile Permissions
        </h3>
        <div className="space-x-3">
          <button
            className={`px-4 py-1 border rounded-md transition-colors duration-300 ${
              darkMode
                ? "border-gray-600 hover:bg-[#2E3A66]"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-1 rounded-md text-white transition-colors duration-300 ${
              darkMode
                ? "bg-blue-700 hover:bg-blue-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table
          className={`min-w-full border text-md ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <thead
            className={`${
              darkMode ? "bg-[#2E3A66] text-gray-200" : "bg-gray-100 text-gray-600"
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
            {userPermissions.map((perm, rowIndex) => (
              <tr
                key={perm}
                className={`border-b transition-colors duration-200 ${
                  darkMode
                    ? "hover:bg-[#303C6C] border-gray-700"
                    : "hover:bg-gray-50 border-gray-200"
                }`}
              >
                <td className="py-2 px-4 text-left">{perm}</td>
                {actions.map((action) => (
                  <td key={action} className="py-2 px-4 text-center">
                    <button
                      onClick={() => togglePermission(rowIndex, action)}
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mx-auto transition-colors duration-300 ${
                        darkMode ? "border-gray-500" : "border-gray-400"
                      }`}
                    >
                      {permissions[rowIndex][action] && (
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            darkMode ? "bg-blue-500" : "bg-blue-600"
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

export default UserProfilePermissions;
