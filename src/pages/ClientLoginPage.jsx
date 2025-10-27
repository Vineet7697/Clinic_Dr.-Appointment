import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../controller/FormValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ClientLoginPage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    alert("Forgot Password clicked! (frontend simulation only)");
  };

  const handleGoogleLogin = () => {
    alert("Login with Google clicked! (frontend simulation only)");
  };

  const handleEmailChange = (e) => {
    let value = e.target.value;
    if (/^\d*$/.test(value) && value.length > 10) value = value.slice(0, 10);
    setEmailOrMobile(value);

    setErrors(validateLoginForm({ emailPhone: value, password, loginWithOtp }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setErrors(
      validateLoginForm({
        emailPhone: emailOrMobile,
        password: value,
        loginWithOtp,
      })
    );
  };

  // ---------------- Handle Login ----------------
  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm({
      emailPhone: emailOrMobile,
      password,
      loginWithOtp,
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const userFound = existingUsers.find(
        (user) => user.email === emailOrMobile && user.password === password
      );

      if (userFound) {
        alert("Login successful!");

        // ✅ Store logged-in user in localStorage
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            name: "Vineet",
            email: "vineet@gmail.com",
            phone: "9876543210",
            role: "client",
          })
        );

        navigate("/finddoctor");
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Login to Yo Doctor
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Enter your credentials to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
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
              <p className="text-red-500 text-xs mt-1">
                {errors.emailOrMobile}
              </p>
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
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sky-500 hover:underline text-sm sm:text-base"
            >
              Forgot password?
            </button>
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

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-800 rounded-lg py-3 font-medium shadow hover:bg-gray-50 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/clientregisterpage")}
              className="text-blue-500 font-medium hover:underline"
            >
              Register here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ClientLoginPage;
