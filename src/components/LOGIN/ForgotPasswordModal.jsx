import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MdOutlineCall, MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function ForgetPasswordModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [timer, setTimer] = useState(60);

  // Refs for OTP inputs
  const otpRefs = useRef([]);

  // Countdown timer (for OTP)
  useEffect(() => {
    if (step !== 2 || timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [step, timer]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  // Step 1 → Send OTP
  const handleSendOTP = async () => {
    if (!contact || !email) return alert("Please fill both fields!");
    setLoading(true);
    try {
      const form = new FormData();
      form.append("contact_number", contact);
      form.append("email", email);

      const res = await axios.post(
        "https://atmayantra-13.onrender.com/admin-auth/forgot-password/",
        
        form
      );

      alert(res.data?.message || "OTP sent!");
      setStep(2);
      setTimer(60);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Step 2 → Verify OTP
  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) return alert("Enter full 6-digit OTP");
    setLoading(true);
    try {
      const form = new FormData();
      form.append("contact_number", contact);
      form.append("otp", otp);

      const res = await axios.post(
        "https://atmayantra-13.onrender.com/admin-auth/verify-reset-otp/",
        
        form
      );

      if (res.data?.success) {
        alert(res.data?.message || "OTP verified successfully!");
        const token = res.data?.reset_token || res.data?.response?.reset_token;
        if (token) setResetToken(token);
        setStep(3);
      } else {
        alert(res.data?.message || "Invalid OTP!");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to verify OTP");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (timer > 0 || resending) return;
    if (!contact || !email)
      return alert("Please enter contact number and email first!");
    setResending(true);
    try {
      const form = new FormData();
      form.append("contact_number", contact);
      form.append("email", email);

      const res = await axios.post(
        "https://atmayantra-4.onrender.com/admin-auth/admin-resend-reset-password-otp/",
        form
      );

      alert(res.data?.message || "OTP resent successfully!");
      setTimer(60);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };

  // Step 3 → Reset password
  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword)
      return alert("Please fill all fields");
    if (newPassword !== confirmPassword)
      return alert("Passwords do not match");
    if (!resetToken)
      return alert("Missing reset token, please verify OTP again.");
    setLoading(true);
    try {
      const form = new FormData();
      form.append("contact_number", contact);
      form.append("password", newPassword);
      form.append("confirm_password", confirmPassword);
      form.append("reset_token", resetToken);

      const res = await axios.post(
        "https://atmayantra-12.onrender.com/admin-auth/reset-password/",
        
        form
      );

      alert(res.data?.message || "Password reset successful!");
      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  // ---- UI ----
  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-end items-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[380px] mr-130 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          ✕
        </button>

        {/* STEP 1: Forget Password */}
        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendOTP();
            }}
          >
            <h2 className="text-2xl font-semibold text-center mb-2">
              Forget Your Password
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Enter your contact number and email to reset your password
            </p>

            <div className="relative mb-4">
              <label className="absolute -top-2 left-3 bg-white text-xs text-gray-500 px-1">
                Contact Number
              </label>
              <MdOutlineCall className="absolute top-3 right-3 text-gray-400 text-lg" />
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter your contact number"
                className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="relative mb-6">
              <label className="absolute -top-2 left-3 bg-white text-xs text-gray-500 px-1">
                Email
              </label>
              <MdEmail className="absolute top-3 right-3 text-gray-400 text-lg" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 text-white py-2 rounded-md font-semibold shadow-md hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>
        )}

        {/* STEP 2: OTP Verification */}
        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerifyOTP();
            }}
          >
            <h2 className="text-2xl font-semibold text-center mb-2">
              Enter Verification Code
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              The verification code has been sent to ******{contact.slice(-3)}
            </p>

            <div className="flex justify-center mb-6 gap-2">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  ref={(el) => (otpRefs.current[i] = el)}
                  value={otp[i] || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!/^[0-9]?$/.test(val)) return;
                    const newOtp = otp.split("");
                    newOtp[i] = val;
                    setOtp(newOtp.join(""));

                    if (val && i < 5) {
                      otpRefs.current[i + 1]?.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !otp[i] && i > 0) {
                      otpRefs.current[i - 1]?.focus();
                    }
                  }}
                  className="w-10 h-10 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-teal-600 outline-none"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 text-white py-2 rounded-md font-semibold shadow-md hover:opacity-90 transition"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Time remaining:{" "}
              <span className="font-semibold text-black">{formatTime(timer)}</span>
            </p>
            <p
              onClick={handleResendOTP}
              disabled={timer > 0 || resending}
              className={`text-center ${
                timer > 0 || resending 
                ? "text-gray-400 cursor-not-allowed" 
                : "text-teal-600 hover:underline"
              } `}
            >
              {resending ? "Resending..." : "Resend OTP"}
            </p>
          </form>
        )}

        {/* STEP 3: Reset Password */}
        {step === 3 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleResetPassword();
            }}
          >
            <h2 className="text-2xl font-semibold text-center mb-2">
              Set Password
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Your password must be at least 8 characters long and include a mix
              of letters, numbers, and special characters.
            </p>

            {resetToken && (
              <p className="text-xs text-gray-400 text-center mb-2">
                Reset Token saved automatically.
              </p>
            )}

            <div className="relative mb-4">
              <label className="absolute -top-2 left-3 bg-white text-xs text-gray-500 px-1">
                Password
              </label>
              <RiLockPasswordLine className="absolute top-3 right-3 text-gray-400 text-lg" />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="relative mb-6">
              <label className="absolute -top-2 left-3 bg-white text-xs text-gray-500 px-1">
                Confirm Password
              </label>
              <RiLockPasswordLine className="absolute top-3 right-3 text-gray-400 text-lg" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className="w-full border border-gray-300 rounded-md p-3 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 text-white py-2 rounded-md font-semibold shadow-md hover:opacity-90 transition"
            >
              {loading ? "Updating..." : "Continue"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
