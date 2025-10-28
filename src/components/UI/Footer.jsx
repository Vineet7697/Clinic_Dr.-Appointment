import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#28328c] text-white pt-10 pb-6">
      {/* TOP GRID SECTION */}
      <div className="max-w-7xl mx-auto  justify-around px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Yo Doctor */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Yo Doctor</span>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
          <a href="#" className="hover:text-gray-300">Career</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>

        {/* For Patients */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">For Patients</span>
          <a href="#" className="hover:text-gray-300">Ask Free Health Questions</a>
          <a href="#" className="hover:text-gray-300">Search for Doctors</a>
          <a href="#" className="hover:text-gray-300">Search for Clinics</a>
          <a href="#" className="hover:text-gray-300">Search for Hospitals</a>
          <a href="#" className="hover:text-gray-300">Book Diagnostic Tests</a>
          <a href="#" className="hover:text-gray-300">Book Full Body Checkups</a>
        </div>

        {/* For Doctors */}
        <div className="flex flex-col gap-2 ml-6">
          <span className="font-semibold text-lg">For Doctors</span>
          <a href="#" className="hover:text-gray-300">Yo Doctor Consult</a>
          <a href="#" className="hover:text-gray-300">Yo Doctor Health Feed</a>
          <a href="#" className="hover:text-gray-300">Yo Doctor Profile</a>
          <a href="#" className="hover:text-gray-300">For Clinics</a>
          <a href="#" className="hover:text-gray-300">Yo Doctor Prime</a>
        </div>

        {/* For Hospitals */}
        <div className="flex flex-col gap-2 ml-6">
          <span className="font-semibold text-lg">For Hospitals</span>
          <a href="#" className="hover:text-gray-300">Insta by Yo Doctor</a>
          <a href="#" className="hover:text-gray-300">Yo Doctor Profile</a>
          <a href="#" className="hover:text-gray-300">Yo Doctor Reach</a>
        </div>

        {/* More */}
        <div className="flex flex-col gap-2 ml-6">
          <span className="font-semibold text-lg">More</span>
          <a href="#" className="hover:text-gray-300">Help</a>
          <a href="#" className="hover:text-gray-300">Developers</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-300">PCS T&C</a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Social</span>
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
          <a href="#" className="hover:text-gray-300">YouTube</a>
          <a href="#" className="hover:text-gray-300">GitHub</a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-500 mt-10 mb-6 mx-6"></div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col items-center justify-center text-center gap-3 px-4">
        <p className="text-[#B8BBD9] text-sm">
          Copyright &copy; 2025, <span className="font-semibold">Yo Doctor</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
