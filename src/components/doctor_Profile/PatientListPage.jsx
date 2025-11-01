import React, { useState } from "react";
import Sidebar from "../UI/Sidebar"; // Reusable sidebar component

const PatientListPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("patients");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const patients = [
    { id: 1, name: "Rohan Mehta", status: "Waiting" },
    { id: 2, name: "Priya Sharma", status: "In Progress" },
    { id: 3, name: "Amit Patel", status: "Consulted" },
    { id: 4, name: "Sneha Kapoor", status: "Cancelled" },
    { id: 5, name: "Drishti Verma", status: "Waiting" },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Waiting":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-orange-100 text-orange-800";
      case "Consulted":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterStatus === "All" || p.status === filterStatus)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col md:flex-row mt-4">
      <div className="flex-1 flex flex-col w-full">
        <main className="p-4 sm:p-6 flex-1 overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-2 text-center sm:text-left">
            Today's Patients
          </h2>

          {/* Search & Filter */}
          <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search patients..."
                className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-teal-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="mt-2 sm:mt-0 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full sm:w-auto"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option>All</option>
                <option>Waiting</option>
                <option>In Progress</option>
                <option>Consulted</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          {/* Patient Table */}
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="min-w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-3 px-4 sm:px-6 font-semibold whitespace-nowrap">
                    Patient Name
                  </th>
                  <th className="py-3 px-4 sm:px-6 font-semibold whitespace-nowrap">
                    Status
                  </th>
                  <th className="py-3 px-4 sm:px-6 font-semibold whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 sm:px-6 whitespace-nowrap">
                      {p.name}
                    </td>
                    <td className="py-3 px-4 sm:px-6 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusClasses(
                          p.status
                        )}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 sm:px-6 flex flex-wrap gap-2 sm:space-x-3">
                      <button className="text-blue-600 hover:underline text-sm sm:text-base">
                        View
                      </button>
                      {p.status !== "Consulted" && p.status !== "Cancelled" && (
                        <>
                          <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm sm:text-base">
                            Mark as Consulted
                          </button>
                          <button className="border border-red-500 text-red-500 px-3 py-1 rounded-lg hover:bg-red-50 text-sm sm:text-base">
                            Cancel
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPatients.length === 0 && (
              <div className="text-center py-6 text-gray-500 text-sm sm:text-base">
                No patients found.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientListPage;
