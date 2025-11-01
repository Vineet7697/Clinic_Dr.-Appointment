import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/UI/Sidebar";

const ClientLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet /> {/* 👈 Ye important hai nested routes dikhane ke liye */}
      </main>
    </div>
  );
};

export default ClientLayout;

