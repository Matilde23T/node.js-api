import express from 'express';
import { createInterval, updateInterval, deleteInterval, getAllIntervals } from '../controller/intervalController.js';

const router = express.Router();

// Rotta per creare un nuovo intervallo di obiettivi
router.post('/intervals', createInterval);

// Rotta per aggiornare un intervallo di obiettivi (con ID)
router.put('/intervals/:id', updateInterval);

// Rotta per cancellare un intervallo di obiettivi (con ID)
router.delete('/intervals/:id', deleteInterval);

// Rotta per ottenere tutti gli intervalli con opzioni di filtraggio
router.get('/intervals', getAllIntervals);

export default router;

