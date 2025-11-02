import React, { useState } from "react";
import { FaUser, FaUsers, FaCalendarAlt, FaClock } from "react-icons/fa";
import { validateFamilyMember } from "../../controller/FormValidation";
import data from "../../data.json";
import { useNavigate, useParams } from "react-router-dom";

const BookAppointmentPage2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const doctor = data.doctor.find((doc) => doc.id === Number(id));

  const [patientType, setPatientType] = useState("self");
  const [familyMember, setFamilyMember] = useState({
    name: "",
    age: "",
    Aadhar: "",
    MobileNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedDateType, setSelectedDateType] = useState("today");
  const [customDate, setCustomDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // 🕒 Time slots for "Today"
  const todayTimeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = 10 + i;
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:00 ${ampm}`;
  });

  // 🕒 Default static slots for non-today (could be dynamic later)
  const defaultTimeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleConfirm = () => {
    if (patientType === "family") {
      const validationErrors = validateFamilyMember(familyMember);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    const selectedDate =
      selectedDateType === "today"
        ? "Today"
        : selectedDateType === "tomorrow"
        ? "Tomorrow"
        : customDate;

    if (!selectedTime) {
      alert("Please select a time slot!");
      return;
    }

    const bookingDetails = {
      doctor: doctor?.name,
      patientType,
      familyMember: patientType === "family" ? familyMember : null,
      selectedDate,
      selectedTime,
    };

    console.log("✅ Appointment Confirmed:", bookingDetails);
    alert("✅ Appointment Confirmed Successfully!");
    navigate("/patientqueuepage");
  };

  const currentTimeSlots =
    selectedDateType === "today" ? todayTimeSlots : defaultTimeSlots;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 mt-10">
      <div className="bg-white flex flex-col items-center  rounded-2xl shadow-2xl w-full max-w-4xl p-8 h-[80vh]">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Book Appointment for {doctor?.name || "Doctor"}
        </h3>

        {/* 🧍 Patient Type */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => setPatientType("self")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
              patientType === "self"
                ? "bg-teal-500 text-white border-teal-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaUser /> Self
          </button>

          <button
            onClick={() => navigate(`/addfamilypage`)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
              patientType === "family"
                ? "bg-teal-500 text-white border-teal-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaUsers /> Add Family Member
          </button>
        </div>

        {/* 👨‍👩‍👦 Family Form */}
        {patientType === "family" && (
          <div className="mb-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={familyMember.name}
              onChange={(e) =>
                setFamilyMember({ ...familyMember, name: e.target.value })
              }
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="number"
              placeholder="Age"
              value={familyMember.age}
              onChange={(e) =>
                setFamilyMember({ ...familyMember, age: e.target.value })
              }
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              placeholder="Aadhar Number"
              value={familyMember.Aadhar}
              onChange={(e) =>
                setFamilyMember({ ...familyMember, Aadhar: e.target.value })
              }
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={familyMember.MobileNumber}
              onChange={(e) =>
                setFamilyMember({
                  ...familyMember,
                  MobileNumber: e.target.value,
                })
              }
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        )}

        {/* 📅 Date Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedDateType("today")}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedDateType === "today"
                ? "bg-teal-500 text-white border-teal-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Today
          </button>

          <button
            onClick={() => setSelectedDateType("tomorrow")}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedDateType === "tomorrow"
                ? "bg-teal-500 text-white border-teal-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Tomorrow
          </button>

          <div className="flex items-center gap-2">
            <input
              type="date"
              value={customDate}
              onChange={(e) => {
                setSelectedDateType("custom");
                setCustomDate(e.target.value);
              }}
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
            />
            <FaCalendarAlt className="text-teal-500" />
          </div>
        </div>

        {/* 🕐 Time Slots */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-8">
          {currentTimeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 rounded-lg text-sm transition flex items-center justify-center gap-2 ${
                selectedTime === time
                  ? "bg-teal-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-teal-100"
              }`}
            >
              <FaClock /> {time}
            </button>
          ))}
        </div>

        {/* ✅ Confirm Button */}
        <button
          onClick={handleConfirm}
          className="px-4 py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold text-lg shadow-lg hover:from-teal-500 hover:to-cyan-600 transition"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentPage2;
