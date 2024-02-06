import React, { useState } from "react";
import myImage from "../assets/mobile-security.png";
// To format code properly npx prettier --write .
import "../components/Otp.css"

export const Otplogin = () => {
  const [phoneNumber,setphoneNumber]=useState("");
  const[otp,setOtp]=useState(["","","","","",""]);
  const [showOtpInput,setShowOtpInput]=useState(false);
  const handlePhoneNumberChange = (e) => {
    setphoneNumber(e.target.value)
  };
  const handleSubmit = async() => {
  try {
  
  }
  }
  return (
    <div className=" main_container max-w-md mx-auto p-6 bg-white rounded-md  "> {/* Increased shadow size */}
      <div className="text-center">
        <img src={myImage} alt="Mobile image" className="max-w-full mb-4 mx-auto" />
        <h2 className="text-xl font-bold mt-4">WELCOME</h2>
        <p className="mt-2">Enter number to continue</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="countryCode" className="text-sm text-gray-600">Country Code</label>
          <select id="countryCode" name="countryCode" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
            <option value="+1">+1 (USA)</option>
            <option value="+91">+91 (India)</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="phoneNumber" className="text-sm text-gray-600">Phone Number</label>
          <input
            onChange={handlePhoneNumberChange}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex justify-center">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
        </div>
      </div>
    </div>
  );
};
