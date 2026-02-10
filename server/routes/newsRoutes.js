import express from 'express';
import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
  getPinnedNews,
  getLatestNews,
} from '../controllers/newsController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllNews);
router.get('/pinned/all', getPinnedNews);
router.get('/latest/all', getLatestNews);
router.get('/:id', getNewsById);

// Protected routes (Admin/Editor)
router.post('/', protect, authorize('admin', 'editor'), createNews);
router.put('/:id', protect, authorize('admin', 'editor'), updateNews);
router.delete('/:id', protect, authorize('admin'), deleteNews);

export default router;
