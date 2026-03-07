import React, { useState } from "react";
import axios from "axios";
import { MdOutlineCall } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoShieldLock } from "react-icons/go";
import Logo from "../../assets/logo.svg";
import bgimage from "../../assets/water-mark.jpg";
import { useNavigate } from "react-router-dom";
import OTPModal from "./Otplogin";
import ForgetPasswordModal from "./ForgotPasswordModal"; // ✅ New import

export default function Login({ setIsSignup }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    contact_number: "",
    password: "",
  });

  const [showOTP, setShowOTP] = useState(false);
  const [showForget, setShowForget] = useState(false); // ✅ New state
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("contact_number", formData.contact_number);
      form.append("password", formData.password);

      const res = await axios.post(
        "https://atmayantra-14.onrender.com/api/admin-auth/admin-login/",
        
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Login API Response:", res.data);

      if (
        res.status === 200 ||
        res.status === 201 ||
        res.data.success === true ||
        res.data.otpSent === true ||
        (res.data.message && res.data.message.toLowerCase().includes("otp"))
      ) {
        alert(res.data?.message || "OTP sent successfully.");
        setShowOTP(true);
      } else {
        alert(res.data?.message || "Login failed");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Error logging in");
    } finally {
      setLoading(false);
    }
  };

  const handleOTPSuccess = (token) => {
    setShowOTP(false);
    localStorage.setItem("access_token", token);
    console.log("Access token saved:", token);
    navigate("/dashboard");
  };

  return (
    <>
      {/* ✅ OTP Modal */}
      {showOTP && (
        <OTPModal
          onClose={() => setShowOTP(false)}
          onSuccess={(token) => handleOTPSuccess(token)}
          phone={formData.contact_number}
        />
      )}

      {/* ✅ Forget Password Modal */}
      {showForget && <ForgetPasswordModal onClose={() => setShowForget(false)} />}

      {/* ✅ Login UI */}
      <div className="hidden md:flex w-full flex-row bg-gradient-to-b from-white to-teal-800 ">
        {/* Left Section */}
        <div className="flex-1 hidden md:flex bg-white rounded-l-3xl relative flex-col justify-center items-center px-8 pt-16 pb-16">
          <img
            src={bgimage}
            alt="water_mark"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="flex items-center space-x-2 mb-16 z-10">
            <img src={Logo} alt="Logo" className="w-14 h-14" />
            <span className="text-gray-700 text-2xl font-semibold">
              AATMAYANTRA
            </span>
          </div>

          <h1 className="text-5xl font-serif mb-6 text-center max-w-xs z-10">
            Welcome <span className="text-teal-600 italic">Back!</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-xs text-center z-10">
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={() => setIsSignup(true)}
            className="px-16 py-3 bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 rounded-md text-white font-medium transition-colors z-10"
          >
            Sign Up
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <div className="bg-white rounded-xl p-8 sm:p-10 w-full max-w-md drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Contact Number
                </label>
                <MdOutlineCall className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  name="contact_number"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="1234567890"
                  value={formData.contact_number}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

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
                  required
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* ✅ Forget Password Link */}
              <div className="text-right mb-6">
                <button
                  type="button"
                  onClick={() => setShowForget(true)}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Forget Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 transition-colors text-white py-2 rounded-md font-semibold"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="items-start mt-8 shadow">
              <div className="flex text-2xl text-blue-600 gap-2">
                <GoShieldLock className="text-3xl mb-1" />
                Secure Access
              </div>
              <p className="text-start text-blue-600 mx-4 text-mb">
                This Portal uses enterprise-grade security protocols to protect
                for admin access
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
