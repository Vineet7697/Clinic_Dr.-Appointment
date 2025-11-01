
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
   const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#cfeeff] to-[#e9f8ff] flex flex-col mt-16">
     

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-12 mt-8 md:mt-12 flex-grow">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 ml-20">
          <h2 className="text-6xl font-bold text-[#002855] leading-tight ">
            Always here when <br /> you need care
          </h2>
          <p className="text-[#4a5c6a] text-2xl">
            Get care, feel better, live brighter — with{" "}
            <strong>Yo Doctor</strong>.
          </p>

          <div className="flex gap-4 mt-8  ">
            <button className="px-6 py-3 bg-[#007bff] text-white rounded-full font-bold  hover:bg-[#0069d9] transition cursor-pointer"
            onClick={() => navigate("/clientloginpage")}>
              For Patient
            </button>
            <button className="px-6 py-3 bg-[#007bff] text-white rounded-full font-bold  hover:bg-[#0069d9] transition cursor-pointer"
            onClick={() => navigate("/doctorloginpage")}>
              For Doctor
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center from-[#cfeeff] to-[#e9f8ff]">
          <img
            src="/images/landingimage.png"
            alt="Doctor Illustration"
            className="w-[350px] md:w-[420px] drop-shadow-lg from-[#cfeeff] to-[#e9f8ff]"
          />
        </div>
      </div>

      {/* Bottom Category Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 py-12 backdrop-blur-sm ">
        {[
          { title: "Dermatologist", icon: "💊" },
          { title: "Cardiologist", img: "images/heart.jpg" },
          { title: "General", icon: "➕" },
          { title: "Orthopedic", icon: "🦴" },
        ].map((item, i) => (
          <div
            key={i}
            className="w-60 h-28 bg-white shadow-md rounded-2xl flex flex-col justify-center items-center hover:shadow-xl transition"
          >
            {item.icon ? (
              <span className="text-3xl mb-1">{item.icon}</span>
            ) : (
              <img
                src={item.img}
                alt={item.title}
                className="w-15 h-15 mb-1 object-contain"
              />
            )}
            <h3 className="text-lg font-semibold text-[#002855]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-[#1b2d45] font-medium">
        <span className="mr-2">
          🩺 Yo Doctor — Smart care with a human touch
        </span>
        <span className="text-sm block mt-2">
          © 2025 Yo Doctor | All rights reserved.
        </span>
      </footer>
    </section>
  );
};

export default LandingPage;
