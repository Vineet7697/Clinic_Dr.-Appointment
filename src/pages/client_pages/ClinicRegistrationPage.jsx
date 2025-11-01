import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const ClinicRegistrationPage = () => {
  // Doctor Info
  const [doctorName, setDoctorName] = useState("");
  const [degree, setDegree] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [specialization, setSpecialization] = useState("");

  // Clinic Info
  const [clinicName, setClinicName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  // Consultation Details
  const [consultationFee, setConsultationFee] = useState("");
  const [timings, setTimings] = useState("");
  const [availableDays, setAvailableDays] = useState({
    monFri: false,
    satSun: false,
  });



  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAvailableDays({ ...availableDays, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      doctorName,
      degree,
      licenseNumber,
      specialization,
      clinicName,
      address,
      city,
      consultationFee,
      timings,
      availableDays,
    };
    console.log("Form submitted:", formData);
    alert("Clinic registration submitted!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4 py-12"
      style={{
        backgroundImage:
          "url('/path-to-medical-pattern.svg')", // Placeholder for faint medical icons
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Register Your Clinic on Yo Doctor
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Doctor Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Doctor Information
            </h2>
            <div className="md:grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-gray-600 mb-1">Doctor Name</label>
                <input
                  type="text"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  placeholder="Dr. John Doe"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Degree</label>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                >
                  <option value="">Select Degree</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD">MD</option>
                  <option value="DO">DO</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">License Number</label>
                <input
                  type="text"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  placeholder="ABC123456"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Specialization</label>
                <textarea
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="Cardiology, General Medicine..."
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Clinic Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Clinic Information
            </h2>
            <div className="md:grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-gray-600 mb-1">Clinic Name</label>
                <input
                  type="text"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  placeholder="HealthCare Clinic"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main Street"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Mumbai"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div className="flex flex-col justify-end">
                <button
                  type="button"
                  className="flex items-center justify-center border border-teal-500 text-teal-500 rounded-lg py-2 px-4 w-full hover:bg-teal-50 transition"
                >
                  <FaUpload className="mr-2" /> Upload Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Consultation Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Consultation Details
            </h2>
            <div className="md:grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-gray-600 mb-1">Consultation Fee</label>
                <input
                  type="text"
                  value={consultationFee}
                  onChange={(e) => setConsultationFee(e.target.value)}
                  placeholder="₹500"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Timings</label>
                <input
                  type="text"
                  value={timings}
                  onChange={(e) => setTimings(e.target.value)}
                  placeholder="9 AM - 5 PM"
                  className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div className="md:col-span-2">
                <span className="block text-gray-600 mb-2">Available Days</span>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="monFri"
                      checked={availableDays.monFri}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300"
                    />
                    Mon - Fri
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="satSun"
                      checked={availableDays.satSun}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300"
                    />
                    Sat - Sun
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 w-full md:w-1/2 bg-teal-500 text-white py-3 rounded-full font-semibold shadow hover:bg-teal-600 transition"
            >
              Submit for Approval
            </button>
            <p className="mt-2 text-xs text-gray-500">
              Admin will verify and approve within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClinicRegistrationPage;
