import express from 'express';
import { signup, login, logout, sendOtp, verifyOtp, resetPassword, googleAuth } from '../controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/send-otp", sendOtp);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.get("/logout", logout);
authRouter.post("/google-auth", googleAuth);


export default authRouter;
