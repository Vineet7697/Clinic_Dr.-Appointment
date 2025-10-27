import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ApprovalStatusPage = () => {
  const [status, setStatus] = useState("pending"); // 'pending' | 'approved' | 'rejected'
const navigate=useNavigate()
  // Simulate admin approval process (for demo)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Change this value to 'approved' or 'rejected' to test
      setStatus("approved");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
      {/* Placeholder for faint medical pattern */}
      {/* Add repeating background icons here if needed */}

      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center relative">
        {/* Header */}
        <div className="absolute top-4 left-6 text-teal-500 font-bold text-lg">
          Yo Doctor
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-8 mt-6">
          Admin Approval Status
        </h1>

        {/* Conditional Rendering for Status */}
        {status === "pending" && (
          <div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 mb-6">
              Your registration is under review by the admin team.
            </p>
          </div>
        )}

        {status === "approved" && (
          <div>
            <div className="flex justify-center mb-6">
              {/* Checkmark Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-gray-700 mb-6">
              Your clinic has been approved! Redirecting to your Doctor
              Dashboard...
            </p>
          </div>
        )}

        {status === "rejected" && (
          <div>
            <div className="flex justify-center mb-6">
              {/* Cross Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-gray-700 mb-6">
              Your registration was not approved. Please contact support for
              assistance.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => navigate("/doctorloginpage")}
            className="text-teal-600 hover:text-teal-700 font-medium transition"
          >
            Back to Home
          </button>
          <button className="text-gray-500 hover:text-teal-500 font-medium transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalStatusPage;
