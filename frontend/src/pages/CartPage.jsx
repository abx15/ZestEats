import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../App';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
    const { cartItems, total, updateQuantity, removeFromCart, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const handlePayment = async () => {
        if (!user) {
            alert("Please login to place order");
            navigate('/login');
            return;
        }

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        try {
            // 1. Create Order in DB (Pending)
            // Note: In a real app, ensure all items are from the same restaurant or handle split orders.
            // Here we assume a single restaurant for demo or pick the first available.
            // You should replace 'YOUR_RESTAURANT_ID' with a valid ObjectId from your database.
            const dummyRestaurantId = "60d0fe4f5311236168a109ca";

            // Calculate total items and amount (already in context, but ensuring consistency)
            const orderPayload = {
                restaurantId: dummyRestaurantId,
                items: cartItems.map(item => ({
                    menuItem: "60d0fe4f5311236168a109cb", // Dummy ID for menu item
                    name: item.name,
                    quantity: item.quantity,
                    price: parseInt(item.discountPrice.replace('₹', ''))
                })),
                totalAmount: total + 40, // Including delivery fee
                deliveryAddress: {
                    address: "User Default Address",
                    location: { lat: 0, lng: 0 }
                }
            };

            const { data: orderData } = await axios.post(`${serverUrl}/api/orders/create`, orderPayload, { withCredentials: true });

            // 2. Create Razorpay Order
            const { data: paymentOrder } = await axios.post(`${serverUrl}/api/orders/payment/create`, {
                amount: orderData.totalAmount
            }, { withCredentials: true });

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: paymentOrder.amount,
                currency: paymentOrder.currency,
                name: "ZestEats",
                description: "Food Order",
                image: "/favicon.png",
                order_id: paymentOrder.id,
                handler: async function (response) {
                    // 3. Verify Payment
                    try {
                        const verifyRes = await axios.post(`${serverUrl}/api/orders/payment/verify`, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            orderId: orderData._id
                        }, { withCredentials: true });

                        if (verifyRes.data.success) {
                            alert("Payment Successful! Order Confirmed.");
                            clearCart();
                            navigate(`/order-tracking/${orderData._id}`);
                        }
                    } catch (err) {
                        console.error("Payment Verification Failed", err);
                        alert("Payment verification failed. Please contact support.");
                    }
                },
                prefill: {
                    name: user.fullName || "User",
                    email: user.email || "user@example.com",
                    contact: typeof user.mobile === 'number' ? user.mobile.toString() : "9999999999",
                },
                theme: {
                    color: "#ff4d4d",
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Payment Error", error);
            alert("Something went wrong during checkout. " + (error.response?.data?.error || error.message));
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-3xl font-bold text-gray-400 mb-4">Your Cart is Empty 🍔</h1>
                <Link to="/menu" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-hover transition">Browse Menu</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map(item => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-4">
                                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div>
                                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">{item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">-</button>
                                <span className="font-medium">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
                        </motion.div>
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-white rounded-xl shadow-card p-6 h-fit">
                    <h2 className="text-xl font-bold mb-4">Bill Details</h2>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-gray-600">
                            <span>Item Total</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Delivery Fee</span>
                            <span>₹40</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                            <span>To Pay</span>
                            <span>₹{total + 40}</span>
                        </div>
                    </div>
                    <button
                        onClick={handlePayment}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg"
                    >
                        Proceed to Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
