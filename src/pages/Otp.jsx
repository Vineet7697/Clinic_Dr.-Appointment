import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.emailOrMobile;

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      alert("OTP verified successfully!");
      navigate("/create-password");
    } else {
      alert("Invalid OTP. Try 1234 (demo)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          OTP Verification
        </h2>
        <p className="text-center text-gray-600 mb-4">
          OTP sent to <strong>{user || "your mobile/email"}</strong>
        </p>
        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-md"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
