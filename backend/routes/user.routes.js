import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/user.controllers.js';
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router();

router.get("/profile", protectRoute, getUserProfile);
router.put("/profile", protectRoute, updateUserProfile);

export default router;
