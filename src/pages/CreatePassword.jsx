import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const CreatePassword = () => {
  const location = useLocation();
  const emailOrMobile = location.state?.emailOrMobile;
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Password validation
  const validatePassword = (pass) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=])[A-Za-z\d@$!%*?&#^()_+=]{8,}$/;
    return regex.test(pass);
  };

  // Password strength level
  const getStrength = (pass) => {
    if (pass.length < 6) return "Weak";
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=]).{8,}$/;
    if (strongRegex.test(pass)) return "Strong";
    if (pass.length >= 6) return "Medium";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    alert(`✅ Password created successfully for ${emailOrMobile}`);
  };

  const strength = getStrength(password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Create New Password
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Password Field */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none pr-10"
            />
            <span
              className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>

          {/* Password Strength Indicator */}
          {password && (
            <div
              className={`text-sm font-medium mb-2 ${
                strength === "Strong"
                  ? "text-green-600"
                  : strength === "Medium"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              Strength: {strength}
            </div>
          )}

          {/* Confirm Password Field */}
          <div className="relative mb-6">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none pr-10"
            />
            <span
              className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>

          {/* Save Password Button */}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-lg transition"
          >
            Save Password
          </button>

          {/* Password rules */}
          <ul className="text-sm text-gray-500 mt-4 space-y-1">
            <li>• Minimum 8 characters</li>
            <li>• Must include uppercase and lowercase letters</li>
            <li>• Must include at least one number</li>
            <li>• Must include one special character</li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
