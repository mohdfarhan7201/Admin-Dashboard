import React from "react";

export default function InstructorOverview({ onBack }) {
  return (
    // Overlay Background
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Main Popup */}
      <div className="relative w-11/12 md:w-4/5 lg:w-3/4 max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl"
        >
          ←
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Instructor Application Overview
        </h2>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Details */}
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Personal Details
            </h3>
            <div className="flex flex-col items-right text-left">
              <img
                src="https://i.pravatar.cc/150"
                alt="Instructor"
                className="w-24 h-24 rounded-full mb-3"
              />
              <p className="font-semibold text-lg ">John Doew</p>
            </div>

            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Gender:</strong> Male
              </p>
              <p>
                <strong>Email ID:</strong> abc123@gmail.com
              </p>
              <p>
                <strong>Contact Number:</strong> +91 1234231515
              </p>
              <p>
                <strong>Nationality:</strong> Indian
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p className="font-medium">Social Media Links:</p>
              <ul className="mt-1 space-y-1">
                <li>LinkedIn ______________________</li>
                <li>Instagram ______________________</li>
                <li>Facebook ______________________</li>
                <li>Twitter ______________________</li>
              </ul>
            </div>
          </div>

          {/* Professional Details */}
          <div className="border border-gray-200 rounded-lg p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Professional Details
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>Role:</strong> Yoga Trainer
                </p>
                <p>
                  <strong>Work Experience:</strong> 3 Years
                </p>
                <p>
                  <strong>Education Qualification:</strong> B.Sc in Yoga,
                  Diploma
                </p>
                <p>
                  <strong>Specialization:</strong> Yoga Therapy, Meditation,
                  Spine Rehab
                </p>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="flex justify-end mt-6">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-people-doing-yoga-illustration_23-2148408590.jpg"
                alt="Professional Illustration"
                className="w-40 object-contain"
              />
            </div>

        {/* Document Details */}
        <div className="border border-gray-200 rounded-lg p-5 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Documents Details
            </h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Upload Document
            </button>
          </div>

          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left p-2 font-medium">Document</th>
                <th className="text-center p-2 font-medium">View Details</th>
                <th className="text-center p-2 font-medium">Status</th>
                <th className="text-center p-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "PAN_Card.pdf" },
                { name: "Aadhar_image.png" },
                { name: "Certificate.pdf" },
                { name: "License.png" },
              ].map((doc, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={
                        doc.name.endsWith(".pdf")
                          ? "https://cdn-icons-png.flaticon.com/512/337/337946.png"
                          : "https://cdn-icons-png.flaticon.com/512/337/337940.png"
                      }
                      alt="icon"
                      className="w-5 h-5"
                    />
                    {doc.name}
                  </td>
                  <td className="text-center p-2">
                    <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-md hover:bg-blue-200">
                      View
                    </button>
                  </td>
                  <td className="text-center p-2 text-green-600 font-medium">
                    Uploaded
                  </td>
                  <td className="text-center p-2 flex justify-center gap-2">
                    <button title="Preview">👁</button>
                    <button title="Download">⬇️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

          {/* Approve / Reject Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <button className="bg-green-100 hover:bg-green-200 text-green-700 font-medium px-6 py-2 rounded-md border border-green-400">
              Approve
            </button>
            <button className="bg-red-100 hover:bg-red-200 text-red-700 font-medium px-6 py-2 rounded-md border border-red-400">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
