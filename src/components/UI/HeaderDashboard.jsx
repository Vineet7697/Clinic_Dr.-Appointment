import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaBell } from "react-icons/fa";
import LogoutModal from "../../pages/LogoutModal";

const HeaderDashboard = ({ toggleSidebar, isSidebarOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const userRole = loggedInUser?.role;

  // 🔔 Dummy notifications
  const [notifications] = useState([
    { id: 1, text: "Your appointment with Dr. Sharma is confirmed.", time: "2 mins ago" },
    { id: 2, text: "Lab report is ready to download.", time: "10 mins ago" },
    { id: 3, text: "Your profile was updated successfully.", time: "1 hour ago" },
  ]);

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

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!loggedInUser) return null;

  return (
    <nav
      className={`fixed top-0 left-0 ${
        isSidebarOpen ? "md:left-64 md:w-[calc(100%-16rem)]" : "w-full"
      } bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center z-50 transition-all duration-300`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-gray-700 text-xl hover:text-blue-500 transition"
      >
        <FaBars />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        {/* 🔔 Notification Icon */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setProfileOpen(false);
            }}
            className="relative text-gray-700 hover:text-blue-500 transition text-xl"
          >
            <FaBell />
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {notificationOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-100 shadow-lg rounded-lg z-20">
              <div className="p-3 border-b font-semibold text-gray-700">
                Notifications
              </div>
              <ul className="max-h-64 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((note) => (
                    <li
                      key={note.id}
                      className="px-4 py-2 hover:bg-gray-50 border-b border-gray-100 text-sm"
                    >
                      <p className="text-gray-800">{note.text}</p>
                      <p className="text-gray-400 text-xs">{note.time}</p>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-gray-500 text-center">
                    No new notifications
                  </li>
                )}
              </ul>
              <div className="text-center py-2 text-blue-600 hover:underline cursor-pointer text-sm">
                View all
              </div>
            </div>
          )}
        </div>

        {/* 👤 Profile Avatar */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationOpen(false);
            }}
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
                    <li
                      onClick={() => handleNavigate("/client/profile")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      👤 My Profile
                    </li>
                    <li
                      onClick={() => handleNavigate("/client/changepassword")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      🔒 Change Password
                    </li>
                    <li
                      onClick={() => handleNavigate("/client/settings")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      ⚙️ Settings
                    </li>
                  </>
                )}
                {userRole === "doctor" && (
                  <>
                    <li
                      onClick={() =>
                        handleNavigate("/doctordashboard/doctorprofilesection")
                      }
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      👤 My Profile
                    </li>
                    <li
                      onClick={() =>
                        handleNavigate("/doctordashboard/doctorchangepassword")
                      }
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      🔒 Change Password
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

      {/* Logout Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </nav>
  );
};

export default HeaderDashboard;
