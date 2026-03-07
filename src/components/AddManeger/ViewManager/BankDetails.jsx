import React, { useState } from "react";
import { FaUser, FaUniversity, FaKey, FaQrcode } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContext";

export default function BankDetails() {
  // Dummy data jo pehle se fill hoga (Manager ka data)
  const {darkMode} = useTheme();
  const initialData = {
    accountHolder: "Rahul Sharma",
    accountNumber: "123456789012",
    ifsc: "SBI0001234",
    upi: "rahul@upi",
    accountType: "Saving Account",
    netBanking: "SBI",
    qrCode: "", // ✅ Abhi empty, taki QR code icon dikhe
  };

  const isAdmin = true;

  const [formData, setFormData] = useState(initialData);
  const [bank, setBank] = useState(initialData.netBanking);
  const [qrCode, setQrCode] = useState(initialData.qrCode); // ✅ QR Code state

  const banks = [
    { name: "SBI", icon: "/icons/sbi.png" },
    { name: "HDFC", icon: "/icons/hdfc.png" },
    { name: "ICICI", icon: "/icons/icici.png" },
    { name: "Axis", icon: "/icons/axis.png" },
    { name: "PNB", icon: "/icons/pnb.png" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle QR Upload
  const handleQrUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const qrUrl = URL.createObjectURL(file);
      setQrCode(qrUrl);
    }
  };

  const handleSubmit = () => {
    console.log("Updated Bank Details:", { ...formData, netBanking: bank, qrCode });
    alert("Bank details updated! (Check console)");
  };

  return (
    <div
      className={`shadow-md rounded-lg p-6 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          <span className="text-3xl">③</span> Bank Details
        </h2>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg ml-8`}>
          Fill in bank details for Salary credit
        </p>
      </div>

      {/* Flex container with divider */}
      <div className="flex">
        {/* Left: QR Code Section */}
        <div className="w-1/3 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="font-bold mb-2 text-2xl">Bank QR Code</h3>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-lg mb-4`}>
            Supports PNG, JPG
          </p>

          {/* If QR code already uploaded */}
          {qrCode ? (
            <div className="flex flex-col items-center">
              <img
                src={qrCode}
                alt="Bank QR Code"
                className={`w-40 h-40 object-contain border rounded-md mb-4 ${
                  darkMode ? "border-gray-600" : ""
                }`}
              />
              {isAdmin && (
                <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                  Upload New QR Code
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleQrUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          ) : (
            // If no QR uploaded yet
            <div className="flex flex-col items-center">
              <FaQrcode
                size={80}
                className={`${darkMode ? "text-gray-400" : "text-gray-400"} mb-4`}
              />
              {isAdmin && (
                <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                  Upload QR Code
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleQrUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          )}
        </div>

        {/* Divider Line */}
        <div className={`w-px mx-6 ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>

        {/* Right: Bank Form */}
        <div className="w-2/3 space-y-6">
          {/* Account Holder Name */}
          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm ${
                darkMode ? "text-gray-300 bg-gray-800" : "text-gray-500 bg-white"
              }`}
            >
              Account Holder Name
            </label>
            <div
              className={`flex items-center border rounded-md p-2 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <input
                type="text"
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleChange}
                disabled={!isAdmin}
                className="w-full outline-none bg-transparent"
              />
              <FaUser className={`${darkMode ? "text-gray-400" : "text-gray-400"} ml-2`} />
            </div>
          </div>

          {/* Account Number */}
          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm ${
                darkMode ? "text-gray-300 bg-gray-800" : "text-gray-500 bg-white"
              }`}
            >
              Account Number
            </label>
            <div
              className={`flex items-center border rounded-md p-2 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                disabled={!isAdmin}
                className="w-full outline-none bg-transparent"
              />
              <FaUniversity className={`${darkMode ? "text-gray-400" : "text-gray-400"} ml-2`} />
            </div>
          </div>

          {/* IFSC Code */}
          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm ${
                darkMode ? "text-gray-300 bg-gray-800" : "text-gray-500 bg-white"
              }`}
            >
              IFSC Code
            </label>
            <div
              className={`flex items-center border rounded-md p-2 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <input
                type="text"
                name="ifsc"
                value={formData.ifsc}
                onChange={handleChange}
                disabled={!isAdmin}
                className="w-full outline-none bg-transparent"
              />
              <FaKey className={`${darkMode ? "text-gray-400" : "text-gray-400"} ml-2`} />
            </div>
          </div>

          {/* UPI ID */}
          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm ${
                darkMode ? "text-gray-300 bg-gray-800" : "text-gray-500 bg-white"
              }`}
            >
              UPI ID (Optional)
            </label>
            <div
              className={`flex items-center border rounded-md p-2 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <input
                type="text"
                name="upi"
                value={formData.upi}
                onChange={handleChange}
                disabled={!isAdmin}
                className="w-full outline-none bg-transparent"
              />
              <MdOutlinePayment className={`${darkMode ? "text-gray-400" : "text-gray-400"} ml-2`} />
            </div>
          </div>

          {/* Account Type */}
          <div className="relative mt-4">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm ${
                darkMode ? "text-gray-300 bg-gray-800" : "text-gray-500 bg-white"
              }`}
            >
              Account Type
            </label>
            <div
              className={`flex items-center border rounded-md p-2 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                disabled={!isAdmin}
                className="w-full outline-none bg-transparent"
              >
                <option>Saving Account</option>
                <option>Current Account</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center mb-8 mt-8 mr-10">
        <div className={`flex-grow border-t ${darkMode ? "border-gray-600" : "border-gray-300"}`}></div>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-left mx-4 text-sm`}>
          Option
        </p>
        <div className={`flex-grow border-t w-65 ${darkMode ? "border-gray-600" : "border-gray-300"}`}></div>
      </div>

      {/* Net Banking */}
      <div className="relative mt-4">
        <label
          className={`absolute -top-2 left-3 px-1 text-sm ${
            darkMode ? "text-gray-300 bg-gray-800" : "text-gray-500 bg-white"
          }`}
        >
          Net Banking
        </label>
        <div
          className={`flex items-center border rounded-md p-2 ${
            darkMode ? "border-gray-600" : "border-gray-300"
          }`}
        >
          <div
            onClick={() => isAdmin && setBank(bank ? "" : "open")}
            className={`w-full ${isAdmin ? "cursor-pointer" : ""}`}
          >
            {bank && bank !== "open" ? bank : "– Select Bank –"}
          </div>
        </div>

        {isAdmin && bank === "open" && (
          <div
            className={`absolute mt-1 w-full rounded-md shadow-lg z-10 ${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            }`}
          >
            <div className="grid grid-cols-3 gap-2 p-2">
              {banks.map((b, i) => (
                <div
                  key={i}
                  onClick={() => setBank(b.name)}
                  className={`flex flex-col items-center p-2 border rounded-md hover:bg-gray-100 cursor-pointer ${
                    darkMode ? "border-gray-600 hover:bg-gray-600" : ""
                  }`}
                >
                  <img src={b.icon} alt={b.name} className="w-8 h-8 mb-1" />
                  <span className="text-sm">{b.name}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => alert("Show all banks here...")}
              className="bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] text-white px-4 py-2 rounded-md w-full mt-2"
            >
              View All Banks
            </button>
          </div>
        )}
      </div>

      {/* Submit */}
      {isAdmin && (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-40 mt-10 ml-90"
        >
          Save Details
        </button>
      )}
    </div>
  );
}
