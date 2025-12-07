import mongoose from 'mongoose';

const userSchma = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    mobile: {
        type: Number,
        required: true
    },
    role: {
        type: String, enum: ['admin', 'user', 'restaurantOwner', 'deliveryBoy'],
        required: true
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchma);

export default User;
