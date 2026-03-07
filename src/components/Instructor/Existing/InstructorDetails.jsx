// InstructorDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function InstructorDetails() {
  const { id } = useParams();

  // Dummy instructors — should match the one in App.jsx
  const DUMMY_INSTRUCTORS = [
    { id: "INST-1", name: "John Doe", specialization: "Yoga Instructor", exp: "5 years", status: "Active", img: "https://i.pravatar.cc/40?img=1" },
    { id: "INST-2", name: "Alice Smith", specialization: "Yoga Doctor", exp: "4 years", status: "Active", img: "https://i.pravatar.cc/40?img=2" },
    { id: "INST-3", name: "Robert Lee", specialization: "Yoga Instructor", exp: "2 years", status: "Active", img: "https://i.pravatar.cc/40?img=3" },
    { id: "INST-4", name: "Sophia Brown", specialization: "Yoga Instructor", exp: "7 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=4" },
    { id: "INST-5", name: "David Wilson", specialization: "Yoga Doctor", exp: "6 years", status: "Inactive", img: "https://i.pravatar.cc/40?img=5" },
    { id: "INST-6", name: "Emma Watson", specialization: "Yoga Trainer", exp: "3 years", status: "Active", img: "https://i.pravatar.cc/40?img=6" },
  ];

  const instructor = DUMMY_INSTRUCTORS.find((i) => i.id === id);

  if (!instructor)
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Instructor not found
      </div>
    );

  const attendanceData = [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 40 },
    { month: "May", value: 45 },
    { month: "Jun", value: 60 },
    { month: "Jul", value: 38 },
    { month: "Aug", value: 62 },
    { month: "Sep", value: 48 },
    { month: "Oct", value: 30 },
    { month: "Nov", value: 55 },
    { month: "Dec", value: 42 },
  ];

  const assignedCourses = [
    { name: "Praesentum, dolores suscipit.", duration: "10 Weeks", status: "Paid Courses" },
    { name: "Praesentum, dolores suscipit.", duration: "3 Weeks", status: "Paid Courses" },
    { name: "Praesentum, dolores suscipit.", duration: "5 Weeks", status: "Free Courses" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Back link */}
      <div className="mb-4">
        <Link to="/">← Back to Instructors</Link>

      </div>

      <h1 className="text-2xl font-semibold mb-6">Instructor Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow p-6 text-center flex flex-col items-center">
          <img
            src={instructor.img}
            alt={instructor.name}
            className="w-28 h-28 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{instructor.name}</h2>
          <p className="text-green-600 text-sm font-medium mt-1">
            {instructor.specialization}
          </p>

          <div className="mt-4 text-gray-600 text-sm space-y-1">
            <p><strong>ID:</strong> {instructor.id}</p>
            <p><strong>Experience:</strong> {instructor.exp}</p>
            <p><strong>Status:</strong>{" "}
              <span
                className={`px-2 py-0.5 rounded text-xs ${
                  instructor.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {instructor.status}
              </span>
            </p>
            <p><strong>Joined:</strong> April 10, 2023</p>
          </div>

          <div className="mt-4 text-gray-600 text-sm space-y-1">
            <p>📧 example@teamwebflow.com</p>
            <p>📞 +44 123 654 7890</p>
          </div>
        </div>

        {/* Courses and Attendance */}
        <div className="lg:col-span-2 space-y-6">
          {/* Courses Assigned */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Courses Assigned</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Course Name</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {assignedCourses.map((c, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">{c.name}</td>
                    <td className="p-3">{c.duration}</td>
                    <td className="p-3">{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Attendance Chart */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Attendance Records</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
