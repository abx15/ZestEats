import express from 'express';
import { createRestaurant, getRestaurants, getRestaurantById, addMenuItem } from '../controllers/restaurant.controllers.js';
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router();

router.post("/create", protectRoute, createRestaurant);
router.get("/", getRestaurants);
router.get("/:id", getRestaurantById);
router.post("/menu/add", protectRoute, addMenuItem);

export default router;
