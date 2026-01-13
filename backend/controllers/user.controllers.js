import User from '../models/user.model.js';

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getUserProfile controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const { fullName, mobile, email } = req.body;
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.fullName = fullName || user.fullName;
        user.mobile = mobile || user.mobile;

        // Email update might require verification in a real app
        if (email && email !== user.email) {
            const existingUser = await User.findOne({ email });
            if (existingUser) return res.status(400).json({ error: "Email already in use" });
            user.email = email;
        }

        await user.save();

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            mobile: user.mobile,
            role: user.role
        });

    } catch (error) {
        console.log("Error in updateUserProfile controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
