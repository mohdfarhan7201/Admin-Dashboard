// src/components/Permissions.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Header from "./Header";
import UserProfilePermissions from "./UserProfilePermissions";
import SessionAppointmentPermissions from "./SessionAppointmentPermissions";
import AttendancePermissions from "./AttendancePermission";
import PaymentMembership from "./PaymentMembership";
import ScheduleEventsPermission from "./ScheduleEventsPermission";
import ReportsAnalyticsPermission from "./ReportsAnalyticsPermission";
import SettingsConfigurationPermission from "./SettingsConfigurationPermission";

const Permissions = () => {
  const { darkMode } = useTheme();

  return (
    <>
      <Header />
      <div
        className={`min-h-screen flex flex-col items-center p-6 transition-all duration-300 ${
          darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full max-w-6xl">
          <h2
            className={`text-3xl font-semibold mb-4 ${
              darkMode ? "text-white" : "text-green-700"
            }`}
          >
            Permissions
          </h2>

          {/* Permission Components */}
          <UserProfilePermissions />
          <SessionAppointmentPermissions />
          <AttendancePermissions />
          <PaymentMembership />
          <ScheduleEventsPermission />
          <ReportsAnalyticsPermission />
          <SettingsConfigurationPermission />
        </div>
      </div>
    </>
  );
};

export default Permissions;
