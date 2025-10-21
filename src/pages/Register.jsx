
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    receiveOffers: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Password Strength
  const getPasswordStrength = (password) => {
    if (!password) return "";
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/;
    const mediumRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (strongRegex.test(password)) return "Strong";
    if (mediumRegex.test(password)) return "Medium";
    return "Weak";
  };

  // Handle change with real-time validation
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update formData
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Real-time validation
    let message = "";
    if (name === "fullName") {
      if (!value.trim()) message = "Name is required";
      else if (value.trim().length < 3)
        message = "Name must be at least 3 characters";
    }

    if (name === "email") {
      if (!value.trim()) message = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        message = "Please enter a valid email address";
    }

    if (name === "mobileNumber") {
      const val = value.replace(/\D/g, "");
      if (!val) message = "Mobile Number is required";
      else if (!/^[6-9]\d{9}$/.test(val))
        message = "Mobile number must start with 6,7,8,9 and be 10 digits";
    }

    if (name === "password") {
      if (!value) message = "Password is required";
      else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(value))
        message =
          "Password must include uppercase, lowercase, number, and special character";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submit
    let newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3)
      newErrors.fullName = "Name must be at least 3 characters";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Please enter a valid email address";
    if (
      !formData.mobileNumber.trim() ||
      !/^[6-9]\d{9}$/.test(formData.mobileNumber)
    )
      newErrors.mobileNumber =
        "Mobile number must start with 6,7,8,9 and be 10 digits";
    if (
      !formData.password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(
        formData.password
      )
    )
      newErrors.password =
        "Password must include uppercase, lowercase, number, and special character";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Simulate submit
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Registered User Data:", formData);
      alert("Registration successful!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="font-sans w-full max-w-4xl mx-auto mt-20">
      <div className="min-h-screen flex items-center justify-center flex-col">
        {/* Header Tabs */}
        <div className="flex mb-6">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `py-4 px-6 transition-colors ${
                    isActive
                      ? "text-sky-600 border-b-2 border-sky-500 font-semibold"
                      : "text-gray-500 hover:text-gray-800"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `py-4 px-6 transition-colors ${
                    isActive
                      ? "text-sky-600 border-b-2 border-sky-500 font-semibold"
                      : "text-gray-500 hover:text-gray-800"
                  }`
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Join YoDoctor</h2>
            <p className="text-sm text-gray-600">
              Are you a doctor?{" "}
              <Link
                to="/doctorregister"
                className="text-orange-500 font-medium hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-cyan-500"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-cyan-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <div className="flex items-center">
                <span className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-l-md text-gray-700 select-none">
                  +91
                </span>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter 10-digit number"
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    // Remove non-digits
                    let value = e.target.value.replace(/\D/g, "");
                    // Limit to 10 digits
                    if (value.length > 10) value = value.slice(0, 10);

                    setFormData((prev) => ({
                      ...prev,
                      mobileNumber: value,
                    }));

                    // Real-time validation
                    let message = "";
                    if (!value) message = "Mobile Number is required";
                    else if (!/^[6-9]\d{9}$/.test(value))
                      message =
                        "Mobile number must start with 6,7,8,9 and be 10 digits";

                    setErrors((prev) => ({ ...prev, mobileNumber: message }));
                  }}
                  className={`w-full px-4 py-1.5 border rounded-r-md focus:outline-none focus:ring-2 ${
                    errors.mobileNumber
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-cyan-500"
                  }`}
                />
              </div>
              {errors.mobileNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-1.5 border rounded-md focus:outline-none focus:ring-2 pr-10 ${
                  errors.password
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-cyan-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
              {formData.password && !errors.password && (
                <p
                  className={`text-xs mt-1 ${
                    getPasswordStrength(formData.password) === "Weak"
                      ? "text-red-500"
                      : getPasswordStrength(formData.password) === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  Password Strength: {getPasswordStrength(formData.password)}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input
                  id="receiveOffers"
                  type="checkbox"
                  name="receiveOffers"
                  checked={formData.receiveOffers}
                  onChange={handleChange}
                  className="h-5 w-5 mt-0.5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                />
                <label
                  htmlFor="receiveOffers"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Receive relevant offers and promotional communication from
                  Practo
                </label>
              </div>
              <p className="text-xs text-gray-500 pl-8">
                By signing up, I agree to the{" "}
                <a href="#" className="text-cyan-600 hover:underline">
                  terms
                </a>
              </p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-1.5 rounded-md text-base font-bold text-white ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600"
              } transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
