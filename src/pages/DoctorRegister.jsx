
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    password: "",
    receiveOffers: true,
    speciality: "",
    degree: "",
    experience: "",
    location: "",
    document: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 🔹 Real-time field validation
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full Name is required";
        else if (value.length < 3)
          error = "Full Name must be at least 3 characters";
        else if (!/^[a-zA-Z\s]+$/.test(value))
          error = "Only letters are allowed";
        break;

      case "speciality":
        if (!value) error = "Please select speciality";
        break;

      case "degree":
        if (!value) error = "Please select degree";
        break;

      case "experience":
        if (!value) error = "Please select experience";
        break;

      case "location":
        if (!value.trim()) error = "Service location is required";
        break;

      case "document":
        if (!value) error = "Please upload a valid document";
        break;

      case "mobileNumber":
        if (!value.trim()) error = "Mobile number is required";
        else if (!/^\d{10}$/.test(value))
          error = "Enter a valid 10-digit number";
        break;

      case "password":
        if (!value.trim()) error = "Password is required";
        else if (value.length < 6)
          error = "Password must be at least 6 characters";
        else if (
          !/(?=.*[a-z])/.test(value) || // lowercase
          !/(?=.*[A-Z])/.test(value) || // uppercase
          !/(?=.*\d)/.test(value) || // digit
          !/(?=.*[!@#$%^&*])/.test(value) // special character
        )
          error =
            "Password must contain uppercase, lowercase, number & special character";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // 🔹 Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    validateField(name, fieldValue);
  };

  // 🔹 Password Strength
  const getPasswordStrength = (password) => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Weak";

    let strength = 0;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;

    if (strength < 3) return "Weak";
    if (strength === 3) return "Medium";
    return "Strong";
  };

  // 🔹 Final Validation Before Submit
  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([name, value]) => {
      let error = "";

      switch (name) {
        case "fullName":
          if (!value.trim()) error = "Full Name is required";
          else if (value.length < 3)
            error = "Full Name must be at least 3 characters";
          else if (!/^[a-zA-Z\s]+$/.test(value))
            error = "Only letters are allowed";
          break;

        case "speciality":
          if (!value) error = "Please select speciality";
          break;

        case "degree":
          if (!value) error = "Please select degree";
          break;

        case "experience":
          if (!value) error = "Please select experience";
          break;

        case "location":
          if (!value.trim()) error = "Service location is required";
          break;

        case "document":
          if (!value) error = "Please upload a valid document";
          break;

        case "mobileNumber":
          if (!value.trim()) error = "Mobile number is required";
          else if (!/^\d{10}$/.test(value))
            error = "Enter a valid 10-digit number";
          break;

        case "password":
          if (!value.trim()) error = "Password is required";
          else if (value.length < 6)
            error = "Password must be at least 6 characters";
          else if (
            !/(?=.*[a-z])/.test(value) ||
            !/(?=.*[A-Z])/.test(value) ||
            !/(?=.*\d)/.test(value) ||
            !/(?=.*[!@#$%^&*])/.test(value)
          )
            error =
              "Password must contain uppercase, lowercase, number & special character";
          break;

        default:
          break;
      }

      if (error) newErrors[name] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      alert("Doctor Registered Successfully!");
      setIsSubmitting(false);
    }, 2000);
  };

  const inputClass =
    "w-full px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500";

  return (
    <div className="font-sans w-full max-w-4xl mx-auto mt-20">
      <div className="min-h-screen flex items-center justify-center flex-col">
        {/* Header Tabs */}
        <div className="flex  mb-6">
          <ul className="flex items-center justify-center gap-8">
            <li className="py-4 px-6 text-gray-500 hover:text-gray-800 transition-colors">
              <Link to="/login">Login</Link>
            </li>
            <li className="py-4 px-6 text-cyan-500 border-b-2 border-cyan-500 font-semibold">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Join YoDoctor</h2>
            <p className="text-sm text-gray-600">
              <Link
                to="/register"
                className="text-blue-400 font-medium hover:underline"
              >
                Not a Doctor?
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
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Speciality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Speciality
              </label>
              <select
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select Speciality</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Neurology">Neurology</option>
              </select>
              {errors.speciality && (
                <p className="text-red-500 text-xs mt-1">{errors.speciality}</p>
              )}
            </div>

            {/* Degree */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select Degree</option>
                <option value="MBBS">MBBS</option>
                <option value="MD">MD</option>
                <option value="MS">MS</option>
              </select>
              {errors.degree && (
                <p className="text-red-500 text-xs mt-1">{errors.degree}</p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years of Experience
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select Years</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="5+">5+ Years</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service of Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
              )}
            </div>

            {/* Document */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Document
              </label>
              <input
                type="file"
                name="document"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                className={inputClass}
              />
              {errors.document && (
                <p className="text-red-500 text-xs mt-1">{errors.document}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // sirf digits
                  if (value.length > 10) value = value.slice(0, 10); // max 10 digits
                  setFormData((prev) => ({ ...prev, mobileNumber: value }));
                  validateField("mobileNumber", value); // validation bhi update ho
                }}
                className={inputClass}
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            {/* Password with toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={inputClass}
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {formData.password && (
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
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
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
                  Receive relevant offers and promotional communication
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-1.5 rounded-md text-base font-bold text-white cursor-pointer ${
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

export default DoctorRegister;
