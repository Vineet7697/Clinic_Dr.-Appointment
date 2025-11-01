// onClick={() => {
            //   setCurrentPassword("");
            //   setNewPassword("");
            //   setConfirmPassword("");
            //   setErrors({});
            // }}

import { useState } from "react";
import { validatePasswordFields } from "../../controller/FormValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // 👁️ Password visibility states
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Validate fields
    const validationErrors = validatePasswordFields({
      currentPassword,
      newPassword,
      confirmPassword,
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // 🔹 Get currently logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Check if current password matches
    if (currentPassword !== loggedInUser.password) {
      alert("❌ Current password is incorrect!");
      return;
    }

    // ✅ Update password in both loggedInUser and users array
    loggedInUser.password = newPassword;

    const updatedUsers = existingUsers.map((user) => {
      if (user.email === loggedInUser.email) {
        return { ...user, password: newPassword };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    alert("✅ Password updated successfully!");

    // Reset fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({});
  };
  if (!showForm) return null; 
  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl shadow-md p-6 text-gray-700 flex flex-col gap-4 w-full max-w-sm"
      >
        {/* Current Password */}
        <div className="relative">
          <input
            type={showCurrent ? "text" : "password"}
            placeholder="Current password"
            className={`border ${
              errors.currentPassword ? "border-red-500" : "border-gray-400"
            } focus:border-blue-500 rounded-lg p-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full`}
            value={currentPassword}
            onChange={(e) => {
              setCurrentPassword(e.target.value);

              // when input field fill error is remove
              if (errors.currentPassword) {
                setErrors((prev) => ({ ...prev, currentPassword: "" }));
              }
            }}
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={() => setShowCurrent(!showCurrent)}
          >
            {showCurrent ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.currentPassword}
            </p>
          )}
        </div>

        {/* New Password */}
        <div className="relative">
          <input
            type={showNew ? "text" : "password"}
            placeholder="New password"
            className={`border ${
              errors.newPassword ? "border-red-500" : "border-gray-400"
            } focus:border-blue-500 rounded-lg p-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full`}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            className={`border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-400"
            } focus:border-blue-500 rounded-lg p-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            
            onClick={() => setShowForm(false)} 
            className="border-2 rounded-lg px-4 py-2 cursor-pointer text-red-600 hover:bg-red-500 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="border-2 border-blue-500 text-blue-600 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white transition cursor-pointer"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
