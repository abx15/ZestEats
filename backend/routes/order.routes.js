import express from 'express';
import { createOrder, getOrderById, getMyOrders, getRestaurantOrders, updateOrderStatus, createPaymentOrder, verifyPayment } from '../controllers/order.controllers.js';
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router();

router.post("/create", protectRoute, createOrder);
router.post("/payment/create", protectRoute, createPaymentOrder);
router.post("/payment/verify", protectRoute, verifyPayment);
router.get("/my-orders", protectRoute, getMyOrders);
router.get("/restaurant-orders", protectRoute, getRestaurantOrders);
router.get("/:id", protectRoute, getOrderById);
router.put("/:id/status", protectRoute, updateOrderStatus);

export default router;
