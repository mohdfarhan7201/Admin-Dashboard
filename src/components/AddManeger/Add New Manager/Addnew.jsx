// // src/components/ManagerForm.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ProgressBar from "./ProgressBar";
// import PersonalDetails from "./PersonalDetails";
// import Documents from "./Documents";
// import BankDetails from "./BankDetails";
// import { useTheme } from "../../../context/ThemeContext";

// export default function ManagerForm() {
//   const [step, setStep] = useState(1);
//   const [tempId, setTempId] = useState(null); // ✅ temp_id store hoga yaha
//   const { darkMode } = useTheme();

//   // ✅ Step1 ke baad yeh call hoga
//   const handleNextStep = (receivedTempId) => {
//     if (receivedTempId) {
//       setTempId(receivedTempId); // temp_id save
//     }

//     if (step < 3) {
//       setStep(step + 1);
//     }
//   };

//   // go back
//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   return (
//     <div
//       className={`max-w-4xl mx-auto p-6 shadow-lg rounded-xl transition-colors duration-300 ${
//         darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* Back Link */}
//       <Link
//         to="/add-manager"
//         className={`hover:underline inline-block mb-4 ${
//           darkMode ? "text-white" : "text-black"
//         }`}
//       >
//         ← Back to Manager List
//       </Link>

//       {/* Progress Bar */}
//       <ProgressBar step={step} />

//       {/* Step Forms */}

//       {step === 1 && (
//         <PersonalDetails nextStep={handleNextStep} />
//       )}

//       {step === 2 && (
//         <Documents
//           tempId={tempId}          // ✅ important
//           nextStep={handleNextStep}
//           prevStep={prevStep}
//         />
//       )}

//       {step === 3 && (
//         <BankDetails
//           tempId={tempId}          // future use ke liye
//           prevStep={prevStep}
//         />
//       )}
//     </div>
//   );
// }



// src/components/ManagerForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import PersonalDetails from "./PersonalDetails";
import Documents from "./Documents";
import BankDetails from "./BankDetails";
import { useTheme } from "../../../context/ThemeContext";

export default function ManagerForm() {
  const [step, setStep] = useState(1);
  const [tempId, setTempId] = useState(null); // ✅ temp_id store here
  const { darkMode } = useTheme();

  // ✅ Called after Step1 & Step2 success
  const handleNextStep = (receivedTempId) => {
    // If API returned temp_id, store it
    if (receivedTempId) {
      console.log("Received temp_id:", receivedTempId); // debug
      setTempId(receivedTempId);
    }

    // Move to next step safely
    setStep((prevStep) => {
      if (prevStep < 3) {
        return prevStep + 1;
      }
      return prevStep;
    });
  };

  // ✅ Go back
  const prevStep = () => {
    setStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1;
      }
      return prevStep;
    });
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-6 shadow-lg rounded-xl transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      {/* Back Link */}
      <Link
        to="/add-manager"
        className={`hover:underline inline-block mb-4 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        ← Back to Manager List
      </Link>

      {/* Progress Bar */}
      <ProgressBar step={step} />

      {/* Step Forms */}

      {step === 1 && (
        <PersonalDetails 
          nextStep={handleNextStep} 
        />
      )}

      {step === 2 && (
        <Documents
          tempId={tempId}        // ✅ pass tempId
          nextStep={handleNextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <BankDetails
          tempId={tempId}        // ✅ IMPORTANT
          prevStep={prevStep}
        />
      )}
    </div>
  );
}
