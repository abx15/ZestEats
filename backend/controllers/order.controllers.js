import Order from '../models/order.model.js';
import User from '../models/user.model.js';
import Restaurant from '../models/restaurant.model.js';
import { sendEmail, ORDER_PLACED_TEMPLATE, ORDER_STATUS_TEMPLATE } from '../utils/emailService.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';

export const createOrder = async (req, res) => {
    try {
        const { restaurantId, items, totalAmount, deliveryAddress } = req.body;
        const userId = req.user._id;

        // Validate items and total amount calculation here if needed

        const newOrder = new Order({
            customer: userId,
            restaurant: restaurantId,
            items,
            totalAmount,
            deliveryAddress,
            status: 'placed'
        });

        await newOrder.save();

        // Notify restaurant via socket
        const io = req.app.get('io');
        io.to(restaurantId).emit('new_order', newOrder);

        res.status(201).json(newOrder);

    } catch (error) {
        console.log("Error in createOrder", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate('customer', 'fullName email mobile').populate('restaurant', 'name address location phone').populate('deliveryBoy', 'fullName mobile location');

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.log("Error in getOrderById", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMyOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await Order.find({ customer: userId }).sort({ createdAt: -1 }).populate('restaurant', 'name image');
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error in getMyOrders", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const order = await Order.findById(id).populate('customer');

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        order.status = status;
        await order.save();

        // Notify customer and delivery boy
        const io = req.app.get('io');
        io.to(order.customer._id.toString()).emit('order_status_updated', { orderId: id, status });

        // Send Email to Customer
        if (order.customer && order.customer.email) {
            await sendEmail(order.customer.email, `Order Update: ${status}`, ORDER_STATUS_TEMPLATE(status, id));
        }

        res.status(200).json(order);

    } catch (error) {
        console.log("Error in updateOrderStatus", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



// Initialize Razorpay
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createPaymentOrder = async (req, res) => {
    try {
        const { amount } = req.body;
        const options = {
            amount: Math.round(amount * 100), // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_" + Date.now(),
        };

        const order = await razorpay.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.log("Error in createPaymentOrder", error);
        res.status(500).json({ error: "Razorpay Error" });
    }
}

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            if (orderId) {
                const order = await Order.findById(orderId);
                if (order) {
                    order.paymentStatus = 'completed';
                    order.paymentId = razorpay_payment_id;
                    order.status = 'confirmed';
                    await order.save();

                    // Notify restaurant via socket
                    const io = req.app.get('io');
                    io.to(order.restaurant.toString()).emit('new_order', order);

                    // Send Email to Restaurant (assuming we can get owner email via population or just log it for now as a POC)
                    // Robust way: fetch rest -> populate owner
                    try {
                        const fullOrder = await Order.findById(orderId).populate({
                            path: 'restaurant',
                            populate: { path: 'owner' }
                        });

                        if (fullOrder?.restaurant?.owner?.email) {
                            await sendEmail(fullOrder.restaurant.owner.email, "New Order Received!", ORDER_PLACED_TEMPLATE(orderId, order.totalAmount));
                        }
                    } catch (emailErr) {
                        console.error("Failed to send restaurant email", emailErr);
                    }
                }
            }
            res.status(200).json({ success: true, message: "Payment Verified" });
        } else {
            res.status(400).json({ success: false, error: "Invalid Signature" });
        }
    } catch (error) {
        console.log("Error in verifyPayment", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getRestaurantOrders = async (req, res) => {
    // Assuming the user is a restaurant owner and we find their restaurant(s)
    try {
        const userId = req.user._id;
        // Find restaurant owned by this user
        const restaurant = await Restaurant.findOne({ owner: userId });

        if (!restaurant) {
            // If manual restaurant assignment logic isn't fully built, we might return empty
            return res.status(404).json({ error: "Restaurant not found for this user" });
        }

        const orders = await Order.find({ restaurant: restaurant._id }).sort({ createdAt: -1 }).populate('customer', 'fullName mobile');
        res.status(200).json(orders);

    } catch (error) {
        console.log("Error in getRestaurantOrders", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
