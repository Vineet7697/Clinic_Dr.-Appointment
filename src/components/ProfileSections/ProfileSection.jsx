import React from "react";
import Sidebar from "../UI/Sidebar";

const ProfileSection = ({ personalDetails = {}, setPersonalDetails }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const details = user
    ? {
        name: user.name || personalDetails?.name || "",
        email: user.email || personalDetails?.email || "",
        phone: user.phone || personalDetails?.phone || "",
      }
    : {
        name: personalDetails?.name || "",
        email: personalDetails?.email || "",
        phone: personalDetails?.phone || "",
      };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-20">
      <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
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
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
