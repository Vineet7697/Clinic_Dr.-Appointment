import React, { useState } from "react";
import { CalendarDays, User, Mail, Lock, ChevronDown } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { validateRegisterForm } from "../controller/FormValidation";

const ClientRegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const fieldErrors = validateRegisterForm({ ...formData, [name]: value });
    setErrors(fieldErrors);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateRegisterForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Get old users
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if email already exists
      const userExists = existingUsers.some(
        (user) => user.email === formData.email
      );

      if (userExists) {
        alert("This account already exists. Please login.");
        return;
      }

      // Add new user
      const updatedUsers = [...existingUsers, formData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert("Registration successful! Please login.");
      navigate("/clientloginpage");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://img.freepik.com/free-vector/medical-pattern-background_53876-115572.jpg')] bg-cover bg-center"></div>
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-tr-full rounded-br-full"></div>

      <div className="relative z-10 bg-white shadow-2xl rounded-3xl md:flex max-w-5xl w-full mx-4 md:mx-0">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Patient Account
          </h2>
          <p className="text-gray-500 mb-8">
            Join us to manage your health with ease.
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`appearance-none w-full pl-3 pr-10 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.gender
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
              )}
            </div>

            {/* DOB */}
            <div className="relative">
              <CalendarDays className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                  errors.dob
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.dob && (
                <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
              )}
            </div>

            

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
            >
              Register & Continue
            </button>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-r-3xl">
          <div
            className="w-72 h-72 bg-[url('https://cdn3d.iconscout.com/3d/premium/thumb/doctor-with-patient-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--consultation-medicine-illustrations-4323381.png')] bg-contain bg-no-repeat bg-center"
            aria-label="Doctor and patient illustration"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ClientRegisterPage;
