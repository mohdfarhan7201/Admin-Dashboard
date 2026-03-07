// import React from "react";
// import { MdEmail, MdOutlineCall } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { RiLockPasswordLine } from "react-icons/ri";
// import Logo from "../../assets/logo.svg";
// import bgimage from "../../assets/water-mark.jpg";
// import { FaGoogle, FaFacebookF, FaYahoo } from "react-icons/fa";
// import { GoShieldLock } from "react-icons/go";

// export default function Signup({ setIsSignup }) {
//   return (
//     <>
//       {/* Desktop & Tablet (md & lg) */}
//       <div className="hidden md:flex w-full flex-row bg-gradient-to-b from-white to-teal-800 ">
//         {/* Left Form Section */}
//         <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 sm:p-10  ">
//           <div className="bg-white rounded-xl p-8 sm:p-10 w-full max-w-md drop-shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

//             <form className="space-y-5">
//               {/* User Type */}
//               <div className="relative mt-4">
//                 <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                   Contect Number
//                 </label>
//                 <MdOutlineCall className="absolute top-3 right-3 text-gray-500 text-lg" />
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   placeholder="1234567890"
//                   className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//                 />
//               </div>

//               {/* Email */}
//               <div className="relative mt-4">
//                 <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                   Email
//                 </label>
//                 <MdEmail className="absolute top-3 right-3 text-gray-500 text-lg" />
//                 <input
//                   type="email"
//                   placeholder="abc123@gmail.com"
//                   className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//                 />
//               </div>

//               {/* Name */}
//               <div className="relative mt-4">
//                 <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                   Name
//                 </label>
//                 <FaUser className="absolute top-3 right-3 text-gray-500 text-lg" />
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//                 />
//               </div>

//               {/* Password */}
//               <div className="relative mt-4">
//                 <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                   Password
//                 </label>
//                 <RiLockPasswordLine className="absolute top-3 right-3 text-gray-500 text-lg" />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//                 />
//               </div>

//               {/* Sign Up Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 transition-colors text-white py-2 rounded-md font-semibold"
//               >
//                 Sign up
//               </button>
//             </form>

          

//             {/* Social Icons */}

//             <div className="items-start   mt-8 shadow">
//               <div className="flex text-2xl text-blue-600 gap-2"><GoShieldLock className=" text-3xl mb-1" />Secure Access</div>
//               <div>

//                 <p className="text-start text-blue-600 mx-4 text-mb">This Portal uses enterprise-grade security protocols to protect for admin access</p>
//               </div>

//             </div>



//           </div>
//         </div>

//         {/* Right Side Visual */}
//         <div className="flex-1 hidden md:flex bg-white rounded-l-3xl relative flex-col justify-center items-center px-8 pt-16 pb-16 ">
//           <img
//             src={bgimage}
//             alt="water_mark"
//             className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           />
//           <div className="flex items-center space-x-2 mb-16 z-10 md:-ml-20 lg:mr-45">
//             <img src={Logo} alt="Logo" className="w-15 h-15 -mt-45 " />
//             <span className="text-gray-700 text-2xl font-semibold -mt-45 ">AATMAYANTRA</span>
//           </div>
//           <h1 className="text-5xl font-serif mb-6 text-center max-w-xs z-10">
//             Hello <span className="text-teal-600 italic">Youth!</span>
//           </h1>
//           <p className="text-gray-600 mb-8 max-w-xs text-center z-10">
//             Enter your personal details and start journey with us
//           </p>
//           <button
//             onClick={() => setIsSignup(false)}
//             className="px-16 py-3 bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 rounded-md text-white font-medium transition-colors z-10"
//           >
//             Login
//           </button>
//         </div>
//       </div>

//       {/* Mobile (sm) layout */}
//       <div className="flex flex-col md:hidden w-full bg-white">
//         {/* Mobile Top Gradient */}
//         <div className="bg-gradient-to-b from-[rgba(29,116,100,1)] to-[rgba(55,218,188,1)] text-white text-center py-8 rounded-b-3xl">
//           <h1 className="text-2xl font-bold">Hello Welcome!</h1>
//           <p className="text-sm mt-1">Don't have an account</p>
//           <button
//             onClick={() => setIsSignup(false)}
//             className="mt-3 border border-white px-6 py-1 rounded-full text-sm hover:bg-white hover:text-teal-600 transition-colors"
//           >
//             Register
//           </button>
//         </div>

//         {/* Mobile Form */}
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>


//           <form className="space-y-5">
//             {/* User Type */}
//             <div className="relative mt-4">
//               <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                 User Type
//               </label>
//               <select
//                 className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-700"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   – Select User Type –
//                 </option>
//                 <option>User</option>
//                 <option>Trainer</option>
//                 <option>Yoga doctor (Psychiatrists)</option>
//                 <option>Physiotherapist</option>
//               </select>
//             </div>

//             {/* Email */}
//             <div className="relative mt-4">
//               <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                 Email
//               </label>
//               <MdEmail className="absolute top-3 right-3 text-gray-500 text-lg" />
//               <input
//                 type="email"
//                 placeholder="abc123@gmail.com"
//                 className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//               />
//             </div>

//             {/* Name */}
//             <div className="relative mt-4">
//               <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                 Name
//               </label>
//               <FaUser className="absolute top-3 right-3 text-gray-500 text-lg" />
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative mt-4">
//               <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
//                 Password
//               </label>
//               <RiLockPasswordLine className="absolute top-3 right-3 text-gray-500 text-lg" />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
//               />
//             </div>

//             {/* Sign Up Button */}
//             <button
//               type="submit"
//               className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 transition-colors text-white py-2 rounded-md font-semibold"
//             >
//               Sign up
//             </button>
//           </form>


//           <p className="text-center mt-3 text-sm text-gray-600">
//             or use your email for registration
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center space-x-3 mt-2 text-gray-600">
//             <FaGoogle className="hover:text-blue-500 cursor-pointer" />
//             <FaFacebookF className="hover:text-blue-900 cursor-pointer" />
//             <FaYahoo className="hover:text-purple-700 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

















import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdOutlineCall } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoShieldLock } from "react-icons/go";
import Logo from "../../assets/logo.svg";
import bgimage from "../../assets/water-mark.jpg";
import OTPModal from "./OTPModal";

export default function Signup({ setIsSignup }) {
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    contact: "",
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Signup function
  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      !formData.contact.trim() ||
      !formData.email.trim() ||
      !formData.name.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      alert("Please fill all fields before signing up.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please re-enter correctly.");
      return;
    }

    try {
      setLoading(true);

      const form = new FormData();
      form.append("contact_number", formData.contact);
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("confirm_password", formData.confirmPassword);

      const res = await axios.post(
        "https://atmayantra-14.onrender.com/api/admin-auth/admin-signup/",
        
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Signup API Response:", res.data);

      // ✅ OTP check conditions
      if (
        res.status === 200 ||
        res.status === 201 ||
        res.data.success === true ||
        res.data.otpSent === true ||
        (res.data.message &&
          res.data.message.toLowerCase().includes("otp"))
      ) {
        alert(res.data?.message || "OTP sent successfully.");
        setShowOTP(true);
      } else {
        alert(res.data?.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // OTP verify hone ke baad navigate
  const handleOTPSuccess = () => {
    setShowOTP(false);
    setIsSignup(false);
  };

  return (
    <>
      {/* Signup Form */}
      <div className="hidden md:flex w-full flex-row bg-gradient-to-b from-white to-teal-800">
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <div className="bg-white rounded-xl p-8 sm:p-10 w-full max-w-md drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Create Account
            </h2>

            <form className="space-y-5" onSubmit={handleSignup}>
              {/* Contact Number */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Contact Number
                </label>
                <MdOutlineCall className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  name="contact"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="1234567890"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Name */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Name
                </label>
                <FaUser className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Email */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Email
                </label>
                <MdEmail className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  name="email"
                  type="email"
                  placeholder="abc123@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Password */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Password
                </label>
                <RiLockPasswordLine className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Confirm Password
                </label>
                <RiLockPasswordLine className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 transition-colors text-white py-2 rounded-md font-semibold"
              >
                {loading ? "Please wait..." : "Sign up"}
              </button>
            </form>

            {/* Security Info */}
            <div className="items-start mt-8 shadow">
              <div className="flex text-2xl text-blue-600 gap-2">
                <GoShieldLock className="text-3xl mb-1" /> Secure Access
              </div>
              <p className="text-start text-blue-600 mx-4 text-mb">
                This Portal uses enterprise-grade security protocols to protect admin access.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 hidden md:flex bg-white rounded-l-3xl relative flex-col justify-center items-center px-8 pt-16 pb-16">
          <img
            src={bgimage}
            alt="water_mark"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="flex items-center space-x-2 mb-16 z-10 md:-ml-20 lg:mr-45">
            <img src={Logo} alt="Logo" className="w-15 h-15 -mt-45" />
            <span className="text-gray-700 text-2xl font-semibold -mt-45">
              AATMAYANTRA
            </span>
          </div>
          <h1 className="text-5xl font-serif mb-6 text-center max-w-xs z-10">
            Hello <span className="text-teal-600 italic">Youth!</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-xs text-center z-10">
            Enter your personal details and start your journey with us
          </p>
          <button
            onClick={() => setIsSignup(false)}
            className="px-16 py-3 bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 rounded-md text-white font-medium transition-colors z-10"
          >
            Login
          </button>
        </div>
      </div>

      {/* ✅ OTP Modal */}
      {showOTP && (
        <OTPModal
          onClose={() => setShowOTP(false)}
          onSuccess={handleOTPSuccess} // OTP verified → redirect to login
          phone={formData.contact}
          email={formData.email}
          formData={formData}
        />
      )}
    </>
  );
}
