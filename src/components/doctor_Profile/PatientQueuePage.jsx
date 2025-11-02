import React, { useState, useEffect } from "react";
import { FaQrcode, FaClock, FaPlus } from "react-icons/fa";

/**
 * PatientQueuePage.js
 * 
 * ✅ Features:
 * - Tokens generate only between 12 AM and 8 PM
 * - After 8 PM: token generation stops
 * - New day (after 12 AM): token counter resets to 1
 * - Tokens auto-increment with each visit
 */

const PatientQueuePage = () => {
  const doctorName = "Dr. Ananya Sharma";
  const [tokenNumber, setTokenNumber] = useState(null);
  const [estimatedWaitTime, setEstimatedWaitTime] = useState("15 mins");
  const [isWithinTime, setIsWithinTime] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(30);

  // 🕒 Check if current time is between 12 AM and 8 PM
  const isTokenTime = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 0 && hours < 20; // 0 (12 AM) to 19 (7:59 PM)
  };

  // 🧮 Reset tokens every day after midnight
  const resetTokensIfNewDay = () => {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem("lastTokenDate");

    if (lastDate !== today) {
      // 🧹 New day: reset token counter
      localStorage.setItem("lastTokenNumber", "0");
      localStorage.setItem("lastTokenDate", today);
    }
  };

  useEffect(() => {
    resetTokensIfNewDay();

    const withinTime = isTokenTime();
    setIsWithinTime(withinTime);

    if (withinTime) {
      // ✅ Generate or continue token sequence
      const lastToken = parseInt(localStorage.getItem("lastTokenNumber")) || 0;
      const newToken = lastToken + 1;
      setTokenNumber(newToken);
      localStorage.setItem("lastTokenNumber", newToken.toString());

      // Save today’s date for reset tracking
      localStorage.setItem("lastTokenDate", new Date().toDateString());

      // ⏱ Estimate wait time
      const wait = newToken * 5; // 5 mins per token
      setEstimatedWaitTime(`${wait} mins`);
    } else {
      setTokenNumber("N/A");
    }
  }, []);

  // 🔁 Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPercentage((prev) => (prev < 100 ? prev + 1 : 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-10 grid-rows-10 gap-4 p-10">
          {Array.from({ length: 100 }).map((_, idx) => (
            <div key={idx} className="text-blue-200 text-xl">⚕️</div>
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-6 z-10 w-80">
        <h2 className="text-2xl font-semibold text-center">Your Appointment Queue</h2>

        {/* Clock Icon */}
        <div className="rounded-full p-4 bg-gradient-to-r from-blue-400 to-teal-400">
          <div className="bg-white rounded-full p-6 flex items-center justify-center text-blue-500 text-3xl">
            <FaClock />
          </div>
        </div>

        {/* Info Section */}
        {isWithinTime ? (
          <>
            <p className="text-gray-500 text-base">
              Estimated Wait Time: {estimatedWaitTime}
            </p>
            <p className="text-3xl font-bold text-black">
              Token Number: #{tokenNumber}
            </p>
            <p className="text-gray-500 text-sm">Doctor: {doctorName}</p>
          </>
        ) : (
          <p className="text-red-500 text-center font-medium px-2">
            ⏰ Token generation closed.<br />
            Next token generation starts after 12:00 AM.
          </p>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-gradient-to-r from-blue-400 to-teal-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4 w-full">
          <button className="flex items-center justify-center space-x-2 flex-1 py-2 px-4 border rounded-lg text-blue-500 border-blue-300 hover:bg-blue-50 transition">
            <FaQrcode />
            <span>Pass</span>
          </button>

          <button className="flex items-center justify-center space-x-2 flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:opacity-90 transition">
            <FaPlus />
            <span>Show to Doctor</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientQueuePage;
