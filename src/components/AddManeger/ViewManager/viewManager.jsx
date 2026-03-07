import React from "react";
import { Link } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import ManagerDocuments from "./ManagerDoc";
import BankDetails from "./BankDetails";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useTheme } from "../../../context/ThemeContext"; // ✅ Import your context

export default function ViewManager() {
  const { darkMode } = useTheme(); // ✅ Use your theme

  // Dummy data
  const user = {
    name: "Rahul Kumar",
    employeeId: "EMP123",
    branch: "Mumbai",
    designation: "Manager",
    email: "abc123@gmail.com",
  };

  const documents = [
    { id: 1, name: "PAN_Card.pdf", status: "Uploaded" },
    { id: 2, name: "Aadhar_Image.png", status: "Uploaded" },
    { id: 3, name: "Certificate.pdf", status: "Uploaded" },
    { id: 4, name: "Resume_Image.png", status: "Uploaded" },
  ];

  const bank = {
    accountHolder: "Rahul Sharma",
    accountNumber: "123456789012",
    ifsc: "SBI0001234",
    upi: "rahul@upi",
    accountType: "Saving Account",
    netBanking: "SBI",
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Manager Details Report", 14, 15);

    doc.setFontSize(13);
    doc.text("Personal Details", 14, 30);
    autoTable(doc, {
      startY: 35,
      theme: "grid",
      head: [["Field", "Value"]],
      body: [
        ["Employee Name", user.name],
        ["Employee ID", user.employeeId],
        ["Branch Location", user.branch],
        ["Designation", user.designation],
        ["Email ID", user.email],
      ],
    });

    let finalY = doc.lastAutoTable.finalY + 10;
    doc.text("Manager Documents", 14, finalY);
    autoTable(doc, {
      startY: finalY + 5,
      theme: "grid",
      head: [["ID", "Document Name", "Status"]],
      body: documents.map((d) => [d.id, d.name, d.status]),
    });

    finalY = doc.lastAutoTable.finalY + 10;
    doc.text("Bank Details", 14, finalY);
    autoTable(doc, {
      startY: finalY + 5,
      theme: "grid",
      head: [["Field", "Value"]],
      body: [
        ["Account Holder", bank.accountHolder],
        ["Account Number", bank.accountNumber],
        ["IFSC Code", bank.ifsc],
        ["UPI ID", bank.upi],
        ["Account Type", bank.accountType],
        ["Net Banking", bank.netBanking],
      ],
    });

    doc.save("Manager_Details.pdf");
  };

  return (
    <div className={`p-6 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
      {/* Dark/Light Toggle */}
      

      {/* Back to Manager List */}
      <Link
        to="/add-manager"
        className={`${darkMode ? "text-gray-200" : "text-black"} hover:underline inline-block mb-4`}
      >
        ← Back to Manager List
      </Link>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="mb-6 bg-blue-500 hover:bg-blue-700 text-white ml-140 px-6 py-2 rounded-md"
      >
        📥 Download All Details (PDF)
      </button>

      {/* Components */}
      <PersonalDetails  />
      <ManagerDocuments  />
      <BankDetails />
    </div>
  );
}
