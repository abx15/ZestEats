import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSocket } from '../context/SocketContext';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const OrderTracking = () => {
    const { orderId } = useParams();
    const socket = useSocket();
    const [status, setStatus] = useState('placed'); // placed, confirmed, preparing, out_for_delivery, delivered

    // Mock locations (Mumbai default)
    const [riderLocation, setRiderLocation] = useState({ lat: 19.0760, lng: 72.8777 });

    useEffect(() => {
        if (!socket) return;

        socket.on('order_status_updated', (data) => {
            if (data.orderId === orderId) {
                setStatus(data.status);
            }
        });

        socket.on('rider_location_updated', (data) => {
            if (data.orderId === orderId) {
                setRiderLocation(data.location);
            }
        });

        return () => {
            socket.off('order_status_updated');
            socket.off('rider_location_updated');
        };
    }, [socket, orderId]);

    const steps = [
        { id: 'placed', label: 'Order Placed', icon: '📝' },
        { id: 'confirmed', label: 'Confirmed', icon: '✅' },
        { id: 'preparing', label: 'Preparing', icon: '🍳' },
        { id: 'out_for_delivery', label: 'Out for Delivery', icon: '🛵' },
        { id: 'delivered', label: 'Delivered', icon: '🏠' },
    ];

    const currentStepIndex = steps.findIndex(s => s.id === status);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Track Order #{orderId}</h1>

            {/* Status Bar */}
            <div className="bg-white rounded-xl shadow-card p-8 mb-8">
                <div className="relative flex justify-between items-center">
                    {/* Progress Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200"></div>
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-green-500 transition-all duration-1000"
                        style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                    ></div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: index <= currentStepIndex ? 1.2 : 1 }}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-colors duration-500 ${index <= currentStepIndex ? 'bg-green-500 border-white text-white' : 'bg-gray-200 border-white text-gray-500'
                                    }`}
                            >
                                {step.icon}
                            </motion.div>
                            <p className={`mt-2 text-sm font-medium ${index <= currentStepIndex ? 'text-green-600' : 'text-gray-400'}`}>
                                {step.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-gray-100 rounded-xl h-96 overflow-hidden relative shadow-inner z-0">
                    <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {/* Restaurant Marker (Static for Demo) */}
                        <Marker position={[19.0800, 72.8800]}>
                            <Popup>
                                Restaurant Location <br /> preparing your food.
                            </Popup>
                        </Marker>

                        {/* Rider Marker */}
                        <Marker position={[riderLocation.lat, riderLocation.lng]}>
                            <Popup>
                                Rider is here!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <div className="bg-white rounded-xl shadow-card p-6">
                    <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                            <img src="https://via.placeholder.com/150" alt="Rider" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold">Rahul (Rider)</h3>
                            <p className="text-sm text-gray-500">4.8 ★ • 1500+ deliveries</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition">Call Rider</button>
                        <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-bold hover:bg-gray-200 transition">Chat with Support</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
