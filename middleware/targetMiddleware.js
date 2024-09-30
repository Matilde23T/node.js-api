import { body, param, validationResult } from 'express-validator';

export const validateTarget = [
  param('intervalId').notEmpty().withMessage('interval ID is required'),
  body('description').notEmpty().withMessage(' target description is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
