import React, { useState } from "react";
import {
  FaUser,
  FaHistory,
  FaUsers,
  FaSignOutAlt,
  FaSearch,
  FaEdit,
} from "react-icons/fa";

const ClientProfilePage = () => {
  // Sidebar state for mobile collapsible behavior
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Personal details state
  const [personalDetails, setPersonalDetails] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+91 9876543210",
  });

  // Appointment history mock data
  const appointmentHistory = [
    { date: "2025-10-10", doctor: "Dr. Ananya Sharma", status: "Completed" },
    { date: "2025-10-16", doctor: "Dr. Ravi Kumar", status: "Upcoming" },
    { date: "2025-10-18", doctor: "Dr. Priya Singh", status: "Upcoming" },
  ];

  // Family members mock data
  const [familyMembers, setFamilyMembers] = useState([
    { name: "John Doe", relation: "Husband" },
    { name: "Emily Doe", relation: "Daughter" },
  ]);

  const handlePersonalChange = (field, value) => {
    setPersonalDetails({ ...personalDetails, [field]: value });
  };

  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div
      className="min-h-screen flex bg-gradient-to-br from-blue-100 to-blue-300"
      style={{
        backgroundImage: "url('/path-to-medical-pattern.svg')", // Optional subtle medical pattern
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } bg-white w-64 p-6 shadow-lg flex flex-col`}
      >
        <div className="mb-8 flex items-center gap-2">
          <FaUser className="text-teal-500 text-2xl" />
          <h1 className="text-xl font-bold text-gray-800">Yo Doctor</h1>
        </div>

        <nav className="flex-1 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-teal-500 text-white cursor-pointer">
            <FaUser /> Profile
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50 cursor-pointer">
            <FaHistory /> History
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50 cursor-pointer">
            <FaUsers /> Family
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 hover:text-red-600 cursor-pointer">
            <FaSignOutAlt /> Logout
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 shadow-sm bg-white">
          <button
            className="md:hidden px-2 py-1 bg-teal-500 text-white rounded"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Menu
          </button>
          <h2 className="text-2xl font-bold text-gray-800 text-center flex-1">
            My Profile
          </h2>
          <button className="text-gray-600 hover:text-gray-800">
            <FaSearch className="text-xl" />
          </button>
        </header>

        {/* Profile Sections */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Personal Details */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">Name</label>
                <div className="flex items-center border rounded-lg p-2">
                  <input
                    type="text"
                    value={personalDetails.name}
                    onChange={(e) =>
                      handlePersonalChange("name", e.target.value)
                    }
                    className="w-full outline-none"
                  />
                  <FaEdit className="text-gray-400 ml-2 cursor-pointer" />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={personalDetails.email}
                  onChange={(e) =>
                    handlePersonalChange("email", e.target.value)
                  }
                  className="w-full border rounded-lg p-2 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Phone</label>
                <input
                  type="text"
                  value={personalDetails.phone}
                  onChange={(e) =>
                    handlePersonalChange("phone", e.target.value)
                  }
                  className="w-full border rounded-lg p-2 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Appointment History */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Appointment History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-2">Date</th>
                    <th className="p-2">Doctor</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentHistory.map((appt, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="p-2">{appt.date}</td>
                      <td className="p-2">{appt.doctor}</td>
                      <td className="p-2">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${
                            appt.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {appt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Family Members */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Family Members</h3>
              <div className="flex gap-2">
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                  Add Member
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
                  Edit Center
                </button>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {familyMembers.map((member, idx) => (
                <li key={idx}>
                  {member.name} ({member.relation})
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <div className="flex justify-end">
            <button
              onClick={handleLogout}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow"
            >
              Logout
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientProfilePage;
