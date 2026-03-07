import React from "react";
import StatsCard from "./StatsCard";
import GrowthChart from "./GrowthChart";
import FeedbackCategoriesChart from "./FeedbackCategoriesChart";
import InstructorPerformanceChart from "./InstructorPerformanceChart";
import FeedbackTable from "./FeedbackTable";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import theme context

export default function FeedbackAnalytics() {
  const navigate = useNavigate();
  const { darkMode } = useTheme(); // ✅ Get current mode

  return (
    <div
      className={`p-6 space-y-6 min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`mb-4 flex items-center space-x-2 ${
          darkMode
            ? "text-blue-400 hover:text-blue-300"
            : "text-blue-600 hover:text-blue-500"
        }`}
      >
        ← Back to Analytics
      </button>

      <h2 className="text-4xl font-semibold">Feedback Analytics</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <StatsCard
          type="goal"
          title="Quarter goal"
          value="84%"
          subtitle="Quarterly performance target"
        />
        <StatsCard
          type="growth"
          title="Feedback Growth"
          value="15%"
          subtitle="Increase compared to last week"
          icon={<FiArrowUpRight className="text-green-500 inline ml-1" />}
          link="/manage-classes/feedback/feedback-growth"
        />
        <StatsCard
          type="negative"
          title="Negative Feedback"
          value="4%"
          subtitle="Decrease compared to last week"
          icon={<FiArrowDownRight className="text-red-500 inline ml-1" />}
          link="/manage-classes/feedback/negative-feedback"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <GrowthChart />
        <FeedbackCategoriesChart />
      </div>

      {/* Instructor Performance */}
      <InstructorPerformanceChart />

      {/* Table */}
      <FeedbackTable />
    </div>
  );
}
