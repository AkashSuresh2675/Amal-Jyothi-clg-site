import express from 'express';
import { register, login, getMe, updatePassword, logout } from '../controllers/authController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.post('/register', protect, authorize('admin'), register);
router.post('/login', login);
router.post('/logout', logout);

// Protected routes
router.get('/me', protect, getMe);
router.put('/update-password', protect, updatePassword);

export default router;
