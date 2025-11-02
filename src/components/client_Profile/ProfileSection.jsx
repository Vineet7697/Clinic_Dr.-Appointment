import React, { useState } from "react";
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
    avatar: "/images/default-avatar.png",
  };

  const [profile, setProfile] = useState(user);
  const [profileImage, setProfileImage] = useState(
    user?.avatar || "/images/default-avatar.png"
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // 🖊️ Edit photo
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setProfile({ ...profile, avatar: imageUrl });

      const updatedUser = { ...profile, avatar: imageUrl };
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
      window.dispatchEvent(new Event("userProfileUpdated"));
    }
  };

  // 🗑️ Remove photo (confirmed)
  const handleRemoveImage = () => {
    const defaultImage = "/images/default-avatar.png";
    setProfileImage(defaultImage);
    setProfile({ ...profile, avatar: defaultImage });
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ ...profile, avatar: defaultImage })
    );
    window.dispatchEvent(new Event("userProfileUpdated"));
    setShowDeleteModal(false);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // 🧩 Open update modal instead of directly submitting
  const handleUpdateClick = (e) => {
    e.preventDefault();
    setShowUpdateModal(true);
  };

  // ✅ Confirm update
  const confirmUpdateProfile = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(profile));
    window.dispatchEvent(new Event("userProfileUpdated"));
    setShowUpdateModal(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10 px-4 relative">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          My Profile
        </h2>

        <form onSubmit={handleUpdateClick}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* 👤 Profile Image Section */}
            <div className="flex flex-col items-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border border-gray-300 shadow-sm"
              />

              <div className="flex gap-4 mt-3">
                <label className="cursor-pointer text-blue-600 hover:text-blue-800 transition">
                  <FaEdit size={18} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>

                <button
                  type="button"
                  onClick={() => setShowDeleteModal(true)}
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

      {/* 🧩 Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to delete your profile image?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                No
              </button>

              <button
                onClick={handleRemoveImage}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🧩 Update Confirmation Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to update your profile?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                No
              </button>

              <button
                onClick={confirmUpdateProfile}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
