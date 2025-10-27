import React, { useEffect, useState } from "react";
import Sidebar from "../UI/Sidebar";
const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const userAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(userAppointments);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Appointment History</h3>
      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center py-6">No appointments yet</p>
      ) : (
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
              {appointments.map((appt, idx) => (
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
      )}
    </div>
  );
};

export default AppointmentHistory;
