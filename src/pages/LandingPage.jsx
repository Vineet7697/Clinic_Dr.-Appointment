// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="min-h-[600px] flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-gradient-to-r from-[#eef8ff] via-[#d9eefb] to-[#d2e9ff]">
//         {/* Left Content */}
//         <div className="max-w-xl text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Your Health, Connected. <br />
//             <span className="text-gray-900">Seamless Care Starts Here</span>
//           </h1>

//           <p className="mt-4 text-gray-600 text-base">
//             The modern platform for patients to find care and doctors to manage
//             practice.
//           </p>

//           <div className="mt-8 flex gap-4 justify-center md:justify-start">
//             <button
//               onClick={() => navigate("/clientloginpage")} // 👈 For Patient click kare to Login page
//               className="px-6 py-2 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition cursor-pointer"
//             >
//               For Patient
//             </button>

//             <button
//               onClick={() => navigate("/doctorloginpage")} // 👈 For Doctor bhi same (ya /doctor-login agar alag banana ho)
//               className="px-6 py-2 border-2 border-blue-500 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition cursor-pointer"
//             >
//               For Doctor
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
//           <img
//             src="/images/landingimage.png"
//             alt="Doctor Illustration"
//             className="w-72 sm:w-80 md:w-[380px] lg:w-[420px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;

import React from "react";

const LandingPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#cfeeff] to-[#e9f8ff] flex flex-col mt-20">
      {/* Navbar */}
      <header className="flex justify-between items-center px-12 py-6">
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" alt="Yo Doctor" className="w-8 h-8" />
          <h1 className="text-2xl font-semibold text-[#002855]">Yo Doctor</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[#1b2d45] font-medium">
          <a href="#" className="hover:text-[#007bff]">
            Doctor
          </a>
          <a href="#" className="hover:text-[#007bff]">
            Services
          </a>
          <a href="#" className="hover:text-[#007bff]">
            About
          </a>
          <a href="#" className="hover:text-[#007bff]">
            Contact
          </a>
        </nav>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-full bg-[#007bff] text-white hover:bg-[#0069d9] transition">
            Get Started
          </button>
          <button className="px-5 py-2 rounded-full bg-[#00b3ff] text-white hover:bg-[#009ee0] transition">
            Download App
          </button>
        </div>
      </header>

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
            <button className="px-6 py-3 bg-[#007bff] text-white rounded-full font-bold  hover:bg-[#0069d9] transition cursor-pointer">
              For Patient
            </button>
            <button className="px-6 py-3 bg-[#007bff] text-white rounded-full font-bold  hover:bg-[#0069d9] transition cursor-pointer">
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
