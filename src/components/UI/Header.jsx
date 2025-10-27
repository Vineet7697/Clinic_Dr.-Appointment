import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { UserCircle } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu
  const [softwareOpen, setSoftwareOpen] = useState(false); // Mobile dropdown
  const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setProfileOpen(false);
    navigate("/clientloginpage");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">
        {/* Hamburger + Logo */}
        <div className="flex items-center gap-3">
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

          <Link to="/" className="flex items-center gap-2">
            <img src="/images/yo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/finddoctor" className="hover:text-blue-600">
            Find Doctors
          </Link>
          <Link to="/videoconsult" className="hover:text-blue-600">
            Video Consult
          </Link>
          <Link to="/hospital" className="hover:text-blue-600">
            Find Hospital
          </Link>
          <Link to="/clinic" className="hover:text-blue-600">
            Find Clinic
          </Link>

          {/* For Software Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600">
              For Software <FaChevronDown size={12} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
              <ul className="text-gray-700 text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Software for Clinic
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Software for Hospital
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        {loggedInUser && (
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition"
            >
              <UserCircle size={30} className="text-gray-700" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-20">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <FaTimes
            size={22}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer text-gray-700"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-3 py-4 px-6 text-gray-800 font-medium">
          <li>
            <Link
              to="/finddoctor"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Find Doctors
            </Link>
          </li>
          <li>
            <Link
              to="/videoconsult"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Video Consult
            </Link>
          </li>
          <li>
            <Link
              to="/hospital"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Find Hospital
            </Link>
          </li>
          <li>
            <Link
              to="/clinic"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Find Clinic
            </Link>
          </li>

          {/* For Software Dropdown */}
          <li>
            <button
              onClick={() => setSoftwareOpen(!softwareOpen)}
              className="w-full flex items-center justify-between py-2 hover:text-blue-600"
            >
              For Software
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  softwareOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {softwareOpen && (
              <ul className="ml-4 mt-2 border-l border-gray-200 pl-4 text-sm text-gray-700">
                <li
                  className="py-1 hover:text-blue-600 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Software for Clinic
                </li>
                <li
                  className="py-1 hover:text-blue-600 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Software for Hospital
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
