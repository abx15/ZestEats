import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/Logo.png";

const serverUrl = "http://localhost:8000";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);

  // STEP 1 ▶ Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${serverUrl}/api/auth/send-otp`, { email });
      alert(res.data.message || "OTP sent!");
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2 ▶ Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${serverUrl}/api/auth/verify-otp`, { email, otp });
      alert(res.data.message || "OTP Verified!");
      setStep(3);
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // STEP 3 ▶ Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) return alert("Passwords don't match!");

    setLoading(true);

    try {
      const res = await axios.post(`${serverUrl}/api/auth/reset-password`, {
        email,
        password,
      });

      alert(res.data.message || "Password reset successful!");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-background px-4 pt-20">
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-xl border">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} className="h-20" alt="Logo" />
        </div>

        <h2 className="text-center text-2xl font-bold text-primary mb-6">
          {step === 1 && "Forgot Password"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Reset Password"}
        </h2>

        {/* STEP 1 → Email */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-4 py-2 rounded outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* STEP 2 → OTP */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border px-4 py-2 rounded outline-none"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <p className="text-center text-sm text-gray-500 cursor-pointer hover:text-primary"
               onClick={() => handleSendOtp(new Event("submit"))}>
              Resend OTP
            </p>
          </form>
        )}

        {/* STEP 3 → Reset Password */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <input
              type="password"
              placeholder="New Password"
              className="w-full border px-4 py-2 rounded outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border px-4 py-2 rounded outline-none"
              required
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />

            <button
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded"
            >
              {loading ? "Saving..." : "Reset Password"}
            </button>
          </form>
        )}

        {/* Back to login */}
        <p className="text-center mt-6">
          Back to{" "}
          <a href="/login" className="text-primary font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
