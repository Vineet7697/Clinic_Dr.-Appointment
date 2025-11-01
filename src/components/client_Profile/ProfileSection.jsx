import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaCalendarAlt,
  FaMapPin,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const ProfileSection = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {
    firstName: "",
    lastName: "",
    email: "user@gmail.com",
    phone: "",
    address: "",
    pinCode: "",
    dob: "",
  };

  const [profile, setProfile] = useState(user);
  const [profileImage, setProfileImage] = useState(
    user?.profileImage || "/images/default-avatar.png"
  );

  // 🖊️ Edit photo
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setProfile({ ...profile, profileImage: imageUrl });
    }
  };

  // 🗑️ Remove photo
  const handleRemoveImage = () => {
    setProfileImage("/images/default-avatar.png");
    setProfile({ ...profile, profileImage: "/images/default-avatar.png" });
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedInUser", JSON.stringify(profile));
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          My Profile
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* 👤 Profile Image Section */}
            <div className="flex flex-col items-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-lg object-cover border border-gray-300 shadow-sm"
              />

              {/* ✏️🗑️ Icons below image */}
              <div className="flex gap-4 mt-3">
                {/* Edit photo */}
                <label className="cursor-pointer text-blue-600 hover:text-blue-800 transition">
                  <FaEdit size={18} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>

                {/* Remove photo */}
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>

            {/* 🧾 Profile Fields */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full pl-10 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full pl-10 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <FaHome className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full pl-10 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <FaMapPin className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="pinCode"
                  value={profile.pinCode}
                  onChange={handleChange}
                  placeholder="Pin Code"
                  className="w-full pl-10 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  name="dob"
                  value={profile.dob}
                  onChange={handleChange}
                  className="w-full pl-10 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Mobile No."
                  className="w-full pl-10 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
          </div>

          {/* 🔘 Update Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;
