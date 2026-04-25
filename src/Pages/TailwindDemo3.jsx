import React, { useState } from "react";

const TailwindDemo3 = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSuccessMessage("");
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+|~\-={}[\]:;"'<>,.?/\\])(?=.*[a-z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return "Password must contain at least 8 characters including one uppercase letter, two digits, and one special character.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPasswordError = validatePassword(formData.newPassword);
    let confirmPasswordError = "";

    if (formData.newPassword !== formData.confirmPassword) {
      confirmPasswordError = "Passwords do not match.";
    }

    if (newPasswordError || confirmPasswordError) {
      setErrors({
        newPassword: newPasswordError,
        confirmPassword: confirmPasswordError,
      });
      setSuccessMessage("");
      return;
    }

    setErrors({
      newPassword: "",
      confirmPassword: "",
    });

    setSuccessMessage("Password changed successfully!");
    console.log("Form Submitted with data:", formData);
    // Optionally clear form here or keep as is
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
          Forget your password
        </h2>
        <form onSubmit={handleSubmit} className="mb-10">
          <div className="mb-4 flex justify-between border px-1 rounded focus-within:ring-2 focus-within:ring-blue-500">
            <label className="block mb-1 text-sm font-medium text-gray-700 w-full">
              New password
              <input
                value={formData.newPassword}
                onChange={handleChange}
                name="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter a new password"
                className="w-full px-4 py-2 rounded-md focus:outline-none"
              />
            </label>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                toggleShowPassword();
              }}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-eye-off">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                  <path d="M3 3l18 18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-eye">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              )}
            </button>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1 absolute bottom-[-20px] left-0">
                {errors.newPassword}
              </p>
            )}
          </div>

          <div className="mb-6 flex justify-between border px-1 rounded focus-within:ring-2 focus-within:ring-blue-500">
            <label className="block mb-1 text-sm font-medium text-gray-600 w-full">
              Confirm New Password
              <input
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your new password"
                className="w-full px-4 py-2 rounded-md focus:outline-none"
              />
            </label>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                toggleShowPassword();
              }}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-eye-off">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                  <path d="M3 3l18 18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-eye">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              )}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1 absolute bottom-[-20px] left-0">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Reset my password
          </button>
        </form>
        {successMessage && (
          <p className="text-green-600 text-sm font-medium text-center">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default TailwindDemo3;
