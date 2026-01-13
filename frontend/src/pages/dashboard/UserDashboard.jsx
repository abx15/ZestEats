import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const UserDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl animate-fadeIn">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-sm p-8 mb-8 border border-red-100"
            >
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                    Welcome back, <span className="text-red-600">{user?.fullName || 'Foodie'}</span>! 👋
                </h1>
                <p className="text-gray-600 text-lg">Your next delicious meal is just a click away.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Stats & Actions */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Active Orders */}
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="bg-orange-100 p-2 rounded-lg text-orange-600">🛵</span>
                                Active Orders
                            </h2>
                            <button className="text-red-600 font-semibold text-sm hover:underline">Track All</button>
                        </div>

                        {/* Mock Active Order */}
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Burger" className="w-10 h-10 object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Burger King</h3>
                                    <p className="text-sm text-gray-500">2 Items • ₹350</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Preparing</span>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
                                Track
                            </button>
                        </div>
                    </motion.div>

                    {/* Order History */}
                    <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Order ID</th>
                                        <th className="px-6 py-4 font-semibold">Restaurant</th>
                                        <th className="px-6 py-4 font-semibold">Date</th>
                                        <th className="px-6 py-4 font-semibold">Amount</th>
                                        <th className="px-6 py-4 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[1, 2, 3].map((order) => (
                                        <tr key={order} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-202{order}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 font-medium">Pizza Hut</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">Oct {10 + order}, 2023</td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-800">₹450</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                                    Delivered
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 text-center border-t border-gray-100">
                            <button className="text-red-600 font-bold text-sm hover:underline">View All Orders</button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Profile & Favorites */}
                <div className="space-y-8">
                    {/* Wallet / Balance */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
                        </div>
                        <h3 className="text-gray-400 text-sm font-medium mb-1">ZestMoney Balance</h3>
                        <div className="text-4xl font-bold mb-6">₹1,250.00</div>
                        <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                            + Add Money
                        </button>
                    </motion.div>

                    {/* Quick Profile Actions */}
                    <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Account Settings</h2>
                        <div className="space-y-2">
                            {['Edit Profile', 'Manage Addresses', 'Payment Methods', 'Notifications', 'Help & Support'].map((item) => (
                                <button key={item} className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors">
                                    <span>{item}</span>
                                    <span className="text-gray-400">›</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Favorites Preview */}
                    <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Favorites</h2>
                        <div className="space-y-4">
                            {[1, 2].map(i => (
                                <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=100&q=80" alt="Food" className="w-12 h-12 rounded-lg object-cover" />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">Spicy Chicken Wings</h4>
                                        <p className="text-xs text-gray-500">KFC • 4.5 ★</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
