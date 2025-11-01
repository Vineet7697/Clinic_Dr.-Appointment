import React, { useState } from "react";
import { validateDoctorRegistration } from "../../controller/FormValidation"; // adjust path
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DoctorRegistrationPage = () => {
  const [formValues, setFormValues] = useState({
    doctorName: "",
    clinicName: "",
    licenseNumber: "",
    degree: "",
    specialization: "",
    address: "",
    city: "",
    consultationFee: "",
    timings: "",
    availableDays: [],
    password: "",
    doctorId: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...formValues, [name]: value };

    setFormValues(updatedValues);

    const fieldError = validateDoctorRegistration(updatedValues);
    setErrors({ ...errors, [name]: fieldError[name] });
  };

  const handleCheckboxChange = (day) => {
    const newDays = formValues.availableDays.includes(day)
      ? formValues.availableDays.filter((d) => d !== day)
      : [...formValues.availableDays, day];

    const updatedValues = { ...formValues, availableDays: newDays };
    setFormValues(updatedValues);

    const fieldError = validateDoctorRegistration(updatedValues);
    setErrors({ ...errors, availableDays: fieldError.availableDays });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateDoctorRegistration(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Get existing doctors from localStorage
      const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

      // Check if doctorId already exists
      const doctorExists = storedDoctors.some(
        (doc) => doc.doctorId === formValues.doctorId
      );

      if (doctorExists) {
        setErrors({ ...errors, doctorId: "Doctor ID already exists" });
        return;
      }

      // Save new doctor
      storedDoctors.push(formValues);
      localStorage.setItem("doctors", JSON.stringify(storedDoctors));

      console.log("Form submitted:", formValues);
      navigate("/approvalstatuspage");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
      <div className="bg-white shadow-2xl rounded-3xl w-11/12 max-w-5xl p-10 md:p-14">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-teal-600">
            Register Your Clinic on Yo Doctor
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Doctor Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b border-gray-200 pb-2">
              Doctor Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  value={formValues.doctorName}
                  onChange={handleChange}
                  placeholder="Enter doctor's full name"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.doctorName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.doctorName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.doctorName}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  value={formValues.degree}
                  onChange={handleChange}
                  placeholder="e.g., MBBS, MD"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.degree
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.degree && (
                  <p className="text-red-500 text-sm mt-1">{errors.degree}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  License Number
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formValues.licenseNumber}
                  onChange={handleChange}
                  placeholder="Enter medical license number"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.licenseNumber
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.licenseNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.licenseNumber}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formValues.specialization}
                  onChange={handleChange}
                  placeholder="e.g., Cardiologist"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Doctor ID /Mobile Number
                </label>
                <input
                  type="text"
                  name="doctorId"
                  value={formValues.doctorId || ""}
                  onChange={handleChange}
                  placeholder="Enter unique Doctor ID"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.doctorId
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.doctorId && (
                  <p className="text-red-500 text-sm mt-1">{errors.doctorId}</p>
                )}
              </div>
            
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formValues.password || ""}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                      errors.password
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-300 focus:ring-teal-400"
                    }`}
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>
          </div>

          {/* Clinic Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b border-gray-200 pb-2">
              Clinic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Clinic Name
                </label>
                <input
                  type="text"
                  name="clinicName"
                  value={formValues.clinicName}
                  onChange={handleChange}
                  placeholder="Enter clinic name"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.clinicName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.clinicName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.clinicName}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.city
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-gray-600 font-medium">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  placeholder="Enter clinic address"
                  rows="3"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.address
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Consultation Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b border-gray-200 pb-2">
              Consultation Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Consultation Fee (₹)
                </label>
                <input
                  type="number"
                  name="consultationFee"
                  value={formValues.consultationFee}
                  onChange={handleChange}
                  placeholder="e.g., 500"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.consultationFee
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.consultationFee && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.consultationFee}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-gray-600 font-medium">
                  Timings
                </label>
                <input
                  type="text"
                  name="timings"
                  value={formValues.timings}
                  onChange={handleChange}
                  placeholder="e.g., 10 AM - 5 PM"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none ${
                    errors.timings
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-teal-400"
                  }`}
                />
                {errors.timings && (
                  <p className="text-red-500 text-sm mt-1">{errors.timings}</p>
                )}
              </div>
            </div>

            {/* Available Days */}
            <div className="mt-6">
              <label className="block mb-2 text-gray-600 font-medium">
                Available Days
              </label>
              <div className="flex flex-wrap gap-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <label
                      key={day}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={formValues.availableDays.includes(day)}
                        onChange={() => handleCheckboxChange(day)}
                        className="accent-teal-500"
                      />
                      <span>{day}</span>
                    </label>
                  )
                )}
              </div>
              {errors.availableDays && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.availableDays}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
            >
              Submit Registration
            </button>

            
            <p className="text-xs text-gray-500 mt-3">
              Admin will verify and approve within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistrationPage;
