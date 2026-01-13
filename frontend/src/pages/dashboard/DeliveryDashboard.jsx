import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DeliveryDashboard = () => {
    const [isOnline, setIsOnline] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Delivery Dashboard</h1>
                <button
                    onClick={() => setIsOnline(!isOnline)}
                    className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-300 shadow-lg ${isOnline ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 hover:bg-gray-500'}`}
                >
                    {isOnline ? 'YOU ARE ONLINE' : 'GO ONLINE'}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Col: Current Task / Map */}
                <div className="lg:col-span-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-xl shadow-card p-6 h-96 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200"
                    >
                        {isOnline ? (
                            <div className="text-center">
                                <span className="text-6xl mb-4 block">🗺️</span>
                                <p className="text-lg">Map View</p>
                                <p className="text-sm">Waiting for new orders...</p>
                            </div>
                        ) : (
                            <p>Go online to start receiving orders.</p>
                        )}
                    </motion.div>

                    {/* Pending Deliveries */}
                    <div className="bg-white rounded-xl shadow-card p-6">
                        <h2 className="text-xl font-bold mb-4">Available Deliveries</h2>
                        {isOnline ? (
                            <p className="text-gray-500 italic">Finding nearby orders...</p>
                        ) : (
                            <p className="text-gray-500 italic">You are offline.</p>
                        )}
                    </div>
                </div>

                {/* Right Col: Stats */}
                <div className="space-y-6">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-xl"
                    >
                        <h3 className="text-gray-300 text-sm font-medium">Today's Earnings</h3>
                        <p className="text-4xl font-bold mt-2">₹0.00</p>
                        <div className="mt-4 flex justify-between text-sm text-gray-400">
                            <span>Rides: 0</span>
                            <span>Hours: 0h</span>
                        </div>
                    </motion.div>

                    <div className="bg-white rounded-xl shadow-card p-6">
                        <h3 className="font-bold mb-4">Recent Feedback</h3>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="flex text-yellow-500 text-xs mb-1">★★★★★</div>
                                <p className="text-sm text-gray-600">"Fast delivery, thanks!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryDashboard;
