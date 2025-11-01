import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * DoctorProfileModal.js
 *
 * Props:
 * - doctor: { name, specialization, clinic, availability }
 * - isOpen: boolean
 * - onClose: function
 *
 * Fully responsive, Tailwind CSS styled modal
 */

const DoctorProfileModal = ({ doctor, isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !doctor) return null;

  const handleViewProfile = () => {
    onClose(); // close modal first
    navigate("/bookappointmentpage2"); // redirect
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 z-50 p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {doctor.name}
        </h2>

        {/* Avatar & Details */}
        <div className="flex items-center gap-6 mb-6">
          {/* Avatar Placeholder */}
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-xl">
            {doctor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          {/* Doctor Details */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">
                Specialization:{" "}
              </span>
              {doctor.specialization}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Clinic: </span>
              {doctor.clinic}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">
                Availability:{" "}
              </span>
              {doctor.availability}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          >
            Book Appointment
          </button>
          <button
            onClick={handleViewProfile} // ✅ redirect to BookAppointmentPage2
            className="px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition"
          >
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileModal;
