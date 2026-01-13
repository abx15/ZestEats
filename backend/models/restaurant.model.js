import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: String }, // e.g., 'Starter', 'Main Course', 'Dessert'
    isAvailable: { type: Boolean, default: true }
});

const restaurantSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: { type: String, required: true },
    description: { type: String },
    cuisine: [{ type: String }],
    address: { type: String, required: true },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], index: '2dsphere' } // [longitude, latitude]
    },
    image: { type: String },
    menu: [menuItemSchema],
    rating: { type: Number, default: 0 },
    numRatings: { type: Number, default: 0 },
    isOpen: { type: Boolean, default: true },
    deliveryTime: { type: Number, default: 30 } // in minutes
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
