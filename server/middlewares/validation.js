import { validationResult } from 'express-validator';

// Validation result checker
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }

  next();
};

// Common validation chains
import { body, param, query } from 'express-validator';

// Auth validations
export const registerValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('role')
    .optional()
    .isIn(['admin', 'editor'])
    .withMessage('Invalid role'),
];

export const loginValidation = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required'),
];

// Department validations
export const departmentValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Department name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Department name must be between 2 and 100 characters'),
  body('code')
    .trim()
    .notEmpty()
    .withMessage('Department code is required')
    .isLength({ min: 2, max: 10 })
    .withMessage('Department code must be between 2 and 10 characters')
    .toUpperCase(),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
  body('hod')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('HOD name must not exceed 100 characters'),
];

// Faculty validations
export const facultyValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Faculty name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Faculty name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  body('department')
    .notEmpty()
    .withMessage('Department is required')
    .isMongoId()
    .withMessage('Invalid department ID'),
  body('designation')
    .trim()
    .notEmpty()
    .withMessage('Designation is required'),
  body('qualification')
    .trim()
    .notEmpty()
    .withMessage('Qualification is required'),
  body('experience')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Experience must be a positive number'),
];

// News validations
export const newsValidation = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('News title is required')
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  body('content')
    .trim()
    .notEmpty()
    .withMessage('News content is required')
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters'),
  body('category')
    .optional()
    .isIn(['announcement', 'event', 'achievement', 'notice', 'general'])
    .withMessage('Invalid category'),
  body('isPinned').optional().isBoolean().withMessage('isPinned must be boolean'),
  body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be boolean'),
];

// Event validations
export const eventValidation = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Event title is required')
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Event description is required')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters'),
  body('venue').trim().notEmpty().withMessage('Venue is required'),
  body('startDate')
    .notEmpty()
    .withMessage('Start date is required')
    .isISO8601()
    .withMessage('Invalid start date format'),
  body('endDate')
    .notEmpty()
    .withMessage('End date is required')
    .isISO8601()
    .withMessage('Invalid end date format'),
  body('category')
    .optional()
    .isIn(['technical', 'cultural', 'sports', 'seminar', 'workshop', 'fest', 'other'])
    .withMessage('Invalid category'),
  body('registrationRequired')
    .optional()
    .isBoolean()
    .withMessage('registrationRequired must be boolean'),
];

// ID param validation
export const idParamValidation = [
  param('id').isMongoId().withMessage('Invalid ID format'),
];

// Pagination query validation
export const paginationValidation = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
];
