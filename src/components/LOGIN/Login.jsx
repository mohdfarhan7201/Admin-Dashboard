
import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./loginpage";

export default function App() {
  const [isSignup, setIsSignup] = useState(false); // true = Signup screen

  return (
    <div className="lg:pt-2 xl:pt-0 md:pt-2 ">

    <div className="h-full w-full bg-gradient-to-b from-white to-teal-800 overflow-hidden relative">
      {/* Main Wrapper for Slide Animation */}
      <div
        className={`flex w-[200%] transition-transform duration-700 ease-in-out ${
          isSignup ? "translate-x-0" : "-translate-x-1/2"
        }`}
        >
        <Signup isSignup={isSignup} setIsSignup={setIsSignup} />
        <Login isSignup={isSignup} setIsSignup={setIsSignup} />
      </div>
    </div>
        </div>
  );
}

