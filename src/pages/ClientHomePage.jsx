import React from "react";
import Header from "../components/UI/Header"; // Correct path use karo
import {
  FaSearch,
  FaQrcode,
  FaUser,
  FaLifeRing,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ClientHomePage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      label: "Search Doctor",
      icon: <FaSearch className="text-teal-500 text-5xl mb-4" />,
      action: () => navigate("/searchdoctorpage"),
    },
    {
      label: "Scan QR",
      icon: <FaQrcode className="text-teal-500 text-5xl mb-4" />,
      action: () => alert("Opening QR Scanner..."),
    },
    {
      label: "Profile",
      icon: <FaUser className="text-teal-500 text-5xl mb-4" />,
      action: () => alert("Opening Profile..."),
    },
    {
      label: "Help / Support",
      icon: <FaLifeRing className="text-teal-500 text-5xl mb-4" />,
      action: () => alert("Opening Help & Support..."),
    },
  ];

  return (
    <div className="relative">
      {/* ✅ Header with Profile Dropdown */}
      <Header />

      {/* Main Page Content */}
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 pt-24"
        style={{
          backgroundImage:
            "url('/path-to-medical-pattern.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: "1",
        }}
      >
        {/* Greeting */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Welcome, {JSON.parse(localStorage.getItem("loggedInUser"))?.name || "Guest"}! 👋
          </h1>
          <p className="text-lg text-gray-600">
            How can we help you today?
          </p>
        </div>

        {/* Action Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={card.action}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center p-8 w-40 h-40 md:w-48 md:h-48"
            >
              {card.icon}
              <h3 className="text-gray-800 font-semibold text-lg">{card.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientHomePage;
