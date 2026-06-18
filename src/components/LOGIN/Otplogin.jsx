// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { IoClose } from "react-icons/io5";
// import BASE_URL from "../../API/baseUrl";

// export default function OTPModal({ onClose, onSuccess, phone }) {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [loading, setLoading] = useState(false);
//   const [resending, setResending] = useState(false);
//   const [timer, setTimer] = useState(60); // 1-minute timer

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

//   const handleChange = (value, index) => {
//     if (/[^0-9]/.test(value)) return; // Only digits

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Auto focus next box
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

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     const finalOtp = otp.join("");
//     if (!finalOtp.trim()) {
//       alert("Please enter the OTP.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const form = new FormData();
//       form.append("contact_number", phone);
//       form.append("otp", finalOtp);

//       const response = await axios.post(
//         `${BASE_URL}/admin-auth/admin-verify-login/`,
        
//         form,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log(
//         "✅ OTP Verify Response (Full):",
//         JSON.stringify(response.data, null, 2)
//       );

//       const token =
//         response.data.response?.access_token ||
//         response.data.access_token ||
//         response.data.token;

//       if (token) {
//         console.log("✅ Access token found:", token);
//         onSuccess(token);
//       } else {
//         console.warn("⚠️ No token found in response:", response.data);
//         alert("OTP verified but token missing in response");
//       }
//     } catch (error) {
//       console.error("❌ OTP Verification Error:", error.response?.data || error);
//       alert(error.response?.data?.message || "OTP verification failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ FIXED resend OTP logic
//   const handleResendOTP = async () => {
//     if (timer > 0 || resending) return;

//     try {
//       setResending(true);

//       const form = new FormData();
//       form.append("contact_number", phone);

//       const response = await axios.post(
//         `${BASE_URL}/admin-auth/resend-login-otp/`,
//          // 👈 your resend OTP API endpoint
//         form,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log("✅ Resend OTP Response:", response.data);
//       alert("OTP resent successfully!");

//       setOtp(["", "", "", "", "", ""]);
//       setTimer(60); // restart timer
//     } catch (error) {
//       console.error("❌ Resend OTP Error:", error.response?.data || error);
//       alert(error.response?.data?.message || "Failed to resend OTP.");
//     } finally {
//       setResending(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-end bg-black/40 backdrop-blur-sm z-50">
//       <div className="bg-white rounded-2xl shadow-xl w-[350px] p-6 mr-130 text-center relative animate-fadeIn">
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

//         {/* OTP Boxes */}
//         <form onSubmit={handleVerifyOTP}>
//           <div className="flex justify-center gap-2 mb-6">
//             {otp.map((val, i) => (
//               <input
//                 key={i}
//                 id={`otp-${i}`}
//                 type="text"
//                 value={val}
//                 onChange={(e) => handleChange(e.target.value, i)}
//                 onKeyDown={(e) => handleKeyDown(e, i)}
//                 maxLength="1"
//                 className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             ))}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 rounded-md text-white font-medium ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90"
//             }`}
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </form>

//         {/* Timer + Resend */}
//         <div className="mt-5 text-gray-600 text-sm">
//           Time remaining:{" "}
//           <span className="font-semibold text-black">{formatTime(timer)}</span>
//         </div>

//         <button
//           onClick={handleResendOTP}
//           disabled={timer > 0 || resending}
//           className={`mt-2 text-sm ${
//             timer > 0 || resending
//               ? "text-gray-400 cursor-not-allowed"
//               : "text-teal-600 hover:underline"
//           }`}
//         >
//           {resending ? "Resending..." : "Resend OTP"}
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
  username,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);

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

  const handleChange = (value, index) => {
    if (/[^0-9]/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      alert("Please enter a valid 6 digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const form = new FormData();

      form.append("username", username);
      form.append("otp", finalOtp);

      const response = await axios.post(
        `${BASE_URL}/admin-auth/admin-verify-login/`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(
        "Verify Login OTP Response:",
        response.data
      );

      const token =
        response.data?.response?.access_token ||
        response.data?.access_token ||
        response.data?.token ||
        response.data?.response?.token;

      if (token) {
        localStorage.setItem("access_token", token);
        onSuccess(token);
      } else if (
        response.data.success === true
      ) {
        onSuccess();
      } else {
        alert(
          response.data.message ||
            response.data.error ||
            "OTP verification failed."
        );
      }
    } catch (error) {
      console.error(
        "OTP Verification Error:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "OTP verification failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0 || resending) return;

    try {
      setResending(true);

      const form = new FormData();

      form.append("username", username);

      const response = await axios.post(
        `${BASE_URL}/admin-auth/resend-login-otp/`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(
        "Resend Login OTP Response:",
        response.data
      );

      alert(
        response.data.message ||
          "OTP resent successfully!"
      );

      setOtp(["", "", "", "", "", ""]);
      setTimer(60);
    } catch (error) {
      console.error(
        "Resend OTP Error:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Failed to resend OTP."
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[380px] p-6 text-center relative lg:-mr-320">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Enter Verification Code
        </h2>

        <p className="text-gray-500 mb-6 text-sm">
          OTP sent to user:
          <span className="font-medium ml-1">
            {username}
          </span>
        </p>

        <form onSubmit={handleVerifyOTP}>
          <div className="flex justify-center gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                maxLength={1}
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
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-medium ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90"
            }`}
          >
            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </button>
        </form>

        <div className="mt-5 text-gray-600 text-sm">
          Time Remaining :
          <span className="font-semibold text-black ml-1">
            {formatTime(timer)}
          </span>
        </div>

        <button
          onClick={handleResendOTP}
          disabled={timer > 0 || resending}
          className={`mt-2 text-sm ${
            timer > 0 || resending
              ? "text-gray-400 cursor-not-allowed"
              : "text-teal-600 hover:underline"
          }`}
        >
          {resending
            ? "Resending..."
            : "Resend OTP"}
        </button>
      </div>
    </div>
  );
}