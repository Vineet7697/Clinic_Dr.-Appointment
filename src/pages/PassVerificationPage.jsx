import React, { useState } from "react";
import Sidebar from "../components/UI/Sidebar";

const PassVerificationPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("passverification");
  const [tokenId, setTokenId] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    if (tokenId.trim().toUpperCase() === "T001") {
      setVerificationResult({
        name: "Rohan Mehta",
        age: 29,
        complaint: "Fever and Cough",
      });
    } else {
      setVerificationResult("not-found");
    }
  };

  const handleReset = () => {
    setTokenId("");
    setVerificationResult(null);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 ">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 text-center">
          Pass Verification
        </h1>
        <p className="text-gray-500 mb-6 sm:mb-8 text-center text-sm sm:text-base">
          Scan patient QR code or enter their token ID to verify.
        </p>

        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-4xl sm:max-w-6xl">
          <div className="text-teal-500 font-bold text-lg sm:text-xl mb-6">
            Yo Doctor
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* QR Scanner Placeholder */}
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
                QR Code Scanner
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center h-52 sm:h-64 mb-4">
                <div className="text-gray-400 text-5xl sm:text-6xl">📷</div>
              </div>
              <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-600 transition text-sm sm:text-base">
                Scan QR Code
              </button>
            </div>

            {/* Manual Verification */}
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
                Manual Token Verification
              </h2>

              <form
                onSubmit={handleVerify}
                className="flex flex-col sm:flex-row sm:space-x-2 mb-6 space-y-2 sm:space-y-0"
              >
                <input
                  type="text"
                  placeholder="Enter Token ID (e.g., T001)"
                  value={tokenId}
                  onChange={(e) => setTokenId(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition text-sm sm:text-base"
                >
                  Verify
                </button>
              </form>

              {/* Result Section */}
              {verificationResult && verificationResult !== "not-found" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="text-green-500 text-2xl sm:text-3xl mr-3">
                      ✅
                    </div>
                    <h3 className="text-green-600 font-semibold text-base sm:text-lg">
                      Patient Verified Successfully!
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4 text-gray-700 text-sm sm:text-base">
                    <p>
                      <span className="font-semibold">Name:</span>{" "}
                      {verificationResult.name}
                    </p>
                    <p>
                      <span className="font-semibold">Age:</span>{" "}
                      {verificationResult.age}
                    </p>
                    <p>
                      <span className="font-semibold">Complaint:</span>{" "}
                      {verificationResult.complaint}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition text-sm sm:text-base">
                      Allow Entry
                    </button>
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition text-sm sm:text-base">
                      Mark as Arrived
                    </button>
                  </div>
                </div>
              )}

              {verificationResult === "not-found" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="text-red-500 text-2xl sm:text-3xl mr-3">
                      ❌
                    </div>
                    <h3 className="text-red-600 font-semibold text-base sm:text-lg">
                      Invalid Token ID!
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Please check the token and try again.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="mt-6 text-xs sm:text-sm text-gray-500 hover:text-teal-600 underline"
        >
          Reset / New Scan
        </button>
      </div>
    </div>
  );
};

export default PassVerificationPage;
