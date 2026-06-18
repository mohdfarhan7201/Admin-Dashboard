// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { IoClose } from "react-icons/io5";
// import BASE_URL from "../../API/baseUrl";

// export default function OTPModal({ onClose, onSuccess, phone, formData }) {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timer, setTimer] = useState(60);
//   const [isResending, setIsResending] = useState(false);
//   const [verifying, setVerifying] = useState(false);

//   // Countdown timer
//   useEffect(() => {
//     if (timer <= 0) return;
//     const id = setInterval(() => setTimer((t) => t - 1), 1000);
//     return () => clearInterval(id);
//   }, [timer]);

//   const formatTime = (s) => {
//     const m = Math.floor(s / 60)
//       .toString()
//       .padStart(2, "0");
//     const sec = (s % 60).toString().padStart(2, "0");
//     return `${m}:${sec}`;
//   };

//   // Handle OTP input
//   const handleChange = (value, index) => {
//     if (/[^0-9]/.test(value)) return; // Only digits allowed

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Auto move to next input
//     if (value && index < 5) {
//       const next = document.getElementById(`otp-${index + 1}`);
//       if (next) next.focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       const prev = document.getElementById(`otp-${index - 1}`);
//       if (prev) prev.focus();
//     }
//   };

//   // ✅ Verify OTP
//   const handleVerify = async () => {
//     const finalOtp = otp.join("");
//     if (!finalOtp.trim()) {
//       alert("Please enter the OTP.");
//       return;
//     }

//     try {
//       setVerifying(true);

//       const fd = new FormData();
//       fd.append("contact_number", phone);
//       fd.append("email", formData.email);
//       fd.append("otp", finalOtp);

//       const res = await axios.post(
//         `${BASE_URL}/admin-auth/admin-verify-signup/`,
        
//         fd,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       console.log("✅ Verify OTP Response:", res.data);

//       if (res.status === 200 && (res.data.success || res.data.verified)) {
//         alert(res.data.message || "OTP verified successfully!");
//         onSuccess();
//         return;
//       }

//       alert(res.data?.message || "Invalid OTP. Try again.");
//     } catch (err) {
//       console.error("❌ OTP Verify Error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "OTP verification failed.");
//     } finally {
//       setVerifying(false);
//     }
//   };

//   // ✅ FIXED Resend OTP Logic (clean + correct API)
//   const handleResend = async () => {
//     if (timer > 0 || isResending) return;

//     try {
//       setIsResending(true);

//       const fd = new FormData();
//       fd.append("contact_number", phone);
//       fd.append("email", formData.email);
//       fd.append("name", formData.name);
//       fd.append("password", formData.password);
//       fd.append("confirm_password", formData.confirmPassword);

//       // 👇 Your resend OTP API endpoint (signup resend)
//       const res = await axios.post(
//         `${BASE_URL}/admin-auth/admin-resend-signup-otp/`, 
//         fd,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log("✅ Resend OTP Response:", res.data);

//       if (res.status === 200 || res.data.success) {
//         alert(res.data?.message || "OTP resent successfully!");
//         setOtp(["", "", "", "", "", ""]);
//         setTimer(60); // restart timer
//       } else {
//         alert(res.data?.message || "Failed to resend OTP.");
//       }
//     } catch (err) {
//       console.error("❌ Resend OTP Error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "Failed to resend OTP.");
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-start bg-black/40 backdrop-blur-sm z-50">
//       <div className="bg-white rounded-2xl shadow-xl w-[350px] p-6 ml-130 text-center relative animate-fadeIn">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           <IoClose size={22} />
//         </button>

//         <h2 className="text-xl font-semibold mb-2 text-gray-800">
//           Enter Verification Code
//         </h2>
//         <p className="text-gray-500 mb-6 text-sm">
//           The verification code has been sent to ******{phone?.slice(-3)}
//         </p>

//         {/* OTP Input Boxes */}
//         <div className="flex justify-center gap-2 mb-6">
//           {otp.map((val, i) => (
//             <input
//               key={i}
//               id={`otp-${i}`}
//               type="text"
//               value={val}
//               onChange={(e) => handleChange(e.target.value, i)}
//               onKeyDown={(e) => handleKeyDown(e, i)}
//               maxLength="1"
//               className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           ))}
//         </div>

//         {/* Verify Button */}
//         <button
//           onClick={handleVerify}
//           disabled={verifying}
//           className={`w-full py-2 rounded-md text-white font-medium ${
//             verifying
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90"
//           }`}
//         >
//           {verifying ? "Verifying..." : "Verify OTP"}
//         </button>

//         {/* Timer + Resend */}
//         <div className="mt-5 text-gray-600 text-sm">
//           Time remaining:{" "}
//           <span className="font-semibold text-black">
//             {formatTime(timer)}
//           </span>
//         </div>

//         <button
//           onClick={handleResend}
//           disabled={isResending || timer > 0}
//           className={`mt-2 text-sm ${
//             timer > 0
//               ? "text-gray-400 cursor-not-allowed"
//               : "text-teal-600 hover:underline"
//           }`}
//         >
//           {isResending ? "Resending..." : "Resend OTP"}
//         </button>
//       </div>
//     </div>
//   );
// }







import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import BASE_URL from "../../API/baseUrl";

export default function OTPModal({
  onClose,
  onSuccess,
  phone,
  username,
  formData,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isResending, setIsResending] = useState(false);
  const [verifying, setVerifying] = useState(false);

  // Countdown Timer
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");

    const secs = (seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${mins}:${secs}`;
  };

  // OTP Input Handler
  const handleChange = (value, index) => {
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // VERIFY OTP
  const handleVerify = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      alert("Please enter a valid 6 digit OTP.");
      return;
    }

    try {
      setVerifying(true);

      const fd = new FormData();

      fd.append("username", username);
      fd.append("contact_number", phone);
      fd.append("email", formData.email);
      fd.append("otp", finalOtp);

      const res = await axios.post(
        `${BASE_URL}/admin-auth/admin-verify-signup/`,
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Verify OTP Response:", res.data);

      if (
        res.status === 200 &&
        (res.data.success === true ||
          res.data.verified === true)
      ) {
        alert(
          res.data.message ||
            "OTP verified successfully!"
        );

        onSuccess();
        return;
      }

      alert(
        res.data.message ||
          res.data.error ||
          "Invalid OTP."
      );
    } catch (err) {
      console.error(
        "Verify OTP Error:",
        err.response?.data || err.message
      );

      alert(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "OTP verification failed."
      );
    } finally {
      setVerifying(false);
    }
  };

  // RESEND OTP
  const handleResend = async () => {
    if (timer > 0 || isResending) return;

    try {
      setIsResending(true);

      const fd = new FormData();

      fd.append("username", username);
      fd.append("contact_number", phone);
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("password", formData.password);
      fd.append(
        "confirm_password",
        formData.confirmPassword
      );

      const res = await axios.post(
        `${BASE_URL}/admin-auth/admin-resend-signup-otp/`,
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Resend OTP Response:", res.data);

      if (
        res.status === 200 ||
        res.data.success === true
      ) {
        alert(
          res.data.message ||
            "OTP resent successfully!"
        );

        setOtp(["", "", "", "", "", ""]);
        setTimer(60);
      } else {
        alert(
          res.data.message ||
            "Failed to resend OTP."
        );
      }
    } catch (err) {
      console.error(
        "Resend OTP Error:",
        err.response?.data || err.message
      );

      alert(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to resend OTP."
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[380px] p-6 text-center relative lg:-ml-320">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-2">
          Enter Verification Code
        </h2>

        <p className="text-gray-500 mb-6 text-sm">
          OTP sent to ******{phone?.slice(-3)}
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) =>
                handleChange(
                  e.target.value,
                  index
                )
              }
              onKeyDown={(e) =>
                handleKeyDown(e, index)
              }
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={verifying}
          className={`w-full py-2 rounded-md text-white font-medium ${
            verifying
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90"
          }`}
        >
          {verifying
            ? "Verifying..."
            : "Verify OTP"}
        </button>

        <div className="mt-5 text-sm text-gray-600">
          Time Remaining:{" "}
          <span className="font-semibold text-black">
            {formatTime(timer)}
          </span>
        </div>

        <button
          onClick={handleResend}
          disabled={timer > 0 || isResending}
          className={`mt-2 text-sm ${
            timer > 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-teal-600 hover:underline"
          }`}
        >
          {isResending
            ? "Resending..."
            : "Resend OTP"}
        </button>
      </div>
    </div>
  );
}