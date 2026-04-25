import React, { useState } from "react";
import { Link } from "react-router-dom";

const TailwindDemo4 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [emailTextColor, setEmailTextColor] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return regex.test(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setError(
        "Password must be at least 8 character long,include at least one uppercase letter and s-one special character.",
      );
      return;
    }

    setError("");
    console.log("Form submitted with data:", formData);
  };

  const handleEmailTextColor = () => {
    setEmailTextColor((prev) => !prev);
  };

  const handlePasswordShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  console.log(emailTextColor);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-between border focus:border-blue-500 px-1 rounded">
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              className={`w-full px-3 py-3 border-gray-300 rounded outline-none ${emailTextColor ? "text-red-500" : "text-black"}`}
            />
            <button type="button" onClick={handleEmailTextColor}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-color-filter">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13.58 13.79c.27 .68 .42 1.43 .42 2.21c0 1.77 -.77 3.37 -2 4.46a5.93 5.93 0 0 1 -4 1.54c-3.31 0 -6 -2.69 -6 -6c0 -2.76 1.88 -5.1 4.42 -5.79" />
                <path d="M17.58 10.21c2.54 .69 4.42 3.03 4.42 5.79c0 3.31 -2.69 6 -6 6a5.93 5.93 0 0 1 -4 -1.54" />
                <path d="M12 8m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
              </svg>
            </button>
          </div>

          <div
            className={`flex justify-between focus:border-blue-500 border px-1 rounded ${
              error ? "border-red-500" : "border-gray-300"
            }`}>
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              //   type='password'
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              className={`w-full px-3 py-3  rounded outline-none transition mb-2  `}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handlePasswordShowPassword();
              }}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              )}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-text-lg mv-3 transition">
            Log In
          </button>
          <div className="flex justify-center mb-4">
            <Link to="/tailwinddemo3" className="text-blue-600 tx-sm">
              Forget Password
            </Link>
            <br />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded text-base transition">
              Create new account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TailwindDemo4;
