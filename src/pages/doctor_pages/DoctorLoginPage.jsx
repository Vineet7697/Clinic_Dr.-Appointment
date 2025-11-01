import React, { useState } from "react";
import { validateDoctorLogin } from "../../controller/FormValidation"; // adjust path
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DoctorLoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Form values
  const [formValues, setFormValues] = useState({ doctorId: "", password: "" });
  const [errors, setErrors] = useState({});

  // ---------------- Handle Input Change ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...formValues, [name]: value };
    setFormValues(updatedValues);

    // Real-time validation
    const fieldError = validateDoctorLogin(updatedValues);
    setErrors({ ...errors, [name]: fieldError[name] });
  };

  // ---------------- Handle Login ----------------
  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateDoctorLogin(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

      // Check credentials
      const doctor = storedDoctors.find(
        (doc) =>
          doc.doctorId === formValues.doctorId &&
          doc.password === formValues.password
      );

      if (doctor) {
        console.log("✅ Login successful", doctor);

        // ---------------- 👇 Add this block 👇 ----------------
        // Save logged in doctor info + role in localStorage
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            name: doctor.name || "Dr. Sharma", // fallback name
            role: "doctor", // role set for sidebar
          })
        );
        // ------------------------------------------------------

        navigate("/doctordashboard"); // redirect after login
      } else {
        setErrors({
          ...errors,
          password: "Invalid Doctor ID or Password",
          doctorId: "Invalid Doctor ID or Password",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-11/12 max-w-5xl md:flex">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-teal-500 mb-8 text-center">
            Yo Doctor
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Doctor / Clinic Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Doctor ID */}
            <div>
              <label
                htmlFor="doctorId"
                className="block text-gray-600 mb-2 font-medium"
              >
                Doctor ID/ Mobile Number
              </label>
              <input
                type="text"
                id="doctorId"
                name="doctorId"
                value={formValues.doctorId}
                onChange={handleChange}
                placeholder="Enter your Doctor ID"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.doctorId
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-teal-400"
                }`}
              />
              {errors.doctorId && (
                <p className="text-red-500 text-sm mt-1">{errors.doctorId}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-600 mb-2 font-medium"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
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

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-teal-600 transition duration-200"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-full font-medium hover:bg-teal-600 transition duration-300"
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => navigate("/doctorregistrationpage")}
                className="w-full bg-white border border-teal-500 text-teal-500 py-2 rounded-full font-medium hover:bg-teal-50 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-teal-100 to-cyan-100 items-center justify-center">
          <div className="w-3/4 h-3/4 flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center border border-teal-200">
              {/* Optional: you can add doctor illustration here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLoginPage;
