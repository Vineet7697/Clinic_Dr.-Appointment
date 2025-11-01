 // medicalHistory:
        //   user.medicalHistory || personalDetails?.medicalHistory || "",
        // allergies: user.allergies || personalDetails?.allergies || "",
        // preferredDoctor:
        //   user.preferredDoctor || personalDetails?.preferredDoctor || "",
        // preferredTime:
        //   user.preferredTime || personalDetails?.preferredTime || "",

{/* Health Info */}
        {/* <div className="md:col-span-3">
          <label className="block text-gray-600 mb-1">Medical History</label>
          <textarea
            value={details.medicalHistory}
            onChange={(e) =>
              setPersonalDetails({
                ...details,
                medicalHistory: e.target.value,
              })
            }
            className="w-full border rounded-lg p-2 outline-none"
            rows="3"
            placeholder="e.g., Diabetes, High BP..."
          ></textarea>
        </div> */}

        {/* <div className="md:col-span-3">
          <label className="block text-gray-600 mb-1">Allergies</label>
          <textarea
            value={details.allergies}
            onChange={(e) =>
              setPersonalDetails({ ...details, allergies: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
            rows="2"
            placeholder="e.g., Peanut allergy, Dust allergy..."
          ></textarea>
        </div> */}

        {/* Preferences */}
        {/* <div>
          <label className="block text-gray-600 mb-1">Preferred Doctor</label>
          <input
            type="text"
            value={details.preferredDoctor}
            onChange={(e) =>
              setPersonalDetails({
                ...details,
                preferredDoctor: e.target.value,
              })
            }
            className="w-full border rounded-lg p-2 outline-none"
            placeholder="e.g., Dr. Rohan Sharma"
          />
        </div> */}

        {/* <div>
          <label className="block text-gray-600 mb-1">Preferred Time Slot</label>
          <input
            type="text"
            value={details.preferredTime}
            onChange={(e) =>
              setPersonalDetails({ ...details, preferredTime: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
            placeholder="e.g., Morning / Evening"
          />
        </div> */}



import React, { useState, useEffect } from "react";

const ProfileSection = ({ personalDetails = {}, setPersonalDetails }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [profileImage, setProfileImage] = useState(
    user?.profileImage || personalDetails?.profileImage || ""
  );
  const [age, setAge] = useState("");

  const details = user
    ? {
        name: user.name || personalDetails?.name || "",
        email: user.email || personalDetails?.email || "",
        phone: user.phone || personalDetails?.phone || "",
        gender: user.gender || personalDetails?.gender || "",
        dob: user.dob || personalDetails?.dob || "",
        bloodGroup: user.bloodGroup || personalDetails?.bloodGroup || "",
        city: user.city || personalDetails?.city || "",
        address: user.address || personalDetails?.address || "",
        
       
      }
    : personalDetails;

  // ✅ DOB se Age calculate karna
  useEffect(() => {
    if (details.dob) {
      const birthDate = new Date(details.dob);
      const ageDiff = new Date().getFullYear() - birthDate.getFullYear();
      setAge(ageDiff);
    }
  }, [details.dob]);

  // ✅ Profile image upload handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setPersonalDetails({ ...details, profileImage: imageUrl });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Personal Details
      </h3>

      {/* 👤 Profile Picture Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profileImage || "/images/default-avatar.png"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <label className="block text-gray-600 mb-1 font-medium">
            Upload Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Basic Info */}
        <div>
          <label className="block text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            value={details.name}
            onChange={(e) =>
              setPersonalDetails({ ...details, name: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
           
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={details.email}
            onChange={(e) =>
              setPersonalDetails({ ...details, email: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Phone</label>
          <input
            type="text"
            value={details.phone}
            onChange={(e) =>
              setPersonalDetails({ ...details, phone: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Extra Personal Info */}
        <div>
          <label className="block text-gray-600 mb-1">Gender</label>
          <select
            value={details.gender}
            onChange={(e) =>
              setPersonalDetails({ ...details, gender: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Date of Birth</label>
          <input
            type="date"
            value={details.dob}
            onChange={(e) =>
              setPersonalDetails({ ...details, dob: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
          />
        </div>

        {/* ✅ Auto-calculated Age */}
        <div>
          <label className="block text-gray-600 mb-1">Age</label>
          <input
            type="text"
            value={age || ""}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 outline-none"
            placeholder="Auto calculated from DOB"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Blood Group</label>
          <input
            type="text"
            value={details.bloodGroup}
            onChange={(e) =>
              setPersonalDetails({ ...details, bloodGroup: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
            placeholder="e.g., O+, A-, B+"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">City</label>
          <input
            type="text"
            value={details.city}
            onChange={(e) =>
              setPersonalDetails({ ...details, city: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
            placeholder="Enter your city"
          />
        </div>

        {/* Address Section */}
        <div className="md:col-span-2">
          <label className="block text-gray-600 mb-1">Address</label>
          <input
            type="text"
            value={details.address}
            onChange={(e) =>
              setPersonalDetails({ ...details, address: e.target.value })
            }
            className="w-full border rounded-lg p-2 outline-none"
            placeholder="Enter your address"
          />
        </div>

        

       
      </div>
    </div>
  );
};

export default ProfileSection;
