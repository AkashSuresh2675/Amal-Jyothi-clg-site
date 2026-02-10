import express from 'express';
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getUpcomingEvents,
  getFeaturedEvents,
  getPastEvents,
} from '../controllers/eventController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllEvents);
router.get('/upcoming/all', getUpcomingEvents);
router.get('/featured/all', getFeaturedEvents);
router.get('/past/all', getPastEvents);
router.get('/:id', getEventById);

// Protected routes (Admin/Editor)
router.post('/', protect, authorize('admin', 'editor'), createEvent);
router.put('/:id', protect, authorize('admin', 'editor'), updateEvent);
router.delete('/:id', protect, authorize('admin'), deleteEvent);

export default router;
