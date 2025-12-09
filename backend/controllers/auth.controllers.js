import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import genToken from '../utils/token.js';
import { sendOtpMail } from '../utils/mailer.js';


const signup = async (req, res) => {
    try {
        const { fullName, email, password, mobile, role } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (password.length > 0 && password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }
        if (mobile.length !== 10) {
            return res.status(400).json({ message: "Mobile number must be 10 digits long" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            mobile,
            role,
        })
        const token = await genToken(user._id);
        res.cookie("token", token, {
            secure: process.env.NODE_ENV === "DEVELOPMENT" ? false : true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,
        });

        res.status(201).json({ message: "User created successfully", token });

        return res.end();

    } catch (error) {
        return res.status(500).json({ message: "Server error" + error });
    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = await genToken(user._id);
        res.status(201).json({ message: "Login successful", token });
    } catch (error) {
        return res.status(500).json({ message: "Server error" + error });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
        res.end();
    } catch (error) {
        return res.status(500).json({ message: "Server error" + error });

    }

}

export { signup, login, logout };


export const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const otp = Math.floor(100000 + Math.random() * 900000);
        user.resetOtp = otp;
        user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes from now
        user.isOtpVerified = false;
        await user.save();
        const isSent = await sendOtpMail(email, otp, true);
        if (isSent) {
            return res.status(200).json({ message: "OTP sent successfully" });
        } else {
            return res.status(500).json({ message: "Failed to send OTP" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server error" + error });

    }
}


const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        if (user.resetOtp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        if (user.otpExpires < Date.now()) {
            return res.status(400).json({ message: "OTP expired" });
        }
        user.isOtpVerified = true;
        await user.save();
        return res.status(200).json({ message: "OTP verified successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error" + error });
    }
}

const resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        if (!user.isOtpVerified) {
            return res.status(400).json({ message: "OTP not verified" });
        }
        if (user.otpExpires < Date.now()) {
            return res.status(400).json({ message: "OTP expired" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        return res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error" + error });
    }
}