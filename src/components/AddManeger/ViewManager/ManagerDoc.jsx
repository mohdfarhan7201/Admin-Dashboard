import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { FaDownload, FaTrash } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";

export default function ManagerDocuments() {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [docName, setDocName] = useState("");
  const [documents, setDocuments] = useState([
    { id: 1, name: "PAN_Card.pdf", file: null },
    { id: 2, name: "Aadhar_Image.png", file: null },
    { id: 3, name: "Certificate.pdf", file: null },
    { id: 4, name: "Resume_Image.png", file: null },
  ]);
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    if (!docName) {
      alert("⚠️ Please enter a document name before uploading!");
      return;
    }
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        id: documents.length + 1,
        name: docName + " (" + file.name + ")",
        file: file,
      };
      setDocuments([...documents, newDoc]);
      setIsOpen(false);
      setDocName("");
    }
  };

  const handleDownload = (doc) => {
    if (doc.file) {
      const url = URL.createObjectURL(doc.file);
      const link = document.createElement("a");
      link.href = url;
      link.download = doc.file.name;
      link.click();
      URL.revokeObjectURL(url);
    } else {
      alert("⚠️ This is a static demo document, file not available.");
    }
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div
      className={`shadow-md rounded-lg p-4 mb-6 relative ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading + Upload Button Right */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">② Manager Documents</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FiUpload /> Upload Document
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className={`text-left text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <th className="p-2">Document</th>
            <th className="p-2">View Details</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className={`hover:${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
            >
              <td className={`p-2 font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>{doc.name}</td>
              <td className="p-2">
                <button
                  className={`px-4 py-1 rounded-md text-sm ${
                    darkMode ? "text-black bg-gray-200 hover:bg-gray-300" : "text-black bg-[#C9B3ED] hover:bg-[#ad98cf]"
                  }`}
                >
                  View
                </button>
              </td>
              <td className={`p-2 font-medium ${darkMode ? "text-green-400" : "text-green-600"}`}>Uploaded</td>
              <td className="p-2 flex gap-2">
                <button
                  onClick={() => handleDownload(doc)}
                  className={`px-3 py-1 text-sm flex items-center gap-1 rounded ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FaDownload className={darkMode ? "text-gray-300" : "text-gray-600"} />
                </button>
                <button
                  onClick={() => handleDelete(doc.id)}
                  className={`px-3 py-1 text-sm flex items-center gap-1 rounded ${
                    darkMode
                      ? "text-red-400 hover:bg-red-700"
                      : "text-red-600 hover:bg-red-100"
                  }`}
                >
                  <FaTrash className={darkMode ? "text-red-400" : "text-red-600"} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Upload Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-lg shadow-lg w-96 ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Upload Document</h2>

            {/* Document Name Input */}
            <input
              type="text"
              placeholder="Enter document name"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              className={`w-full border px-3 py-2 rounded-md mb-4 ${
                darkMode ? "bg-gray-600 text-white border-gray-500" : ""
              }`}
            />

            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-md hover:bg-gray-400 ${
                  darkMode ? "bg-gray-500 text-white" : "bg-gray-300"
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleFileClick}
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
