// import React, { useState } from "react";
// import { FiUser, FiHome, FiEdit, FiEye, FiUnlock } from "react-icons/fi";
// import { FaUniversity } from "react-icons/fa";
// import { useTheme } from "../../../context/ThemeContext"; // adjust path if needed

// export default function BankDetailsSection({ prevStep }) {
//   const { darkMode } = useTheme();

//   const [form, setForm] = useState({
//     holder: "",
//     bank: "",
//     branch: "",
//     accNumber: "",
//     confAccNumber: "",
//     accountType: "saving",
//     upi: "",
//     ifsc: "",
//     optionBank: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submit", form);
//     alert("Form submitted (check console)");
//   };

//   return (
//     <div
//       className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg ${
//         darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* Header */}
//       <div className="flex items-start gap-4">
//         <div
//           className={`rounded-full w-9 h-9 flex items-center justify-center font-semibold ${
//             darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
//           }`}
//         >
//           3
//         </div>
//         <div>
//           <h3 className="text-2xl md:text-3xl font-semibold">Bank Details</h3>
//           <p
//             className={`text-base md:text-lg ${
//               darkMode ? "text-gray-400" : "text-gray-500"
//             }`}
//           >
//             Enter the manager's bank information
//           </p>
//         </div>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="mt-6 space-y-6">
//         {/* Account Holder Name */}
//         <div className="relative">
//           <label
//             className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//               darkMode
//                 ? "bg-[#191F36] text-teal-400"
//                 : "bg-white text-[#1D7464]"
//             }`}
//           >
//             Account Holder Name
//           </label>
//           <FiUser
//             className={`absolute left-3 top-1/2 -translate-y-1/2 ${
//               darkMode ? "text-gray-300" : "text-gray-400"
//             }`}
//           />
//           <input
//             name="holder"
//             value={form.holder}
//             onChange={handleChange}
//             placeholder="Enter Account Holder Name"
//             className={`w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
//               darkMode
//                 ? "bg-[#191F36] border-gray-600 text-white"
//                 : "bg-white border-gray-200 text-black"
//             }`}
//           />
//         </div>

//         {/* Two-column: Bank Name / Branch Name */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Bank Name */}
//           <div className="relative">
//             <label
//               className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//                 darkMode
//                   ? "bg-[#191F36] text-teal-400"
//                   : "bg-white text-[#1D7464]"
//               }`}
//             >
//               Bank Name
//             </label>
//             <FaUniversity
//               className={`absolute left-3 top-1/2 -translate-y-1/2 ${
//                 darkMode ? "text-gray-300" : "text-gray-400"
//               }`}
//             />
//             <input
//               name="bank"
//               value={form.bank}
//               onChange={handleChange}
//               placeholder="Enter Bank Name"
//               className={`w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
//                 darkMode
//                   ? "bg-[#191F36] border-gray-600 text-white"
//                   : "bg-white border-gray-200 text-black"
//               }`}
//             />
//           </div>

//           {/* Branch Name */}
//           <div className="relative">
//             <label
//               className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//                 darkMode
//                   ? "bg-[#191F36] text-teal-400"
//                   : "bg-white text-[#1D7464]"
//               }`}
//             >
//               Branch Name
//             </label>
//             <FiHome
//               className={`absolute left-3 top-1/2 -translate-y-1/2 ${
//                 darkMode ? "text-gray-300" : "text-gray-400"
//               }`}
//             />
//             <input
//               name="branch"
//               value={form.branch}
//               onChange={handleChange}
//               placeholder="Enter Branch Name"
//               className={`w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
//                 darkMode
//                   ? "bg-[#191F36] border-gray-600 text-white"
//                   : "bg-white border-gray-200 text-black"
//               }`}
//             />
//           </div>
//         </div>

//         {/* Two-column: Confirm Account Number / Account Number */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Confirm Account Number */}
//           <div className="relative">
//             <label
//               className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//                 darkMode
//                   ? "bg-[#191F36] text-teal-400"
//                   : "bg-white text-[#1D7464]"
//               }`}
//             >
//               Confirm Account Number
//             </label>
//             <FiEdit
//               className={`absolute left-3 top-1/2 -translate-y-1/2 ${
//                 darkMode ? "text-gray-300" : "text-gray-400"
//               }`}
//             />
//             <input
//               name="confAccNumber"
//               value={form.confAccNumber}
//               onChange={handleChange}
//               placeholder="Enter Account Number"
//               className={`w-full pl-10 pr-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
//                 darkMode
//                   ? "bg-[#191F36] border-gray-600 text-white"
//                   : "bg-white border-gray-200 text-black"
//               }`}
//             />
//             <FiEye
//               className={`absolute right-3 top-1/2 -translate-y-1/2 ${
//                 darkMode ? "text-gray-300" : "text-gray-400"
//               }`}
//             />
//           </div>

//           {/* Account Number */}
//           <div className="relative">
//             <label
//               className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//                 darkMode
//                   ? "bg-[#191F36] text-teal-400"
//                   : "bg-white text-[#1D7464]"
//               }`}
//             >
//               Account Number
//             </label>
//             <FiUnlock
//               className={`absolute left-3 top-1/2 -translate-y-1/2 ${
//                 darkMode ? "text-gray-300" : "text-gray-400"
//               }`}
//             />
//             <input
//               name="accNumber"
//               value={form.accNumber}
//               onChange={handleChange}
//               placeholder="Enter Account Number"
//               className={`w-full pl-10 pr-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
//                 darkMode
//                   ? "bg-[#191F36] border-gray-600 text-white"
//                   : "bg-white border-gray-200 text-black"
//               }`}
//             />
//             <FiEye
//               className={`absolute right-3 top-1/2 -translate-y-1/2 ${
//                 darkMode ? "text-gray-300" : "text-gray-400"
//               }`}
//             />
//           </div>
//         </div>

//         {/* Two-column: Account Type + UPI */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Account Type */}
//           <div
//             className={`border rounded-lg p-3 relative ${
//               darkMode ? "bg-[#191F36] border-gray-600" : "bg-white border-gray-200"
//             }`}
//           >
//             <label
//               className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//                 darkMode
//                   ? "bg-[#191F36] text-teal-400"
//                   : "bg-white text-[#1D7464]"
//               }`}
//             >
//               Account Type
//             </label>
//             <div className="flex flex-col gap-3 mt-5">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="accountType"
//                   value="saving"
//                   checked={form.accountType === "saving"}
//                   onChange={handleChange}
//                   className="accent-teal-500"
//                 />
//                 <span className="text-sm">Saving Account</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="accountType"
//                   value="current"
//                   checked={form.accountType === "current"}
//                   onChange={handleChange}
//                   className="accent-teal-500"
//                 />
//                 <span className="text-sm">Current Account</span>
//               </label>
//             </div>
//           </div>

//           {/* UPI */}
//           <div className="relative">
//             <label
//               className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//                 darkMode
//                   ? "bg-[#191F36] text-teal-400"
//                   : "bg-white text-[#1D7464]"
//               }`}
//             >
//               UPI ID (Optional)
//             </label>
//             <input
//               name="upi"
//               value={form.upi}
//               onChange={handleChange}
//               placeholder="Enter UPI ID"
//               className={`w-full pl-4 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
//                 darkMode
//                   ? "bg-[#191F36] border-gray-600 text-white"
//                   : "bg-white border-gray-200 text-black"
//               }`}
//             />
//           </div>
//         </div>

//         {/* IFSC Code */}
//         <div className="relative lg:ml-103 lg:-mt-12">
//           <label
//             className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//               darkMode
//                 ? "bg-[#191F36] text-teal-400"
//                 : "bg-white text-[#1D7464]"
//             }`}
//           >
//             IFSC Code
//           </label>
//           <input
//             name="ifsc"
//             value={form.ifsc}
//             onChange={handleChange}
//             placeholder="Enter IFSC Code"
//             className={`w-full md:w-1/2 lg:w-97 pl-4 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200  ${
//               darkMode
//                 ? "bg-[#191F36] border-gray-600 text-white"
//                 : "bg-white border-gray-200 text-black"
//             }`}
//           />
//         </div>

//         {/* Divider */}
//         <div className="mt-4 flex items-center gap-4">
//           <div
//             className={`flex-1 h-px ${
//               darkMode ? "bg-gray-600" : "bg-gray-200"
//             }`}
//           />
//           <div className={darkMode ? "text-gray-400" : "text-gray-500"}>
//             Option
//           </div>
//           <div
//             className={`flex-1 h-px ${
//               darkMode ? "bg-gray-600" : "bg-gray-200"
//             }`}
//           />
//         </div>

//         {/* Option select */}
//         <div className="relative">
//           <label
//             className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
//               darkMode
//                 ? "bg-[#191F36] text-teal-400"
//                 : "bg-white text-[#1D7464]"
//             }`}
//           >
//             Net Banking
//           </label>
//           <select
//             name="optionBank"
//             value={form.optionBank}
//             onChange={handleChange}
//             className={`w-full rounded-lg px-4 py-3 appearance-none pr-10 shadow-sm border ${
//               darkMode
//                 ? "bg-[#191F36] border-gray-600 text-white"
//                 : "bg-white border-gray-200 text-black"
//             }`}
//           >
//             <option value="">---Select your bank---</option>
//             <option value="sbi">State Bank of India</option>
//             <option value="hdfc">HDFC Bank</option>
//             <option value="icici">ICICI Bank</option>
//           </select>
//         </div>

//         {/* Buttons */}
//         <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
//           <button
//             type="button"
//             onClick={prevStep}
//             className="bg-gray-400 text-white px-6 py-2 rounded shadow hover:opacity-90"
//           >
//             Back
//           </button>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-8 py-2 rounded-full shadow hover:opacity-95"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FiUser, FiHome, FiEdit, FiEye, FiUnlock } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";
import axios from "axios";

export default function BankDetails({ prevStep, tempId }) {
  const { darkMode } = useTheme();

  const [form, setForm] = useState({
    holder: "",
    bank: "",
    branch: "",
    accNumber: "",
    confAccNumber: "",
    accountType: "saving",
    upi: "",
    ifsc: "",
    optionBank: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("access_token") ||
        localStorage.getItem("accessToken");

      if (!token) {
        alert("Authorization token missing.");
        return;
      }

      if (!tempId) {
        alert("Manager ID missing from previous step.");
        return;
      }

      // if (form.accNumber !== form.confAccNumber) {
      //   alert("Account numbers do not match.");
      //   return;
      // }

      const formData = new FormData();
      formData.append("account_holder_name", form.holder);
      formData.append("bank_name", form.bank);
      formData.append("branch_name", form.branch);
      formData.append("account_number", form.accNumber);
      formData.append(
        "account_type",
        form.accountType === "saving" ? "SAVINGS" : "CURRENT"
      );
      formData.append("upi_id", form.upi);
      formData.append("ifsc_code", form.ifsc);

      const response = await axios.post(
        `https://atmayantra-14.onrender.com/api/admin-auth/manager/step3/${tempId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Step 3 Success:", response.data);
      alert("Bank details submitted successfully!");

    } catch (error) {
      console.error("Step 3 Error:", error.response?.data || error.message);

      alert(
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Something went wrong!"
      );
    }
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      {/* UI SAME AS YOUR CODE — NO CHANGES BELOW */}

      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className={`rounded-full w-9 h-9 flex items-center justify-center font-semibold ${
            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
          }`}
        >
          3
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Bank Details</h3>
          <p
            className={`text-base md:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Enter the manager's bank information
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Account Holder Name */}
        <div className="relative">
          <label
            className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
              darkMode
                ? "bg-[#191F36] text-teal-400"
                : "bg-white text-[#1D7464]"
            }`}
          >
            Account Holder Name
          </label>
          <FiUser
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
          />
          <input
            name="holder"
            value={form.holder}
            onChange={handleChange}
            placeholder="Enter Account Holder Name"
            className={`w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
              darkMode
                ? "bg-[#191F36] border-gray-600 text-white"
                : "bg-white border-gray-200 text-black"
            }`}
          />
        </div>

        {/* Two-column: Bank Name / Branch Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
                darkMode
                  ? "bg-[#191F36] text-teal-400"
                  : "bg-white text-[#1D7464]"
              }`}
            >
              Bank Name
            </label>
            <FaUniversity
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-gray-300" : "text-gray-400"
              }`}
            />
            <input
              name="bank"
              value={form.bank}
              onChange={handleChange}
              placeholder="Enter Bank Name"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
                darkMode
                  ? "bg-[#191F36] border-gray-600 text-white"
                  : "bg-white border-gray-200 text-black"
              }`}
            />
          </div>

          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
                darkMode
                  ? "bg-[#191F36] text-teal-400"
                  : "bg-white text-[#1D7464]"
              }`}
            >
              Branch Name
            </label>
            <FiHome
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-gray-300" : "text-gray-400"
              }`}
            />
            <input
              name="branch"
              value={form.branch}
              onChange={handleChange}
              placeholder="Enter Branch Name"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
                darkMode
                  ? "bg-[#191F36] border-gray-600 text-white"
                  : "bg-white border-gray-200 text-black"
              }`}
            />
          </div>
        </div>

        {/* Two-column: Confirm Account Number / Account Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
                darkMode
                  ? "bg-[#191F36] text-teal-400"
                  : "bg-white text-[#1D7464]"
              }`}
            >
              Confirm Account Number
            </label>
            <FiEdit
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-gray-300" : "text-gray-400"
              }`}
            />
            <input
              name="confAccNumber"
              value={form.confAccNumber}
              onChange={handleChange}
              placeholder="Enter Account Number"
              className={`w-full pl-10 pr-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
                darkMode
                  ? "bg-[#191F36] border-gray-600 text-white"
                  : "bg-white border-gray-200 text-black"
              }`}
            />
            <FiEye
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-gray-300" : "text-gray-400"
              }`}
            />
          </div>

          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
                darkMode
                  ? "bg-[#191F36] text-teal-400"
                  : "bg-white text-[#1D7464]"
              }`}
            >
              Account Number
            </label>
            <FiUnlock
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-gray-300" : "text-gray-400"
              }`}
            />
            <input
              name="accNumber"
              value={form.accNumber}
              onChange={handleChange}
              placeholder="Enter Account Number"
              className={`w-full pl-10 pr-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
                darkMode
                  ? "bg-[#191F36] border-gray-600 text-white"
                  : "bg-white border-gray-200 text-black"
              }`}
            />
            <FiEye
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-gray-300" : "text-gray-400"
              }`}
            />
          </div>
        </div>

        {/* Two-column: Account Type + UPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`border rounded-lg p-3 relative ${
              darkMode
                ? "bg-[#191F36] border-gray-600"
                : "bg-white border-gray-200"
            }`}
          >
            <label
              className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
                darkMode
                  ? "bg-[#191F36] text-teal-400"
                  : "bg-white text-[#1D7464]"
              }`}
            >
              Account Type
            </label>
            <div className="flex flex-col gap-3 mt-5">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="accountType"
                  value="saving"
                  checked={form.accountType === "saving"}
                  onChange={handleChange}
                  className="accent-teal-500"
                />
                <span className="text-sm">Saving Account</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="accountType"
                  value="current"
                  checked={form.accountType === "current"}
                  onChange={handleChange}
                  className="accent-teal-500"
                />
                <span className="text-sm">Current Account</span>
              </label>
            </div>
          </div>

          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
                darkMode
                  ? "bg-[#191F36] text-teal-400"
                  : "bg-white text-[#1D7464]"
              }`}
            >
              UPI ID (Optional)
            </label>
            <input
              name="upi"
              value={form.upi}
              onChange={handleChange}
              placeholder="Enter UPI ID"
              className={`w-full pl-4 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
                darkMode
                  ? "bg-[#191F36] border-gray-600 text-white"
                  : "bg-white border-gray-200 text-black"
              }`}
            />
          </div>
        </div>

        {/* IFSC Code */}
        <div className="relative lg:ml-103 lg:-mt-12">
          <label
            className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
              darkMode
                ? "bg-[#191F36] text-teal-400"
                : "bg-white text-[#1D7464]"
            }`}
          >
            IFSC Code
          </label>
          <input
            name="ifsc"
            value={form.ifsc}
            onChange={handleChange}
            placeholder="Enter IFSC Code"
            className={`w-full md:w-1/2 lg:w-97 pl-4 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-200 ${
              darkMode
                ? "bg-[#191F36] border-gray-600 text-white"
                : "bg-white border-gray-200 text-black"
            }`}
          />
        </div>

        {/* Divider */}
        <div className="mt-4 flex items-center gap-4">
          <div
            className={`flex-1 h-px ${
              darkMode ? "bg-gray-600" : "bg-gray-200"
            }`}
          />
          <div className={darkMode ? "text-gray-400" : "text-gray-500"}>
            Option
          </div>
          <div
            className={`flex-1 h-px ${
              darkMode ? "bg-gray-600" : "bg-gray-200"
            }`}
          />
        </div>

        {/* Option select */}
        <div className="relative">
          <label
            className={`absolute -top-2 left-3 px-1 text-sm font-bold ${
              darkMode
                ? "bg-[#191F36] text-teal-400"
                : "bg-white text-[#1D7464]"
            }`}
          >
            Net Banking
          </label>
          <select
            name="optionBank"
            value={form.optionBank}
            onChange={handleChange}
            className={`w-full rounded-lg px-4 py-3 appearance-none pr-10 shadow-sm border ${
              darkMode
                ? "bg-[#191F36] border-gray-600 text-white"
                : "bg-white border-gray-200 text-black"
            }`}
          >
            <option value="">---Select your bank---</option>
            <option value="sbi">State Bank of India</option>
            <option value="hdfc">HDFC Bank</option>
            <option value="icici">ICICI Bank</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-400 text-white px-6 py-2 rounded shadow hover:opacity-90"
          >
            Back
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded-full shadow hover:opacity-95"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
