import React, { useState } from "react";

const CurrentQueuePage = () => {
  // Mock Queue Data
  const [patients, setPatients] = useState([
    { tokenId: "T001", patientName: "Rohan Mehta", appointmentTime: "10:00 AM", status: "Consulting" },
    { tokenId: "T002", patientName: "Priya Sharma", appointmentTime: "10:20 AM", status: "Waiting" },
    { tokenId: "T003", patientName: "Amit Patel", appointmentTime: "10:40 AM", status: "Waiting" },
    { tokenId: "T004", patientName: "Sneha Kapoor", appointmentTime: "Walk-in", status: "Waiting" },
    { tokenId: "T005", patientName: "Drishti Verma", appointmentTime: "11:00 AM", status: "Waiting" },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("queue");

  // Handle Call Next Patient
  const callNextPatient = () => {
    setPatients((prev) => {
      const currentIndex = prev.findIndex((p) => p.status === "Consulting");
      const nextIndex = prev.findIndex((p) => p.status === "Waiting");

      if (nextIndex === -1) {
        alert("No more patients waiting!");
        return prev;
      }

      return prev.map((p, i) => {
        if (i === currentIndex) return { ...p, status: "Completed" };
        if (i === nextIndex) return { ...p, status: "Consulting" };
        return p;
      });
    });
  };

  const waitingCount = patients.filter((p) => p.status === "Waiting").length;
  const activePatient = patients.find((p) => p.status === "Consulting");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex mt-10">

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        

        {/* Main Page Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Current Queue
              </h2>
              <p className="text-gray-500">
                Manage and call patients in real-time order.
              </p>
            </div>
            <span className="mt-3 md:mt-0 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium shadow-sm">
              Patients Waiting: {waitingCount}
            </span>
          </div>

          {/* Queue List */}
          <div className="space-y-6">
            {/* Active Patient Card */}
            {activePatient && (
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-white text-teal-600 px-3 py-1 rounded-full font-semibold text-sm">
                    Now Consulting
                  </span>
                  <span className="text-sm font-light">
                    Token: {activePatient.tokenId}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {activePatient.patientName}
                </h3>
                <p className="text-sm opacity-90">
                  Appointment: {activePatient.appointmentTime}
                </p>
                <p className="text-sm opacity-90 mt-1">Doctor: Dr. Sharma</p>
              </div>
            )}

            {/* Waiting Patients */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {patients
                .filter((p) => p.status === "Waiting")
                .map((patient) => (
                  <div
                    key={patient.tokenId}
                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">
                        {patient.patientName}
                      </span>
                      <span className="text-sm text-gray-500">
                        {patient.tokenId}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">
                      Appointment: {patient.appointmentTime}
                    </p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {patient.status}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={callNextPatient}
              disabled={waitingCount === 0}
              className={`px-6 py-3 rounded-lg font-medium shadow transition ${
                waitingCount === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
            >
              Call Next Patient
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CurrentQueuePage;
