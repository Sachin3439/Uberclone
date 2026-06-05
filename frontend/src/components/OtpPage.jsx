import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const OTPPage = () => {

  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleVerify = () => {

    if (otp === "1234") {

      alert("OTP Verified");

      navigate("/showride");

    } 
    
    else {
      alert("Invalid OTP");
    }
  };

  return (
   <div>
     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Verify OTP
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Ask passenger for ride OTP
        </p>

        {/* OTP BOX */}
        <input
          type="text"
          maxLength={4}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="----"
          className="w-full border-2 border-gray-300 
                     rounded-2xl py-4 text-center 
                     text-3xl tracking-[15px]
                     outline-none focus:border-green-500"
        />

        {/* BUTTON */}
        <button
          onClick={handleVerify}
          className="w-full bg-green-500 hover:bg-green-600 
                     text-white py-4 rounded-2xl 
                     mt-6 text-lg font-semibold transition"
        >
          Verify OTP
        </button>

      </div>
    </div>
   </div>
  );
};

export default OTPPage;