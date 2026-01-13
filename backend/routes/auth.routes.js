import express from 'express';
import { signup, login, logout, googleLogin, sendOtp, verifyOtp, resetPassword } from '../controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/google-login", googleLogin);
authRouter.post("/send-otp", sendOtp);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);


export default authRouter;
