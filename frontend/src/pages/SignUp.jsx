import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../assets/Logo.png";

const serverUrl = "http://localhost:8000"; // Backend server URL

const SignUp = () => {
  const navigate = useNavigate();

  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");

  // Show/Hide Password
  const [showPass, setShowPass] = useState(false);
  const [showCpass, setShowCpass] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        {
          fullName,
          email,
          mobile: mobileNumber,
          password,
          role,
        },
        { withCredentials: true }
      );

      if (result.status === 201) {
        alert("Account created successfully!");
        // Store token in localStorage
        if (typeof window !== 'undefined' && result.data.token) {
          localStorage.setItem("token", result.data.token);
        }
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text px-4 pt-20">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-accent/30">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto sm:h-24 md:h-28 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSignUp}>
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />
            <span
              className="absolute right-3 top-[42px] cursor-pointer text-gray-600"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type={showCpass ? "text" : "password"}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />
            <span
              className="absolute right-3 top-[42px] cursor-pointer text-gray-600"
              onClick={() => setShowCpass(!showCpass)}
            >
              {showCpass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Role Buttons */}
          <div className="flex justify-between mt-2 mb-4">
            {["user", "deliveryBoy", "restaurantOwner"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 mx-1 py-2 rounded font-medium transition-all text-sm ${
                  role === r
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {r === "user"
                  ? "Customer"
                  : r === "deliveryBoy"
                  ? "Delivery Boy"
                  : "Restaurant Owner"}
              </button>
            ))}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-primary py-2 text-white font-semibold rounded hover:bg-secondary transition-all"
          >
            Sign Up
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Sign Up */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-all"
              onClick={() => window.open(`${serverUrl}/auth/google`, "_self")}
            >
              <FcGoogle className="text-red-500" /> Sign up with Google
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-bold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
