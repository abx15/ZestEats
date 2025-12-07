import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

const signup = async (req, res) => {
    try {
        const { fullName, email, password, mobile, role } = req.body;
        const user = await User.findOne({ email });
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
export default {
    signup,
    login,
    logout
}