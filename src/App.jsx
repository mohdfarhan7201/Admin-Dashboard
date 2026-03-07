import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Login from "./components/LOGIN/Login";

import Dashboard from "./components/Dashboard1/Dashboard";
import AddManager from "./components/AddManeger/AddManeger";
import ManageClasses from "./components/ManageClasses/ManageClasses";
import Instructor from "./components/Instructor/Instructor";
import Report from "./components/Reports/Report";
import Payment from "./components/Payments/Payment";
import Employee from "./components/Employee/EmployeeFeedBack";
import Customer from "./components/Customer/CustomerFeedBack";
import Permision from "./components/Roll&Permissions/Roll&Permission";
import Setting from "./components/Settings/Setting";
import LogoutConfirm from "./components/LOGIN/LogoutConfirm";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const { darkMode } = useTheme();
  const location = useLocation();

  // 👇 This checks if you're on the login page
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {isLoginPage ? (
      
        <div
          className={`transition-colors duration-300 ${
            darkMode ? "dark bg-[#191F36] text-white" : "bg-white text-black"
          }`}
        >
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      ) : (
     
        <div
          className={`flex min-h-screen transition-colors duration-300 ${
            darkMode ? "dark bg-[#191F36] text-white" : "bg-white text-black"
          }`}
        >
          <Sidebar />

          <main className="flex-1 overflow-auto ml-64">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-manager/*" element={<AddManager />} />
              <Route path="/manage-classes/*" element={<ManageClasses />} />
              <Route path="/instructor" element={<Instructor />} />
              <Route path="/report" element={<Report />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/feedback/employee" element={<Employee />} />
              <Route path="/feedback/customer" element={<Customer />} />
              <Route path="/roll-permission" element={<Permision />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/logout" element={<LogoutConfirm />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
