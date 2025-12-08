import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-accent/30">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Welcome Back
        </h2>

        {/* Form */}
        <form className="space-y-5">

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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none"
              required
            />

            {/* Show / Hide Icon */}
            <span
              className="absolute right-3 top-[42px] cursor-pointer text-gray-600"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary py-2 text-white font-semibold rounded hover:bg-secondary transition-all"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-primary font-bold hover:underline">
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
