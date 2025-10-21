import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = (name, value) => {
    let message = "";

    if (name === "emailOrMobile") {
      if (!value.trim()) message = "This field is required.";
      else if (/^\d+$/.test(value)) {
        if (!/^[6-9]/.test(value))
          message = "Mobile number must start with 6,7,8,9.";
        else if (value.length < 10) message = "Mobile number must be 10 digits.";
      } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(value)) {
        message = "Enter a valid email or mobile number.";
      }
    }

    if (name === "password" && !loginWithOtp) {
      if (!value.trim()) message = "Password is required.";
      else if (value.length < 6) message = "Password must be at least 6 characters.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
    return message === "";
  };

  const handleEmailChange = (e) => {
    let value = e.target.value;
    if (/^\d*$/.test(value) && value.length > 10) value = value.slice(0, 10);
    setEmailOrMobile(value);
    validate("emailOrMobile", value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validate("password", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validate("emailOrMobile", emailOrMobile);
    const passValid = loginWithOtp || validate("password", password);
    if (!emailValid || !passValid) return;

    if (loginWithOtp) {
      navigate("/verify-otp", { state: { emailOrMobile } });
    } else {
      alert("Logged in successfully (dummy)");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      {/* Tabs */}
      <div className="flex justify-center mb-6 w-full max-w-md">
        <ul className="flex w-full">
          <li className="flex-1 text-center">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block pb-2 border-b-2 transition-colors ${
                  isActive
                    ? "text-sky-600 border-sky-500 font-semibold"
                    : "text-gray-500 border-transparent hover:text-gray-800"
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li className="flex-1 text-center">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `block pb-2 border-b-2 transition-colors ${
                  isActive
                    ? "text-sky-600 border-sky-500 font-semibold"
                    : "text-gray-500 border-transparent hover:text-gray-800"
                }`
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Email / Mobile */}
          <div>
            <label
              htmlFor="emailOrMobile"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              Mobile Number / Email ID
            </label>
            <input
              id="emailOrMobile"
              type="text"
              value={emailOrMobile}
              placeholder="Mobile Number / Email ID"
              onChange={handleEmailChange}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-md focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm sm:text-base ${
                errors.emailOrMobile ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.emailOrMobile && (
              <p className="text-red-500 text-xs mt-1">{errors.emailOrMobile}</p>
            )}
          </div>

          {/* Password */}
          {!loginWithOtp && (
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-md focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm sm:text-base ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[36px] sm:top-[38px] cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          )}

          {/* Remember + Forgot */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2 sm:gap-0">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-sky-500"
              />
              Remember me
            </label>
            <a href="#" className="text-sky-500 hover:underline text-sm sm:text-base">
              Forgot password?
            </a>
          </div>

          {/* OTP Option */}
          <label className="flex items-center gap-2 text-sm sm:text-base">
            <input
              type="checkbox"
              checked={loginWithOtp}
              onChange={(e) => {
                setLoginWithOtp(e.target.checked);
                setErrors({});
              }}
              className="h-4 w-4 text-sky-500"
            />
            Login with OTP instead of password
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 sm:py-3 rounded-md transition-colors text-sm sm:text-base"
          >
            {loginWithOtp ? "Send OTP" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
