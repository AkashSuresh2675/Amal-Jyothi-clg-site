import express from 'express';
import {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
  getFacultyByDepartment,
} from '../controllers/facultyController.js';
import { protect, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllFaculty);
router.get('/department/:departmentId', getFacultyByDepartment);
router.get('/:id', getFacultyById);

// Protected routes (Admin/Editor)
router.post('/', protect, authorize('admin', 'editor'), createFaculty);
router.put('/:id', protect, authorize('admin', 'editor'), updateFaculty);
router.delete('/:id', protect, authorize('admin'), deleteFaculty);

export default router;
