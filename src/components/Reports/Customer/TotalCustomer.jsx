import React from "react";
import {
  LineChart as LC,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function DashboardCharts() {
  
  // Line chart data
  const lineData = [
    { month: "Jan", thisYear: 10000, lastYear: 12000 },
    { month: "Feb", thisYear: 8000, lastYear: 15000 },
    { month: "Mar", thisYear: 12000, lastYear: 11000 },
    { month: "Apr", thisYear: 20000, lastYear: 18000 },
    { month: "May", thisYear: 25000, lastYear: 22000 },
    { month: "Jun", thisYear: 22000, lastYear: 24000 },
    { month: "Jul", thisYear: 24000, lastYear: 28000 },
  ];

  return (
    <div className="gap-6 py-10">

      {/* Total Customer */}
      <div className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-265  border-gray-200 border-2">
        <div className="flex items-center gap-6 mb-4">
          <h3 className="text-gray-700 font-semibold">Total Customer</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              This year
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-indigo-300 rounded-full"></span>
              Last year
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LC data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#000"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#818cf8"
              strokeDasharray="4 4"
              strokeWidth={2}
              dot={false}
            />
          </LC>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
