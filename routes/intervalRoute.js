import express from 'express';
import { createInterval, updateInterval, deleteInterval, getAllIntervals } from '../controller/intervalController.js';

const router = express.Router();

//creare intervallo di obiettivi
router.post('/intervals', createInterval);

//aggiornare intervallo di obiettivi (con ID)
router.put('/intervals/:id', updateInterval);

//cancellare intervallo di obiettivi (con ID)
router.delete('/intervals/:id', deleteInterval);

//ottenere tutti gli intervalli con opzioni di filtraggio
router.get('/intervals', getAllIntervals);

export default router;

