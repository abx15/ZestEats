import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../assets/Logo.png";

const serverUrl = "http://localhost:8000"; // Backend server URL

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      if (result.status === 200) {
        alert("Login Successful!");
        // Store token in localStorage
        if (typeof window !== 'undefined' && result.data.token) {
          localStorage.setItem("token", result.data.token);
        }
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed!");
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
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Welcome Back
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
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

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary py-2 text-white font-semibold rounded hover:bg-secondary transition-all"
          >
            Login
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Login */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-all"
              onClick={() => window.open(`${serverUrl}/auth/google`, "_self")}
            >
              <FcGoogle className="text-red-500" /> Login with Google
            </button>
          </div>
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
