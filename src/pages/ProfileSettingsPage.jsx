import React, { useState } from "react";
import {
  FaClinicMedical,
  FaPhoneAlt,
  FaEnvelope,
  FaRupeeSign,
  FaClock,
} from "react-icons/fa";

const ProfileSettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("settings");

  const [clinicName, setClinicName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const [timings, setTimings] = useState("");
  const [availability, setAvailability] = useState({
    monFri: false,
    wedFri: false,
    weekends: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAvailability((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log({
      clinicName,
      phone,
      email,
      consultationFee,
      timings,
      availability,
    });
    alert("Changes saved successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50 mt-2">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Main Form */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Profile Settings
              </h1>
              <p className="text-gray-500 mb-8">
                Update your clinic information, availability, and contact details.
              </p>

              <form onSubmit={handleSave} className="space-y-8">
                {/* Clinic Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Clinic Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2">Clinic Name</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaClinicMedical className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={clinicName}
                          onChange={(e) => setClinicName(e.target.value)}
                          placeholder="Enter clinic name"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">
                        Consultation Fee
                      </label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaRupeeSign className="text-gray-400 mr-2" />
                        <input
                          type="number"
                          value={consultationFee}
                          onChange={(e) => setConsultationFee(e.target.value)}
                          placeholder="e.g., 500"
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
                          placeholder="Enter phone number"
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
                          placeholder="Enter email address"
                          className="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Availability & Timings
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2">
                        Available Days
                      </label>
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="monFri"
                            checked={availability.monFri}
                            onChange={handleCheckboxChange}
                            className="accent-teal-500"
                          />
                          <span>Monday - Friday</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="wedFri"
                            checked={availability.wedFri}
                            onChange={handleCheckboxChange}
                            className="accent-teal-500"
                          />
                          <span>Wednesday, Friday</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="weekends"
                            checked={availability.weekends}
                            onChange={handleCheckboxChange}
                            className="accent-teal-500"
                          />
                          <span>Weekends</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-2">Timings</label>
                      <div className="flex items-center border rounded-lg px-3">
                        <FaClock className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={timings}
                          onChange={(e) => setTimings(e.target.value)}
                          placeholder="e.g., 9:50 AM - 5:00 PM"
                          className="w-full p-2 outline-none"
                        />
                      </div>
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

export default ProfileSettingsPage;
