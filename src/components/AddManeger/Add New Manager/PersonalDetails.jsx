// src/components/PersonalDetails.jsx
import React, { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import Default from "../../../assets/default.jpg";
import { useTheme } from "../../../context/ThemeContext";
import BASE_URL from "../../../API/baseUrl";

export default function PersonalDetails({ nextStep }) {
  const [image, setImage] = useState(Default);
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    employeeName: "",
    salary: "",
    employeeId: "",
    contactNumber: "",
    designation: "",
    emailAddress: "",
    dateOfJoining: "",
    location: "",
  });

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const { darkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleCameraClick = () => {
    cameraInputRef.current.click();
  };

 const handleSubmit = async () => {
  try {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("Session expired. Please login again.");
      return;
    }

    const data = new FormData();

    data.append("employee_name", formData.employeeName);
    data.append("salary", formData.salary);
    data.append("employee_id", formData.employeeId);
    data.append("contact_number", formData.contactNumber);
    data.append("designation", formData.designation);
    data.append("email", formData.emailAddress);
    data.append("address", "Delhi India");
    data.append("date_of_joining", formData.dateOfJoining);
    data.append("location", formData.location);

    if (selectedFile) {
      data.append("profile_photo", selectedFile);
    }

    const response = await axios.post(
      `${BASE_URL}/admin-auth/manager/step1/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("API Response:", response.data);

    console.log("FULL RESPONSE:", response.data);

const tempId =
  response.data?.response?.temp_id ||
  response.data?.response?.id;

if (!tempId) {
  console.error("Temp ID missing. Full response:", response.data);
  alert("Temp ID not received from server!");
  return;
}

nextStep(tempId);


  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      alert("Unauthorized! Please login again.");
    } else {
      alert(error.response?.data?.error || "Something went wrong!");
    }
  }
};


  return (
    <div
      className={`border rounded-lg p-6 shadow-sm relative transition-colors duration-300 ${
        darkMode
          ? "bg-[#191F36] text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <div className="absolute top-6 right-6 flex flex-col items-center mr-15">
        <div className="relative">
          <img
            src={image}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border"
          />

          <button
            onClick={handleCameraClick}
            className={`absolute bottom-0 right-0 p-2 rounded-full shadow ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <FaCamera size={14} />
          </button>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <button
          onClick={handleUploadClick}
          className="mt-2 text-md bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Upload
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div
          className={`rounded-full w-9 h-9 flex items-center justify-center font-bold -mt-3 ${
            darkMode
              ? "bg-gray-700 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          1
        </div>
        <h2 className="text-3xl font-semibold mb-5">
          Personal details
        </h2>
      </div>

      <p className="text-md font-semibold mb-12 ml-8">
        Upload and manage documents for this manager
      </p>

      <div className="grid grid-cols-2 gap-4 px-20">
        {[
          { label: "Employee Name", name: "employeeName" },
          { label: "Salary", name: "salary" },
          { label: "Employee ID", name: "employeeId" },
          { label: "Contact Number", name: "contactNumber" },
          { label: "Designation", name: "designation" },
          { label: "Email Address", name: "emailAddress" },
          { label: "Date of Joining", name: "dateOfJoining" },
          { label: "Location", name: "location" },
        ].map((field, idx) => (
          <div className="relative" key={idx}>
            <label
              className={`absolute -top-2 left-3 px-1 font-bold text-sm ${
                darkMode
                  ? "bg-[#191F36] text-[#4ade80]"
                  : "bg-white text-[#1D7464]"
              }`}
            >
              {field.label}
            </label>

            <div
              className={`flex items-center rounded-md p-2 ${
                darkMode
                  ? "border border-gray-600 bg-gray-800"
                  : "border border-gray-300 bg-white"
              }`}
            >
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                className={`w-full outline-none ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded ml-85 hover:bg-blue-600"
      >
        Save & Continue
      </button>
    </div>
  );
}
