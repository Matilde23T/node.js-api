import { body, validationResult } from 'express-validator';

export const validateInterval = [
  body('startDate').isISO8601().toDate().withMessage('there must be a valid start date'),
  body('endDate').isISO8601().toDate().withMessage('there must be a valid end date'),
  body('user').notEmpty().withMessage('user ID is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];