import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RestaurantDashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    const stats = [
        { label: 'Orders Today', value: '24', color: 'bg-blue-100 text-blue-600' },
        { label: 'Revenue', value: '₹12,450', color: 'bg-green-100 text-green-600' },
        { label: 'Pending', value: '3', color: 'bg-orange-100 text-orange-600' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Restaurant Dashboard</h1>
                <div className="flex items-center space-x-3">
                    <span className={`text-sm font-semibold ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
                        {isOpen ? 'Open for Orders' : 'Currently Closed'}
                    </span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isOpen ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOpen ? 'translate-x-6' : ''}`} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${stat.color} rounded-xl p-6 shadow-sm`}
                    >
                        <h3 className="text-lg font-medium opacity-80">{stat.label}</h3>
                        <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-card p-6">
                <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Mock Data */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-1234</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2x Burger...</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹350</td>
                                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-primary hover:text-red-900 mr-2">Reject</button>
                                    <button className="text-green-600 hover:text-green-900">Accept</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDashboard;
