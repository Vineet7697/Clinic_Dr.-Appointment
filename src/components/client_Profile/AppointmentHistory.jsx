import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUserMd, FaClock, FaHospitalAlt } from "react-icons/fa";
import data from "../../data.json"; // ✅ import JSON

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(data.Appointment_history || []);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 py-10 px-4 mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Appointment History
        </h2>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500">No appointments found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Doctor</th>
                  <th className="py-3 px-4 text-left">Specialization</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Time</th>
                  <th className="py-3 px-4 text-left">Hospital</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appt) => (
                  <tr
                    key={appt.id}
                    className="border-b hover:bg-gray-50 transition-all"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <FaUserMd className="text-blue-500 text-lg" />
                        <span className="whitespace-nowrap">{appt.doctorName}</span>
                      </div>
                    </td>

                    <td className="py-3 px-4">{appt.specialization}</td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-400 text-lg" />
                        {appt.date}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400 text-lg" />
                        {appt.time}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <FaHospitalAlt className="text-green-500 text-lg" />
                        {appt.hospital}
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${
                          appt.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : appt.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
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
        )}
      </div>
    </div>
  );
};

export default AppointmentHistory;
