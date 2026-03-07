// src/components/ManageClasses/Feedback/FeedbackModal.jsx
import React from "react";
import { FaTimes, FaStar } from "react-icons/fa";
import Star1 from "../../../assets/1star.svg";
import Star2 from "../../../assets/2star.svg";
import Star3 from "../../../assets/3star.svg";
import Star4 from "../../../assets/4star.svg";
import Star5 from "../../../assets/5star.svg";

export default function FeedbackModal({ feedback, onClose }) {
  if (!feedback) return null;

  // Rating ke hisaab se image + remark select karna
  const getEmojiAndText = (rating) => {
    switch (rating) {
      case 1:
        return { img: Star1, text: "Very Poor" };
      case 2:
        return { img: Star2, text: "  Poor" };
      case 3:
        return { img: Star3, text: "Average" };
      case 4:
        return { img: Star4, text: "  Good" };
      case 5:
        return { img: Star5, text: "Excellent!" };
      default:
        return { img: Star5, text: "Feedback" };
    }
  };

  const { img, text } = getEmojiAndText(feedback.rating);

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <FaTimes size={22} />
        </button>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left: Profile Section */}
          <div className="flex flex-col items-center text-center md:w-1/3">
            <img
              src={feedback.img}
              alt={feedback.name}
              className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md"
            />
            <h3 className="mt-4 text-lg font-bold">{feedback.name}</h3>
            <p className="text-gray-500 text-sm mt-1">Date {feedback.date}</p>

            {/* Rating stars */}
            <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }, (_, idx) => (
                <FaStar
                  key={idx}
                  className={`mx-1 ${
                    idx < feedback.rating ? "text-green-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Feedback Section */}
          <div className="flex flex-col justify-center md:w-2/3 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed text-base">
              {feedback.feedback}
            </p>

            {/* Emoji + Remark */}
            <div className="flex md:justify-start ml-50 mt-6 space-x-3">
              <img
                src={img}
                alt="feedback emoji"
                className="w-16 h-16"
              />
            </div>

            <span className="text-lg font-medium ml-53 text-gray-700">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}






// // src/components/ManageClasses/Feedback/FeedbackModal.jsx
// import React from "react";
// import { FaTimes, FaStar } from "react-icons/fa";
// import Star1 from "../../../assets/1star.svg";
// import Star2 from "../../../assets/2star.svg";
// import Star3 from "../../../assets/3star.svg";
// import Star4 from "../../../assets/4star.svg";
// import Star5 from "../../../assets/5star.svg";
// import { useTheme } from "../../../context/ThemeContext"; // 👈 Import theme

// export default function FeedbackModal({ feedback, onClose }) {
//   const { darkMode } = useTheme(); // 👈 use darkMode from context
//   if (!feedback) return null;

//   // Rating-wise emoji and remark
//   const getEmojiAndText = (rating) => {
//     switch (rating) {
//       case 1:
//         return { img: Star1, text: "Very Poor" };
//       case 2:
//         return { img: Star2, text: "Poor" };
//       case 3:
//         return { img: Star3, text: "Average" };
//       case 4:
//         return { img: Star4, text: "Good" };
//       case 5:
//         return { img: Star5, text: "Excellent!" };
//       default:
//         return { img: Star5, text: "Feedback" };
//     }
//   };

//   const { img, text } = getEmojiAndText(feedback.rating);

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
//       <div
//         className={`rounded-xl shadow-lg p-6 w-full max-w-3xl relative transition-colors duration-300 ${
//           darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
//         >
//           <FaTimes size={22} />
//         </button>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//           {/* Left Section: Profile */}
//           <div className="flex flex-col items-center text-center md:w-1/3">
//             <img
//               src={feedback.img}
//               alt={feedback.name}
//               className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
//             />
//             <h3 className="mt-4 text-lg font-bold">{feedback.name}</h3>
//             <p className="text-sm text-gray-400 mt-1">Date: {feedback.date}</p>

//             {/* Rating Stars */}
//             <div className="flex justify-center mt-2">
//               {Array.from({ length: 5 }, (_, idx) => (
//                 <FaStar
//                   key={idx}
//                   className={`mx-1 ${
//                     idx < feedback.rating ? "text-green-400" : "text-gray-500"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Section: Feedback */}
//           <div className="flex flex-col justify-center md:w-2/3 text-center md:text-left">
//             <p
//               className={`leading-relaxed text-base ${
//                 darkMode ? "text-gray-200" : "text-gray-700"
//               }`}
//             >
//               {feedback.feedback}
//             </p>

//             {/* Emoji + Remark */}
//             <div className="flex md:justify-start mt-6 space-x-3 items-center">
//               <img src={img} alt="feedback emoji" className="w-16 h-16" />
//               <span
//                 className={`text-lg font-medium ${
//                   darkMode ? "text-gray-100" : "text-gray-800"
//                 }`}
//               >
//                 {text}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
