import { useState, useRef } from "react";
import {NavLink, Link, useNavigate } from "react-router-dom";
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
      <div className="hidden md:flex gap-8 font-medium">
        {[
          { name: "About", path: "/about" },
          { name: "Services", path: "/service" },
          { name: "Contact", path: "/contact" },
          { name: "Help", path: "/help" },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-black hover:text-blue-600 pb-1 border-b-3 transition 
         ${isActive ? "border-[#14BEF0]" : "border-transparent"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
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
