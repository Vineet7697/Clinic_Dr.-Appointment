import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserCircle } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userRole = loggedInUser?.role;

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setProfileOpen(false);
    navigate("/");
  };

  // Navigation
  const handleNavigate = (path) => {
    setProfileOpen(false);
    navigate(path);
  };

  // Click outside profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    if (profileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        {/* Hamburger menu (mobile only) */}
        <div className="md:hidden mr-2">
          {menuOpen ? (
            <FaTimes
              size={22}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-gray-800"
            />
          ) : (
            <FaBars
              size={22}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer text-gray-800"
            />
          )}
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/yo.png" alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6 relative">
        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/finddoctor" className="hover:text-blue-600 text-black">
            About
          </Link>
          <Link to="/finddoctor" className="hover:text-blue-600 text-black">
            Service
          </Link>
          <Link to="/finddoctor" className="hover:text-blue-600 text-black">
            Contact
          </Link>
          <Link to="/finddoctor" className="hover:text-blue-600 text-black">
            Help
          </Link>
        </div>
<button className="px-5 py-2 rounded-full bg-[#00b3ff] text-white hover:bg-[#009ee0] transition">
            Download App
          </button>
        {/* Profile dropdown */}
        {loggedInUser && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition"
            >
              <UserCircle size={30} className="text-gray-700" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-100 z-20">
                <ul className="py-2 text-gray-700">
                  {userRole === "client" ? (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/client/profile")}
                      >
                        My Profile
                      </li>
                     
                     
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/client/settings")}
                      >
                        Settings
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/client/changepassword")}
                      >
                       ChangePassword
                      </li>
                    </>
                  ) : userRole === "doctor" ? (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleNavigate("/doctordashboard/dashboard")
                        }
                      >
                        🏠 Dashboard
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleNavigate("/doctordashboard/patients")
                        }
                      >
                        🧑‍⚕ Today's Patients
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleNavigate("/doctordashboard/queue")
                        }
                      >
                        🧾 Current Queue
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleNavigate("/doctordashboard/passverification")
                        }
                      >
                        ✅ Pass Verification
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleNavigate("/doctordashboard/notifications")
                        }
                      >
                        💬 Message / Notification
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleNavigate("/doctordashboard/analytics")
                        }
                      >
                        💹 Analytics / Charts
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleNavigate("/doctordashboard/settings")
                        }
                      >
                        ⚙ Settings
                      </li>
                    </>
                  ) : null}

                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 font-medium border-t mt-1"
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
         
          <FaTimes
            size={22}
            className="cursor-pointer text-gray-700"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col mt-4 space-y-3 px-5 text-gray-700 font-medium">
          <Link
            to="/finddoctor"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/finddoctor"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/finddoctor"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Service
          </Link>
          <Link
            to="/finddoctor"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/finddoctor"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Help
          </Link>
        </ul>
      </div>
      
    </nav>
  );
};

export default Header;
