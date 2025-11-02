import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFamilyPage = () => {
  const navigate = useNavigate();
  const [familyMember, setFamilyMember] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    age: "",
    relation: "",
  });

  const [errors, setErrors] = useState({});

  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updated = { ...familyMember, [name]: value };
    if (name === "dob") updated.age = calculateAge(value);
    setFamilyMember(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!familyMember.firstName) newErrors.firstName = "First name is required";
    if (!familyMember.gender) newErrors.gender = "Please select gender";
    if (!familyMember.dob) newErrors.dob = "Date of birth is required";
    if (!familyMember.relation) newErrors.relation = "Please enter relation";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 🔹 localStorage me save karna
      const existingMembers =
        JSON.parse(localStorage.getItem("familyMembers")) || [];
      const updatedMembers = [...existingMembers, familyMember];
      localStorage.setItem("familyMembers", JSON.stringify(updatedMembers));

      alert("✅ Family member added successfully!");
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Add Family Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={familyMember.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={familyMember.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Gender<span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={familyMember.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
            )}
          </div>

          {/* DOB & Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={familyMember.dob}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Age</label>
              <input
                type="text"
                name="age"
                value={familyMember.age}
                readOnly
                className="w-full border rounded-lg p-2 bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Relation */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Relation<span className="text-red-500">*</span>
            </label>
            <select
              name="relation"
              value={familyMember.relation}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select Relation</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Spouse">Spouse</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Other">Other</option>
            </select>
            {errors.relation && (
              <p className="text-red-500 text-sm mt-1">{errors.relation}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFamilyPage;
