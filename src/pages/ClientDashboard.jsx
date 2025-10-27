import React, { useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import { Outlet } from "react-router-dom";

const ClientDashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("profile");

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
      <main className="flex-1 p-6 mt-20">
        <Outlet /> {/* 👈 Sidebar click hone par yahan content change hoga */}
      </main>
    </div>
  );
};

export default ClientDashboardPage;
