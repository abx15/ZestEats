import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";

const SignUp = () => {

  const [showPass, setShowPass] = useState(false);
  const [showCpass, setShowCpass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text px-4">
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
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
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
              className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />

            {/* Eye Icon */}
            <span
              className="absolute right-3 top-[42px] text-gray-600 cursor-pointer"
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
              className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />

            {/* Eye Icon */}
            <span
              className="absolute right-3 top-[42px] text-gray-600 cursor-pointer"
              onClick={() => setShowCpass(!showCpass)}
            >
              {showCpass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary py-2 text-white font-semibold rounded hover:bg-secondary transition-all"
          >
            Sign Up
          </button>
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
