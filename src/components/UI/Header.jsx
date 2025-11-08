import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userRole = loggedInUser?.role;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
      {/* LEFT SECTION - Logo + Hamburger */}
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile only) */}
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

      {/* CENTER SECTION - Navigation Links */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link to="/about" className="hover:text-blue-600 text-black">
          About
        </Link>
        <Link to="/service" className="hover:text-blue-600 text-black">
          Services
        </Link>
        <Link to="/contact" className="hover:text-blue-600 text-black">
          Contact
        </Link>
        <Link to="/help" className="hover:text-blue-600 text-black">
          Help
        </Link>
      </div>

      {/* RIGHT SECTION - Download Button */}
      <div className="flex items-center gap-6">
        <button className="px-5 py-2 rounded-full bg-[#00b3ff] text-white hover:bg-[#009ee0] transition">
          Download App
        </button>
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
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/service"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/help"
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
