import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

export const sendEmail = async (to, subject, html) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER || 'ZestEats <noreply@zesteats.com>',
            to,
            subject,
            html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};

export const ORDER_PLACED_TEMPLATE = (orderId, total) => `
    <h1>New Order Received!</h1>
    <p>Order #${orderId} has been placed.</p>
    <p>Total Amount: ₹${total}</p>
    <p>Please accept the order in your dashboard.</p>
`;

export const ORDER_STATUS_TEMPLATE = (status, orderId) => `
    <h1>Order Update</h1>
    <p>Your order #${orderId} is now <strong>${status}</strong>.</p>
    <p>Track your order on the app for live updates.</p>
`;
