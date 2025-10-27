import React, { useState, useEffect } from "react";
import { FaQrcode, FaClock, FaPlus } from "react-icons/fa";

/**
 * PatientQueuePage.js
 *
 * Displays patient's queue status, progress bar, and action buttons.
 * Fully styled with Tailwind CSS.
 */

const PatientQueuePage = () => {
  // Mock data
  const doctorName = "Dr. Ananya Sharma";
  const tokenNumber = "A-102";
  const estimatedWaitTime = "15 mins";

  // Progress bar state (0 to 100)
  const [progressPercentage, setProgressPercentage] = useState(30);

  // Simulate progress update (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPercentage((prev) => (prev < 100 ? prev + 1 : 100));
    }, 1000); // increment every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Faint medical icons background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-10 grid-rows-10 gap-4 p-10">
          {Array.from({ length: 100 }).map((_, idx) => (
            <div key={idx} className="text-blue-200 text-xl">
              ⚕️
            </div>
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-6 z-10 w-80">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center">Your Appointment Queue</h2>

        {/* Icon with gradient border */}
        <div className="rounded-full p-4 bg-gradient-to-r from-blue-400 to-teal-400">
          <div className="bg-white rounded-full p-6 flex items-center justify-center text-blue-500 text-3xl">
            <FaClock />
          </div>
        </div>

        {/* Wait Time */}
        <p className="text-gray-500 text-base">Estimated Wait Time: 15 mins</p>

        {/* Token Number */}
        <p className="text-3xl font-bold text-black">Token Number: #23</p>

        {/* Doctor Name */}
        <p className="text-gray-500 text-sm">Doctor: Dr. A. Sharma</p>

        {/* Button Row */}
        <div className="flex space-x-4 mt-4 w-full">
          {/* Pass Button */}
          <button className="flex items-center justify-center space-x-2 flex-1 py-2 px-4 border rounded-lg text-blue-500 border-blue-300 hover:bg-blue-50 transition">
            <FaQrcode />
            <span>Pass</span>
          </button>

          {/* Show to Doctor Button */}
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