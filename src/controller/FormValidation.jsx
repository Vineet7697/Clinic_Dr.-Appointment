// ✅ Validation for Client Login Form 
export const validateLoginForm = ({ email, password }) => {
  const errors = {};

  // 🔹 Email validation
  if (!email?.trim()) {
    errors.email = "Email is required.";
  } else {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.email = "Enter a valid email address.";
    }
  }

  // 🔹 Password validation
  if (!password?.trim()) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};





// validation for client RegisterForm
export const validateRegisterForm = (formData) => {
  const errors = {};

  // Name
  if (!formData.name?.trim()) {
    errors.name = "Full name is required.";
  }

  // Email
  if (!formData.email?.trim()) {
    errors.email = "Email is required.";
  } else {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
  }

  // Password
  if (!formData.password?.trim()) {
    errors.password = "Password is required.";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  } else {
    // Uppercase, lowercase, number, special character validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!uppercaseRegex.test(formData.password)) {
      errors.password = "Password must include at least one uppercase letter.";
    } else if (!lowercaseRegex.test(formData.password)) {
      errors.password = "Password must include at least one lowercase letter.";
    } else if (!numberRegex.test(formData.password)) {
      errors.password = "Password must include at least one number.";
    } else if (!specialCharRegex.test(formData.password)) {
      errors.password = "Password must include at least one special character.";
    }
  }

  // Confirm Password
  if (!formData.confirmPassword?.trim()) {
    errors.confirmPassword = "Confirm password is required.";
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  // Gender
  if (!formData.gender) {
    errors.gender = "Please select your gender.";
  }

  // Date of Birth
  if (!formData.dob) {
    errors.dob = "Date of birth is required.";
  }

  return errors;
};






// validation for DoctorLogin
export const validateDoctorLogin = ({ doctorId, password }) => {
  const errors = {};

  // Doctor ID validation
  if (!doctorId.trim()) {
    errors.doctorId = "Doctor ID is required";
  } else if (doctorId.length < 3) {
    errors.doctorId = "Doctor ID must be at least 3 characters";
  }

  // Password validation
  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};


// validation for DoctorRegistration
export const validateDoctorRegistration = (values) => {
  const errors = {};

  // ---------------- Doctor Information ----------------
  if (!values.doctorName?.trim()) {
    errors.doctorName = "Doctor Name is required";
  } else if (values.doctorName.length < 3) {
    errors.doctorName = "Doctor Name must be at least 3 characters";
  }

  if (!values.degree?.trim()) {
    errors.degree = "Degree is required";
  }

  if (!values.licenseNumber?.trim()) {
    errors.licenseNumber = "License Number is required";
  }

  // ---------------- Doctor ID ----------------
  if (!values.doctorId?.trim()) {
    errors.doctorId = "Doctor ID is required";
  } else if (!/^[a-zA-Z0-9_-]{4,20}$/.test(values.doctorId)) {
    errors.doctorId =
      "Doctor ID must be 4-20 characters, letters/numbers/_/- only";
  }

  // ---------------- Password ----------------
  if (!values.password?.trim()) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be at least 6 characters and include uppercase, lowercase, number & special character";
  }

  // ---------------- Clinic Information ----------------
  if (!values.clinicName?.trim()) {
    errors.clinicName = "Clinic Name is required";
  }

  if (!values.city?.trim()) {
    errors.city = "City is required";
  }

  if (!values.address?.trim()) {
    errors.address = "Address is required";
  }

  // ---------------- Consultation Details ----------------
  if (values.consultationFee && Number(values.consultationFee) < 0) {
    errors.consultationFee = "Consultation fee must be a positive number";
  }

  if (!values.timings?.trim()) {
    errors.timings = "Timings are required";
  }

  if (!values.availableDays || values.availableDays.length === 0) {
    errors.availableDays = "Select at least one available day";
  }

  return errors;
};





// Book Appoinmentpage validation

export const validateFamilyMember = (member) => {
  const errors = {};

  if (!member.name.trim()) {
    errors.name = "Name is required";
  }

  if (!member.age || isNaN(member.age) || member.age <= 0) {
    errors.age = "Please enter a valid age";
  }

  if (!member.Aadhar || !/^\d{12}$/.test(member.Aadhar)) {
    errors.Aadhar = "Aadhar must be a 12-digit number";
  }

  if (!member.MobileNumber || !/^[6-9]\d{9}$/.test(member.MobileNumber)) {
    errors.MobileNumber = "Enter a valid 10-digit mobile number";
  }

  return errors;
};


// change password validation

export const validatePasswordFields = (fields) => {
  const { currentPassword, newPassword, confirmPassword } = fields;
  const errors = {};

  // Current password validation
  if (!currentPassword.trim()) {
    errors.currentPassword = "Current password is required";
  }

  // New password validation
  if (!newPassword.trim()) {
    errors.newPassword = "New password is required";
  } else if (newPassword.length < 8) {
    errors.newPassword = "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(newPassword)) {
    errors.newPassword = "Password must include at least one uppercase letter";
  } else if (!/[a-z]/.test(newPassword)) {
    errors.newPassword = "Password must include at least one lowercase letter";
  } else if (!/[0-9]/.test(newPassword)) {
    errors.newPassword = "Password must include at least one number";
  } else if (!/[!@#$%^&*]/.test(newPassword)) {
    errors.newPassword = "Password must include at least one special character (!@#$%^&*)";
  }

  // Confirm password validation
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your new password";
  } else if (confirmPassword !== newPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
