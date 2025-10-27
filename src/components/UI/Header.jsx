
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { UserCircle } from "lucide-react";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const navigate = useNavigate();

//   // 🔹 Local storage se logged user
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//   const userRole = loggedInUser?.role; // doctor ya client

//   // 🔹 Logout
//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setProfileOpen(false);
//     navigate("/"); // home page pe bhej do
//   };

//   // 🔹 Navigation
//   const handleNavigate = (path) => {
//     setProfileOpen(false);
//     navigate(path);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
//       {/* LEFT SECTION */}
//       <div className="flex items-center gap-6">
//         {/* Hamburger (mobile) */}
//         <div className="flex items-center gap-3">
//           <div className="md:hidden mr-2">
//             {menuOpen ? (
//               <FaTimes
//                 size={22}
//                 onClick={() => setMenuOpen(false)}
//                 className="cursor-pointer text-gray-800"
//               />
//             ) : (
//               <FaBars
//                 size={22}
//                 onClick={() => setMenuOpen(true)}
//                 className="cursor-pointer text-gray-800"
//               />
//             )}
//           </div>

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <img src="/images/yo.png" alt="Logo" className="h-10" />
//           </Link>
//         </div>

//         {/* Menu links (sirf static links) */}
//         <div className="hidden md:flex gap-6 text-gray-700 font-medium">
//           <Link to="/finddoctor" className="hover:text-blue-600 text-black">
//             Find Doctors
//           </Link>
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="flex items-center gap-7 relative">
//         {/* Agar koi login hai to profile icon dikhao */}
//         {loggedInUser && (
//           <div className="relative">
//             <button
//               onClick={() => setProfileOpen(!profileOpen)}
//               className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition"
//             >
//               <UserCircle size={30} className="text-gray-700" />
//             </button>

//             {/* Dropdown */}
//             {profileOpen && (
//               <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-100 z-20">
//                 <ul className="py-2 text-gray-700">
//                   {userRole === "client" ? (
//                     <>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/clientprofilepage")}
//                       >
//                         My Profile
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/appointmenthistory")}
//                       >
//                         Appointment History
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/familymembers")}
//                       >
//                         Family Members
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/settings")}
//                       >
//                         Settings
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/editprofile")}
//                       >
//                         Edit
//                       </li>
//                     </>
//                   ) : userRole === "doctor" ? (
//                     <>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/dashboard")}
//                       >
//                         🏠 Dashboard
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/patients")}
//                       >
//                         🧑‍⚕ Today's Patients
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/queue")}
//                       >
//                         🧾 Current Queue
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/passverification")}
//                       >
//                         ✅ Pass Verification
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/notifications")}
//                       >
//                         💬 Message / Notification
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/analytics")}
//                       >
//                         💹 Analytics / Charts
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleNavigate("/settings")}
//                       >
//                         ⚙ Settings
//                       </li>
//                     </>
//                   ) : null}

//                   {/* Logout */}
//                   <li
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 font-medium border-t mt-1"
//                     onClick={handleLogout}
//                   >
//                     🚪 Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserCircle } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  // 🔹 Local storage se logged user
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userRole = loggedInUser?.role; // doctor ya client

  // 🔹 Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setProfileOpen(false);
    navigate("/"); // home page pe bhej do
  };

  // 🔹 Navigation
  const handleNavigate = (path) => {
    setProfileOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">
        {/* Hamburger (mobile) */}
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

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/yo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Menu links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/finddoctor" className="hover:text-blue-600 text-black">
            Find Doctors
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-7 relative">
        {/* Agar koi login hai to profile icon dikhao */}
        {loggedInUser && (
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition"
            >
              <UserCircle size={30} className="text-gray-700" />
            </button>

            {/* Dropdown */}
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
                        onClick={() => handleNavigate("/client/appointments")}
                      >
                        Appointment History
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/client/family")}
                      >
                        Family Members
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/client/settings")}
                      >
                        Settings
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/client/edit")}
                      >
                        Edit
                      </li>
                    </>
                  ) : userRole === "doctor" ? (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/doctordashboard/dashboard")}
                      >
                        🏠 Dashboard
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/doctordashboard/patients")}
                      >
                        🧑‍⚕ Today's Patients
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/doctordashboard/queue")}
                      >
                        🧾 Current Queue
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/doctordashboard/passverification")}
                      >
                        ✅ Pass Verification
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/doctordashboard/notifications")}
                      >
                        💬 Message / Notification
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/doctordashboard/analytics")}
                      >
                        💹 Analytics / Charts
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/doctordashboard/settings")}
                      >
                        ⚙ Settings
                      </li>
                    </>
                  ) : null}

                  {/* Logout */}
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
    </nav>
  );
};

export default Header;
