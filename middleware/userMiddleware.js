import { body, validationResult } from 'express-validator';

export const validateUser = [
  body('firstName').notEmpty().withMessage('name is required'),
  body('lastName').notEmpty().withMessage('surname is required'),
  body('email').isEmail().withMessage('must be a valid email address'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

