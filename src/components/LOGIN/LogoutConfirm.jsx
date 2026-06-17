// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaLock } from "react-icons/fa";

// export default function LogoutConfirm() {
//   const navigate = useNavigate();

//   // ✅ When user confirms logout
//   const handleYes = () => {
//     // 🧹 Soft delete: Remove user data from localStorage
//     // localStorage.removeItem("accessToken");

//     const token = localStorage.getItem("access_token");
//     // const userSession = localStorage.getItem("userSession");

// if (token) {
//     // ✅ Soft delete: replace the value with a status
//     localStorage.setItem("access_token", JSON.stringify({
//       deleted: true,
//       oldToken: token,
//       deletedAt: new Date().toISOString(),
//     }));
//   }

//     // if (userSession) {
//     //   // Option 1: Hard remove
//     //   // localStorage.removeItem("userSession");

//     //   // Option 2 (Soft delete): Mark as deleted instead
//     //   const updated = { ...JSON.parse(userSession), deleted: true };
//     //   localStorage.setItem("userSession", JSON.stringify(updated));
//     // }

//     // ✅ Redirect to login page
//     navigate("/");
//   };

//   // ✅ Cancel logout and go back
//   const handleCancel = () => {
//     navigate(-1);
//   };

//   return (
//     // 🔹 Background Overlay (blur + dark)
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
//       {/* 🔹 Popup Card */}
//       <div className="bg-white shadow-xl rounded-xl px-8 py-10 w-[360px] text-center border border-gray-200 animate-fadeIn scale-100">
//         {/* Lock Icon */}
//         <div className="flex justify-center mb-4">
//           <div className="bg-blue-100 p-3 rounded-full">
//             <FaLock className="text-blue-600 text-xl" />
//           </div>
//         </div>

//         {/* Title */}
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">
//           Are you sure you want <br /> to logout?
//         </h2>

//         {/* Subtext */}
//         <p className="text-gray-500 text-sm mb-6">
//           Logout from Aatmayantra admin panel?
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={handleYes}
//             className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
//           >
//             Yes, Logout
//           </button>
//           <button
//             onClick={handleCancel}
//             className="border border-gray-300 text-gray-700 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import BASE_URL from "../../API/baseUrl";

export default function LogoutConfirm() {
  const navigate = useNavigate();

  const DECODE_API = `${BASE_URL}/admin-auth/admin-decode-token/`;
  const REFRESH_API = `${BASE_URL}/admin-auth/admin-refresh-token/`;
  const LOGOUT_API = `${BASE_URL}/admin-auth/admin-logout/`;

  // ✅ Decode Token
  const decodeToken = async (token) => {
    try {
      const res = await axios.get(DECODE_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ Token decoded:", res.data);
      return true;
    } catch (err) {
      console.error("❌ Decode failed:", err.response?.data);
      return false;
    }
  };

  // ✅ Refresh Access Token
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token");

      const res = await axios.post(
        REFRESH_API,
        { refresh_token: refreshToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const newToken = res.data?.access_token;

      if (newToken) {
        localStorage.setItem("access_token", newToken);
        console.log("🔄 Token refreshed");
        return newToken;
      }
    } catch (err) {
      console.error("❌ Token refresh failed:", err.response?.data);
    }

    return null;
  };

  // ✅ Logout API
  const logoutUser = async (token) => {
    try {
      const res = await axios.post(
        LOGOUT_API,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("✅ Logout success:", res.data);
      return true;
    } catch (err) {
      console.error("❌ Logout failed:", err.response?.data);
      return false;
    }
  };

  // ✅ Logout flow
  const handleYes = async () => {
    let token = localStorage.getItem("access_token");

    if (!token) {
      navigate("/");
      return;
    }

    // Step 1: Decode token
    const isValid = await decodeToken(token);

    // Step 2: If expired → refresh
    if (!isValid) {
      const newToken = await refreshAccessToken();
      if (newToken) {
        token = newToken;
      } else {
        console.warn(" Could not refresh token");
        localStorage.clear();
        navigate("/");
        return;
      }
    }

    // Step 3: Logout
    const success = await logoutUser(token);

    if (success) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      navigate("/");
    } else {
      navigate("/");
    }
  };

  const handleCancel = () => navigate(-1);

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white shadow-xl rounded-xl px-8 py-10 w-[360px] text-center border border-gray-200 animate-fadeIn scale-100">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaLock className="text-blue-600 text-xl" />
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Are you sure you want <br /> to logout?
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Logout from Aatmayantra admin panel?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleYes}
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Yes, Logout
          </button>
          <button
            onClick={handleCancel}
            className="border border-gray-300 text-gray-700 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
