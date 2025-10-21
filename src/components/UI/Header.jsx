
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false); // Dropdown state
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger state
  const [softwareOpen, setSoftwareOpen] = useState(false); // Mobile "For Software" dropdown

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">
        {/* Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Icon (visible only on mobile/tablet) */}
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
          <Link to="/finddoctor" className="hover:text-blue-600 text-black">
            Find Doctors
          </Link>
          <Link to="/videoconsult" className="hover:text-blue-600 text-black">
            Video Consult
          </Link>
          <Link to="/hospital" className="hover:text-blue-600 text-black">
            Find Hospital
          </Link>
          <Link to="/clinic" className="hover:text-blue-600 text-black">
            Find Clinic
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION (Desktop only) */}
      <div className="flex items-center gap-7 relative">
        {/* Dropdown For Software (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
          >
            For Software
            <FaChevronDown
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-5 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-20">
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Software for Clinic
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Software for Hospital
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ✅ Signup/Login with border fix */}
        <div>
          <Link to="/signup">
            <button className="text-[#737382] border border-gray-400 px-4 py-1 rounded-md hover:border-blue-600 hover:text-blue-600 transition cursor-pointer">
              SignUp / Login
            </button>
          </Link>
        </div>
      </div>

      {/* 🔹 Mobile/Tablet Left Slide Hamburger Menu */}
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

          {/* 🔹 For Software (inside mobile menu) */}
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
