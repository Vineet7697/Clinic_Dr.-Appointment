import React, { useState } from "react";
import Sidebar from "../../components/UI/Sidebar";
import { Outlet } from "react-router-dom";

const DoctorLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex  ">
      {/* Sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-teal-500 text-white px-8 py-4 flex items-center justify-between shadow-md sticky top-16 z-10">
          {/* <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button> */}
          <h1 className="font-semibold text-lg md:text-xl tracking-wide">
            Welcome, Dr. Sharma
          </h1>
        </header>

        {/* Main Section */}
        <main className="flex-1 overflow-x-auto p-6 md:p-8 lg:p-10 bg-white/60 rounded-t-3xl shadow-inner">
          {/* ✅ Outlet add kiya — sidebar click hone par content yahan dikhega */}
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
