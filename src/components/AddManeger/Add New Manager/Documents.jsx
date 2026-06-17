// src/components/ManagerDocuments.jsx
import React, { useRef, useState } from "react";
import { FiPaperclip, FiPlus } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";
import axios from "axios"; // ✅ ADDED
import BASE_URL from "../../../API/baseUrl";

export default function ManagerDocuments({ nextStep, prevStep, tempId }) {
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [customDocs, setCustomDocs] = useState([]);
  const [docName, setDocName] = useState("");
  const [error, setError] = useState("");
  const [loadingDoc, setLoadingDoc] = useState(false);

  const dropRefs = useRef({});
  const rightDropRef = useRef(null);

  const { darkMode } = useTheme();

  // const documents = [
  //   { id: 1, name: "Aadhar Card" },
  //   { id: 2, name: "PAN Card" },
  //   { id: 3, name: "Experience" },
  // ];                                             edit 3



  const documents = [
 { id: 1, name: "AADHAR" },
 { id: 2, name: "PAN" },
 { id: 3, name: "EXPERIENCE" },
];

  const allowed = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/png",
    "image/jpeg",
  ];
  const maxSize = 2 * 1024 * 1024;

  // ================= AXIOS API HIT =================
  const uploadSingleDocument = async (file, documentName) => {
    try {
      if (!tempId) {
        setError("Temp ID missing. Complete Step 1 first.");
        return false;
      }

      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Authorization token missing.");
        return false;
      }

      setLoadingDoc(true);
      setError("");

      const formData = new FormData();
      // formData.append("document_name", documentName);   edit 1
      // formData.append("file", file);


      formData.append("doc_type", documentName);
formData.append("files", file);

      await axios.post(
        `${BASE_URL}/admin-auth/manager/step2/${tempId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "multipart/form-data",    edit 2
          },
        }
      );

      return true;
    } catch (err) {
      console.error("Upload Error:", err);
      setError(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Upload failed"
      );
      return false;
    } finally {
      setLoadingDoc(false);
    }
  };

  // ================= FILE HANDLER =================
  const handleFile = async (target, f, customDocName = "") => {
    if (!f) return;

    if (!allowed.includes(f.type)) {
      setError("Only PDF, DOCX, PNG, JPG allowed.");
      return;
    }

    if (f.size > maxSize) {
      setError("File must be ≤ 2MB.");
      return;
    }

    const documentName = customDocName;

    const success = await uploadSingleDocument(f, documentName);

    if (!success) return;

    // UI update
    if (target === "left") {
      setUploadedDocs((prev) => ({
        ...prev,
        [documentName]: f,
      }));
    } else {
      setCustomDocs((prev) => [
        ...prev,
        { docName: documentName, file: f },
      ]);
      setDocName("");
    }
  };

  // ================= DRAG/DROP =================
  const onDragOver = (e, docName) => {
    e.preventDefault();
    dropRefs.current[docName]?.classList.add("ring-2", "ring-blue-500");
  };

  const onDragLeave = (docName) => {
    dropRefs.current[docName]?.classList.remove("ring-2", "ring-blue-500");
  };

  const handleRightDragOver = (e) => {
    e.preventDefault();
    rightDropRef.current?.classList.add("ring-2", "ring-blue-500");
  };

  const handleRightDragLeave = () => {
    rightDropRef.current?.classList.remove("ring-2", "ring-blue-500");
  };

  const handleRightDrop = (e) => {
    e.preventDefault();
    rightDropRef.current?.classList.remove("ring-2", "ring-blue-500");
  };

  // ================= SUBMIT =================
  const REQUIRED_DOC_COUNT = 1;

  const handleSubmit = () => {
    const totalUploaded =
      Object.keys(uploadedDocs).length + customDocs.length;

    if (totalUploaded < REQUIRED_DOC_COUNT) {
      setError(`At least ${REQUIRED_DOC_COUNT} document required.`);
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <section
      className={`rounded-xl shadow-sm border p-6 transition-colors duration-300 ${
        darkMode
          ? "bg-[#191F36] text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`rounded-full w-9 h-9 flex items-center justify-center font-semibold ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          2
        </div>
        <span className="text-3xl font-semibold">Manager Documents</span>
      </div>

      {loadingDoc && (
        <p className="text-sm text-blue-500 mb-2">Uploading document...</p>
      )}

      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

    

      {/* YOUR FULL UI REMAINS SAME BELOW */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ---------- LEFT SIDE (Predefined Docs) ---------- */}
        <div className="flex flex-col gap-3">
          {documents.map((d) => (
            <div
              key={d.id}
              className={`flex flex-col border rounded-lg px-4 py-3 ${
                darkMode ? "bg-[#1e2747] border-gray-600" : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-md border ${
                      darkMode ? "bg-[#191F36] border-gray-600" : "bg-white border-gray-200"
                    }`}
                  >
                    <FiPaperclip className={darkMode ? "text-gray-300" : "text-gray-600"} />
                  </span>
                  <span className="font-medium">{d.name}</span>
                </div>

                {/* Upload button */}
                <div
                  ref={(el) => (dropRefs.current[d.name] = el)}
                  onDrop={(e) => onDrop(e, d.name)}
                  onDragOver={(e) => onDragOver(e, d.name)}
                  onDragLeave={() => onDragLeave(d.name)}
                  className={`inline-flex items-center gap-2 text-sm border rounded-md px-3 py-1.5 cursor-pointer ${
                    darkMode ? "bg-[#191F36] border-gray-600 hover:bg-gray-700" : "bg-white border-gray-200 hover:bg-gray-100"
                  }`}
                  onClick={() =>
                    document.getElementById(`fileInput-${d.name}`).click()
                  }
                >
                  Add <FiPlus />
                  <input
                    id={`fileInput-${d.name}`}
                    type="file"
                    accept=".pdf,.docx,.png,.jpg,.jpeg"
                    className="hidden"
                    onChange={(e) =>
                      handleFile("left", e.target.files?.[0], d.name)
                    }
                  />
                </div>
              </div>


              {/* Uploaded file name */}
              {uploadedDocs[d.name] && (
  <p className={`text-sm mt-2 pl-10 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
    📄 {uploadedDocs[d.name].name}
  </p>
)}

            </div>
          ))}

          {/* Uploaded custom docs list */}
          <ul>
            {customDocs.map((file, idx) => (
              <li
                key={idx}
                className={`text-md font-medium items-center gap-2 text-sm border rounded-md px-4 py-1.5 cursor-pointer mb-3 ${
                  darkMode ? "bg-[#1e2747] border-gray-600 hover:bg-gray-700 text-gray-200" : "bg-white border-gray-200 hover:bg-gray-100 text-gray-800"
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-md border mr-3 ${
                    darkMode ? "bg-[#191F36] border-gray-600" : "bg-white border-gray-200"
                  }`}
                >
                  <FiPaperclip className={darkMode ? "text-gray-300" : "text-gray-600"} />
                </span>
                {file.docName} → {file.fileName}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- RIGHT SIDE (Custom Docs) ---------- */}
        <div
          className={`border rounded-xl p-4 ${
            darkMode ? "bg-[#1e2747] border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div className="relative">
            <label
              className={`absolute -top-0 left-4 px-1 font-bold text-sm ${
                darkMode ? "bg-[#1e2747] text-teal-400" : "bg-white text-[#1D7464]"
              }`}
            >
              Document Name
            </label>
            <div className="flex items-center rounded-md p-2">
              <input
                type="text"
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
                placeholder="Enter document name"
                className={`w-full border rounded-lg px-3 py-2 mb-4 ${
                  darkMode
                    ? "bg-[#191F36] border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-200 text-black placeholder-gray-500"
                }`}
              />
            </div>
          </div>

          <label
            className={`block text-md font-bold mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Upload Document
          </label>
          <div
            ref={rightDropRef}
            onDrop={handleRightDrop}
            onDragOver={handleRightDragOver}
            onDragLeave={handleRightDragLeave}
            className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
              darkMode ? "bg-[#191F36] border-gray-600" : "bg-gray-50 border-gray-300"
            }`}
            onClick={() => document.getElementById("rightFileInput").click()}
          >
            <input
              id="rightFileInput"
              type="file"
              accept=".pdf,.docx,.png,.jpg,.jpeg"
              className="hidden"
              onChange={(e) => handleFile("right", e.target.files?.[0], docName)}
            />
            <div className="flex flex-col items-center gap-2">
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
                  darkMode ? "bg-[#1e2747] border-gray-600" : "bg-white border-gray-200"
                }`}
              >
                <FiPlus className={darkMode ? "text-gray-300" : "text-black"} />
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Drag & drop or click here
              </p>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-400"}`}>
                Supported: PDF, DOCX, PNG, JPG
              </p>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-400"}`}>
                Max Size: 2MB
              </p>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>

      
      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={prevStep}
          type="button"
          className={`px-4 py-2 rounded ${
            darkMode ? "bg-gray-600 text-white" : "bg-gray-400 text-white"
          }`}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          type="button"
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Save & Continue
        </button>
      </div>
    </section>
  );
}
