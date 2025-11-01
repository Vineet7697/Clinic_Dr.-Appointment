import React, { useState } from "react";
import {
  FaUser,
  FaVenusMars,
  FaCalendarAlt,
  FaTint,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaCity,
  FaUserMd,
  FaClock,
  FaNotesMedical,
} from "react-icons/fa";

const ClientSettingsSection = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [preferredDoctor, setPreferredDoctor] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      gender,
      dob,
      bloodGroup,
      phone,
      email,
      address,
      city,
      preferredDoctor,
      timeSlot,
      medicalHistory,
    });
    alert("Changes saved successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50 mt-2">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Profile Settings
              </h1>
              <p className="text-gray-500 mb-8">
                Update your personal details and preferences below.
              </p>

              <form onSubmit={handleSave} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2">Full Name</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaUser className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">Gender</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaVenusMars className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          placeholder="Male / Female / Other"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">Date of Birth</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaCalendarAlt className="text-gray-400 mr-2" />
                        <input
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">Blood Group</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaTint className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={bloodGroup}
                          onChange={(e) => setBloodGroup(e.target.value)}
                          placeholder="e.g., O+, A-, B+"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2">Phone</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaPhoneAlt className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter your phone number"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">Email</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaEnvelope className="text-gray-400 mr-2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">Address</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaHome className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Enter your address"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">City</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaCity className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Enter your city"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Health Preferences
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2">Preferred Doctor</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaUserMd className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={preferredDoctor}
                          onChange={(e) => setPreferredDoctor(e.target.value)}
                          placeholder="Enter preferred doctor name"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">Preferred Time Slot</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaClock className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          placeholder="Morning / Evening"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-gray-600 mb-2">Medical History</label>
                    <div className="flex items-start border rounded-lg px-3 py-2">
                      <FaNotesMedical className="text-gray-400 mr-2 mt-1" />
                      <textarea
                        value={medicalHistory}
                        onChange={(e) => setMedicalHistory(e.target.value)}
                        placeholder="e.g., Diabetes, Blood Pressure..."
                        className="w-full p-2 outline-none resize-none"
                        rows="3"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">
                  <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="border border-red-500 text-red-500 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition"
                  >
                    Deactivate Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientSettingsSection;
