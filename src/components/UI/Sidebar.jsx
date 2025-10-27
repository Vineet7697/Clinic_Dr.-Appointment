import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeNav, setActiveNav, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: "🏠", path: "/doctordashboard" },
    { key: "patients", label: "Today's Patients", icon: "🧑‍⚕", path: "/patientlistpage" },
    { key: "queue", label: "Current Queue", icon: "🧾", path: "/currentqueuepage" },
    { key: "passverification", label: "Pass Verification", icon: "✅", path: "/passverificationpage" },
    { key: "notifications", label: "Message/Notification", icon: "💬", path: "/messagespage" },
    { key: "analytics", label: "Analytics/Charts", icon: "💹", path: "/analyticsdashboard" },
    { key: "settings", label: "Settings", icon: "⚙", path: "/profilesettingpage" },
  ];

  const handleNavClick = (item) => {
    setActiveNav(item.key);
    navigate(item.path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white rounded-2xl shadow-md p-4 sticky top-8 self-start">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                activeNav === item.key ? "bg-teal-500 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleNavClick(item)}
            >
              <div className="text-lg">{item.icon}</div>
              <div className="font-medium">{item.label}</div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-bold text-teal-600">Yo Doctor</div>
              <button className="p-1 rounded-md hover:bg-gray-100" onClick={() => setIsOpen(false)}>✕</button>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    activeNav === item.key ? "bg-teal-500 text-white" : "text-gray-700 hover:bg-gray-100"
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
    </>
  );
};

export default Sidebar;
