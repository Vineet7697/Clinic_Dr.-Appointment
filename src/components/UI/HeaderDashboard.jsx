import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import LogoutModal from "../../pages/LogoutModal";

const HeaderDashboard = ({ toggleSidebar, isSidebarOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const userRole = loggedInUser?.role;

  // ✅ Sync user info (real-time)
  useEffect(() => {
    const updateUser = () => {
      const updatedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(updatedUser);
    };
    window.addEventListener("storage", updateUser);
    window.addEventListener("userLogin", updateUser);
    window.addEventListener("userLogout", updateUser);
    window.addEventListener("userProfileUpdated", updateUser);
    return () => {
      window.removeEventListener("storage", updateUser);
      window.removeEventListener("userLogin", updateUser);
      window.removeEventListener("userLogout", updateUser);
      window.removeEventListener("userProfileUpdated", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setProfileOpen(false);
    setIsLogoutModalOpen(false);
    window.dispatchEvent(new Event("userLogout"));
    navigate("/");
  };

  const handleNavigate = (path) => {
    setProfileOpen(false);
    navigate(path);
  };

  // ✅ Close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    if (profileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  if (!loggedInUser) return null;

  return (
    <nav
      className={`fixed top-0 left-0 ${
        isSidebarOpen ? "md:left-64 md:w-[calc(100%-16rem)]" : "w-full"
      } bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center z-50 transition-all duration-300`}
    >
      <button
        onClick={toggleSidebar}
        className="text-gray-700 text-xl hover:text-blue-500 transition"
      >
        <FaBars />
      </button>

      <div className="flex items-center gap-4 relative">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition"
          >
            <img
              src={
                loggedInUser?.avatar?.trim()
                  ? loggedInUser.avatar
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover border border-gray-300"
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-100 z-20">
              <ul className="py-2 text-gray-700">
                {userRole === "client" && (
                  <>
                    <li onClick={() => handleNavigate("/client/profile")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      👤 My Profile
                    </li>
                    <li onClick={() => handleNavigate("/client/settings")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      ⚙️ Settings
                    </li>
                    <li onClick={() => handleNavigate("/client/changepassword")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      🔒 Change Password
                    </li>
                  </>
                )}
                {userRole === "doctor" && (
                  <>
                    <li onClick={() => handleNavigate("/doctor/dashboard")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      🏠 Dashboard
                    </li>
                    <li onClick={() => handleNavigate("/doctor/patients")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      👩‍⚕️ Today's Patients
                    </li>
                    <li onClick={() => handleNavigate("/doctor/queue")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      📋 Current Queue
                    </li>
                    <li onClick={() => handleNavigate("/doctor/passverification")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      ✅ Pass Verification
                    </li>
                    <li onClick={() => handleNavigate("/doctor/notifications")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      💬 Notifications
                    </li>
                    <li onClick={() => handleNavigate("/doctor/analytics")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      📊 Analytics
                    </li>
                    <li onClick={() => handleNavigate("/doctor/settings")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      ⚙ Settings
                    </li>
                  </>
                )}
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 font-medium border-t mt-1"
                  onClick={() => setIsLogoutModalOpen(true)}
                >
                  🚪 Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </nav>
  );
};

export default HeaderDashboard;
