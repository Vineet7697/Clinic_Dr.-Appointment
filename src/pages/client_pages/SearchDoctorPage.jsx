import React, { useState } from "react";
import DoctorProfileModal from "../doctor_pages/DoctorProfileModal";

/**
 * SearchDoctorPage.js
 *
 * - Single-file React functional component
 * - Tailwind CSS only
 * - Search bar with filter button
 * - Responsive doctor card grid
 * - Mock data for doctors
 */

const SearchDoctorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Rohan Mehta",
      specialty: "Cardiologist",
      experience: "10 years",
      rating: 4.5,
      fee: 1200,
    },
    {
      id: 2,
      name: "Dr. Anjali Singh",
      specialty: "Dermatologist",
      experience: "8 years",
      rating: 4.8,
      fee: 800,
    },
    {
      id: 3,
      name: "Dr. Vikram Patel",
      specialty: "Orthopedic",
      experience: "12 years",
      rating: 4.3,
      fee: 1500,
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      specialty: "Pediatrician",
      experience: "9 years",
      rating: 4.7,
      fee: 1000,
    },
  ];

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialty}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      {/* Placeholder: faint medical icon background */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold text-teal-600">Yo Doctor</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            U
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="flex flex-1 items-center bg-white rounded-full shadow px-4 py-2">
            {/* Magnifying glass icon placeholder */}
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search by name, specialty, or city"
              className="flex-1 outline-none rounded-full px-2 py-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-teal-500 text-teal-500 rounded-full hover:bg-teal-50 transition">
            {/* Filter icon placeholder */}
            <span className="mr-2">⚙</span> Filter
          </button>
        </div>

        <button
          onClick={() => {
            setSelectedDoctor(doctor);
            setIsModalOpen(true);
          }}
          className="flex-1 border border-teal-500 text-teal-500 rounded-full py-2 hover:bg-teal-50 transition"
        >
          View Profile
        </button>

        <DoctorProfileModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow p-6 flex flex-col justify-between"
              >
                {/* Doctor Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-xl">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-500">{doctor.specialty}</p>
                  </div>
                </div>

                {/* Experience & Fee */}
                <div className="mb-4 flex justify-between text-gray-600 text-sm">
                  <span>Experience: {doctor.experience}</span>
                  <span>Fee: ₹{doctor.fee}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <span
                      key={idx}
                      className={`text-sm mr-1 ${
                        idx < Math.floor(doctor.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-gray-500 text-sm ml-2">
                    {doctor.rating.toFixed(1)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 bg-teal-500 text-white rounded-full py-2 hover:bg-teal-600 transition">
                    Book Appointment
                  </button>
                  <button
                    onClick={() => {
                      setSelectedDoctor(doctor);
                      setIsModalOpen(true);
                    }}
                    className="flex-1 border border-teal-500 text-teal-500 rounded-full py-2 hover:bg-teal-50 transition"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-20">
              No doctors found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDoctorPage;
