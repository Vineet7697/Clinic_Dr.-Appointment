// Sidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../../pages/LogoutModal"; // ✅ Correct path

const Sidebar = ({ activeNav, setActiveNav, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // modal state

  // 🧠 Check user role from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const role = loggedInUser?.role || "client"; // default: client

  // 👨‍⚕ Doctor navigation
  const doctorNav = [
    { key: "dashboard", label: "Dashboard", icon: "🏠" },
    { key: "patients", label: "Today's Patients", icon: "🧑‍⚕" },
    { key: "queue", label: "Current Queue", icon: "🧾" },
    { key: "passverification", label: "Pass Verification", icon: "✅" },
    { key: "analytics", label: "Analytics/Charts", icon: "💹" },
   
  ];

  // 👩‍🦰 Client navigation
  const clientNav = [
    { key: "finddoctor", label: "Dashboard", icon: "🏠" },
    { key: "appointments", label: "Appointment History", icon: "📅" },
    { key: "family", label: "Family Members", icon: "👨‍👩‍👧" },
  ];

  // ✅ Role-based nav
  const navItems = role === "doctor" ? doctorNav : clientNav;

  // 🔁 Page navigation
  const handleNavClick = (item) => {
    if (setActiveNav) setActiveNav(item.key);

    // ✅ Sidebar sirf mobile (width < 768px) par band ho
    if (window.innerWidth < 768 && setIsOpen) setIsOpen(false);

    if (role === "doctor") {
      navigate(`/doctordashboard/${item.key}`);
    } else {
      navigate(`/client/${item.key}`);
    }
  };

  // 🚪 Logout confirmed
  const handleLogoutConfirm = () => {
    localStorage.removeItem("loggedInUser");
    
    navigate("/clientloginpage");
  };

  return (
    <>
      {/* 🖥️ Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white p-4 sticky self-start h-100vh]">
        <div className="mb-6 text-xl font-bold text-teal-600 text-center">
          {role === "doctor" ? "Yo Doctor" : "Yo Client"}
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                activeNav === item.key
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleNavClick(item)}
            >
              <div className="text-lg">{item.icon}</div>
              <div className="font-medium">{item.label}</div>
            </div>
          ))}

          
        </nav>
      </aside>

      {/* 📱 Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-bold text-teal-600 text-lg">
                {role === "doctor" ? "Yo Doctor" : "Yo Client"}
              </div>
             
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                    activeNav === item.key
                      ? "bg-teal-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  <div className="text-lg">{item.icon}</div>
                  <div className="font-medium">{item.label}</div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* 🔘 Logout Confirmation Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default Sidebar;
