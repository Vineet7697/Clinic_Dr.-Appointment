// import React, { useState } from "react";
// import {
//   FaUser,
//   FaHistory,
//   FaUsers,
//   FaCog,
//   FaEdit,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const ClientProfilePage = () => {
//   const [activeSection, setActiveSection] = useState("profile");

//   const [personalDetails, setPersonalDetails] = useState({
//     name: "Jane Doe",
//     email: "jane@example.com",
//     phone: "+91 9876543210",
//   });

//   const [appointmentHistory, setAppointmentHistory] = useState([
//     { date: "2025-10-10", doctor: "Dr. Ananya Sharma", status: "Completed" },
//     { date: "2025-10-18", doctor: "Dr. Priya Singh", status: "Upcoming" },
//   ]);

//   const [familyMembers, setFamilyMembers] = useState([
//     { name: "John Doe", relation: "Husband" },
//     { name: "Emily Doe", relation: "Daughter" },
//   ]);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     window.location.href = "/clientloginpage";
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case "profile":
//         return (
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
//             <div className="grid md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-gray-600 mb-1">Name</label>
//                 <input
//                   type="text"
//                   value={personalDetails.name}
//                   onChange={(e) =>
//                     setPersonalDetails({ ...personalDetails, name: e.target.value })
//                   }
//                   className="w-full border rounded-lg p-2 outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-600 mb-1">Email</label>
//                 <input
//                   type="email"
//                   value={personalDetails.email}
//                   onChange={(e) =>
//                     setPersonalDetails({ ...personalDetails, email: e.target.value })
//                   }
//                   className="w-full border rounded-lg p-2 outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-600 mb-1">Phone</label>
//                 <input
//                   type="text"
//                   value={personalDetails.phone}
//                   onChange={(e) =>
//                     setPersonalDetails({ ...personalDetails, phone: e.target.value })
//                   }
//                   className="w-full border rounded-lg p-2 outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         );

//       case "appointments":
//         return (
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-xl font-semibold mb-4">Appointment History</h3>
//             {appointmentHistory.length === 0 ? (
//               <p className="text-gray-500 text-center py-6">No appointments yet</p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left">
//                   <thead>
//                     <tr className="border-b border-gray-200">
//                       <th className="p-2">Date</th>
//                       <th className="p-2">Doctor</th>
//                       <th className="p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {appointmentHistory.map((appt, idx) => (
//                       <tr key={idx} className="border-b border-gray-100">
//                         <td className="p-2">{appt.date}</td>
//                         <td className="p-2">{appt.doctor}</td>
//                         <td className="p-2">
//                           <span
//                             className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${
//                               appt.status === "Completed"
//                                 ? "bg-green-100 text-green-700"
//                                 : "bg-blue-100 text-blue-700"
//                             }`}
//                           >
//                             {appt.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         );

//       case "family":
//         return (
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold">Family Members</h3>
//               <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
//                 Add Member
//               </button>
//             </div>
//             {familyMembers.length === 0 ? (
//               <p className="text-gray-500 text-center py-4">
//                 No family members added yet.
//               </p>
//             ) : (
//               <ul className="list-disc list-inside space-y-1">
//                 {familyMembers.map((member, idx) => (
//                   <li key={idx}>
//                     {member.name} ({member.relation})
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         );

//       case "settings":
//         return (
//           <div className="bg-white rounded-2xl shadow-md p-6 text-gray-700">
//             <h3 className="text-xl font-semibold mb-4">Settings</h3>
//             <p>Settings options will go here...</p>
//           </div>
//         );

//       case "edit":
//         return (
//           <div className="bg-white rounded-2xl shadow-md p-6 text-gray-700">
//             <h3 className="text-xl font-semibold mb-4">Edit Center</h3>
//             <p>Edit profile or preferences here...</p>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-blue-100 to-blue-300">
//       {/* Sidebar */}
//       <aside className="bg-white w-64 p-6 shadow-lg flex flex-col">
//         <div className="mb-8 flex items-center gap-2">
//           <FaUser className="text-teal-500 text-2xl" />
//           <h1 className="text-xl font-bold text-gray-800">Yo Doctor</h1>
//         </div>

//         <nav className="flex-1 space-y-3">
//           <div
//             className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
//               activeSection === "profile"
//                 ? "bg-teal-500 text-white"
//                 : "hover:bg-teal-50"
//             }`}
//             onClick={() => setActiveSection("profile")}
//           >
//             <FaUser /> Profile
//           </div>

//           <div
//             className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
//               activeSection === "appointments"
//                 ? "bg-teal-500 text-white"
//                 : "hover:bg-teal-50"
//             }`}
//             onClick={() => setActiveSection("appointments")}
//           >
//             <FaHistory /> Appointment History
//           </div>

//           <div
//             className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
//               activeSection === "family"
//                 ? "bg-teal-500 text-white"
//                 : "hover:bg-teal-50"
//             }`}
//             onClick={() => setActiveSection("family")}
//           >
//             <FaUsers /> Family Members
//           </div>

//           <div
//             className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
//               activeSection === "settings"
//                 ? "bg-teal-500 text-white"
//                 : "hover:bg-teal-50"
//             }`}
//             onClick={() => setActiveSection("settings")}
//           >
//             <FaCog /> Settings
//           </div>

//           <div
//             className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
//               activeSection === "edit"
//                 ? "bg-teal-500 text-white"
//                 : "hover:bg-teal-50"
//             }`}
//             onClick={() => setActiveSection("edit")}
//           >
//             <FaEdit /> Edit
//           </div>

//           <div
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 hover:text-red-600 cursor-pointer"
//             onClick={handleLogout}
//           >
//             <FaSignOutAlt /> Logout
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 space-y-6 overflow-y-auto">
//         <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
//         {renderSection()}
//       </main>
//     </div>
//   );
// };

// export default ClientProfilePage;

// import React, { useState } from "react";
// import Sidebar from "../components/UI/Sidebar";
// import ProfileSection from "../components/ProfileSections/ProfileSection";
// import AppointmentHistory from "../components/ProfileSections/AppointmentHistory";
// import FamilyMembers from "../components/ProfileSections/FamilyMembers";
// import SettingsSection from "../components/ProfileSections/SettingsSection";
// import EditSection from "../components/ProfileSections/EditSection";

// const ClientProfilePage = () => {
//   const [activeSection, setActiveSection] = useState("profile");
//   const [personalDetails, setPersonalDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     window.location.href = "/clientloginpage";
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case "profile":
//         return (
//           <ProfileSection
//             personalDetails={personalDetails}
//             setPersonalDetails={setPersonalDetails}
//           />
//         );
//       case "appointments":
//         return <AppointmentHistory />;
//       case "family":
//         return <FamilyMembers />;
//       case "settings":
//         return <SettingsSection />;
//       case "edit":
//         return <EditSection />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-blue-100 to-blue-300">
//       <Sidebar
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//       />
      
//     </div>
//   );
// };

// export default ClientProfilePage;


import React, { useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import ProfileSection from "../components/ProfileSections/ProfileSection";
import AppointmentHistory from "../components/ProfileSections/AppointmentHistory";
import FamilyMembers from "../components/ProfileSections/FamilyMembers";
import SettingsSection from "../components/ProfileSections/SettingsSection";
import EditSection from "../components/ProfileSections/EditSection";

const ClientProfilePage = () => {
  const [activeNav, setActiveNav] = useState("profile");
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-100 to-blue-300">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="flex-1 p-6 ml-64 space-y-6 overflow-y-auto mt-20">
        {activeNav === "profile" && (
          <ProfileSection
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
        )}
        {activeNav === "appointments" && <AppointmentHistory />}
        {activeNav === "family" && <FamilyMembers />}
        {activeNav === "settings" && <SettingsSection />}
        {activeNav === "edit" && <EditSection />}
      </main>
    </div>
  );
};

export default ClientProfilePage;
