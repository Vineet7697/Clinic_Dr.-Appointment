import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../UI/Sidebar";
import HeaderDashboard from "../UI/HeaderDashboard";
import { useState, useEffect } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 🔁 Update user info on login/logout
  useEffect(() => {
    const updateUser = () => {
      const updatedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(updatedUser);
    };

    window.addEventListener("storage", updateUser);
    window.addEventListener("userLogin", updateUser);
    window.addEventListener("userLogout", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
      window.removeEventListener("userLogin", updateUser);
      window.removeEventListener("userLogout", updateUser);
    };
  }, []);

  // 🚪 Redirect to login if not logged in
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/"); // ya "/login" agar aapka route ye hai
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) return null;

  const role = loggedInUser?.role || "client";

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* 🧭 Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-40 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* 🧩 Header + Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <HeaderDashboard
          role={role}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
        <main className="p-2 bg-gray-50 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
