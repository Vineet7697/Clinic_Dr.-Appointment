import React, { useState } from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookAppointmentPage2 = () => {
  const navigate = useNavigate(); // ✅ add useNavigate
  const [patientType, setPatientType] = useState("self");
  const [familyMember, setFamilyMember] = useState({ name: "", age: "", relationship: "" });
  const [selectedDate, setSelectedDate] = useState("16");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM", "3:00 PM"];

  const handleConfirm = () => {
    const bookingDetails = {
      patientType,
      familyMember: patientType === "family" ? familyMember : null,
      selectedDate,
      selectedTime,
    };
    console.log("Appointment Confirmed:", bookingDetails);
    alert("Appointment Confirmed!");

    // ✅ Redirect to PatientQueuePage
    navigate("/patientqueuepage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Book Appointment with Dr. Ananya Sharma
        </h1>

        {/* Patient Type Selection */}
        <div className="flex flex-col md:flex-row md:justify-center gap-6 mb-6">
          {/* Self */}
          <div
            onClick={() => setPatientType("self")}
            className={`flex-1 flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition border ${
              patientType === "self"
                ? "border-teal-500 bg-teal-50"
                : "border-gray-200 bg-white hover:bg-gray-50"
            }`}
          >
            <FaUser className={`text-4xl mb-2 ${patientType === "self" ? "text-teal-500" : "text-gray-400"}`} />
            <span className="font-semibold text-gray-700">Self</span>
          </div>

          {/* Family */}
          <div
            onClick={() => setPatientType("family")}
            className={`flex-1 flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition border ${
              patientType === "family"
                ? "border-teal-500 bg-teal-50"
                : "border-gray-200 bg-white hover:bg-gray-50"
            }`}
          >
            <FaUsers className={`text-4xl mb-2 ${patientType === "family" ? "text-teal-500" : "text-gray-400"}`} />
            <span className="font-semibold text-gray-700">Family</span>
          </div>
        </div>

        {/* Family Form */}
        {patientType === "family" && (
          <div className="mb-6 grid md:grid-cols-3 gap-4">
            <input
              type="text"
              value={familyMember.name}
              onChange={(e) => setFamilyMember({ ...familyMember, name: e.target.value })}
              placeholder="Name"
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="number"
              value={familyMember.age}
              onChange={(e) => setFamilyMember({ ...familyMember, age: e.target.value })}
              placeholder="Age"
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              value={familyMember.relationship}
              onChange={(e) => setFamilyMember({ ...familyMember, relationship: e.target.value })}
              placeholder="Relationship"
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        )}

        {/* Date & Time Selectors */}
        <div className="md:flex md:gap-8 mb-8">
          <div className="grid grid-cols-7 gap-2 mb-4 md:mb-0 md:flex-1">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(String(date))}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                  selectedDate === String(date) ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-teal-100"
                }`}
              >
                {date}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 md:flex-1">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-lg transition ${
                  selectedTime === time ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-teal-100"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold text-lg shadow-lg hover:from-teal-500 hover:to-cyan-600 transition"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentPage2;
