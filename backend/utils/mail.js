import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config({});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

export const sendOtpMail = async (to, otp, html) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: to,
            subject: "Your OTP for Password Reset",
            html: `<p>Your OTP for password reset is <b>${otp}</b>. It will expire in 5 minutes.</p>`,
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export default transporter;