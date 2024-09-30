
import express from "express";
import { createTarget, updateTarget, deleteTarget } from "../controller/targetController.js";
import { validateTarget } from '../middleware/targetMiddleware.js'; // Importa il middleware

const router = express.Router();

//crea target
router.post('/intervals/:intervalId/targets', validateTarget, createTarget); 

//modifica target
router.put('/intervals/:intervalId/targets/:targetId', validateTarget, updateTarget);

//elimina target
router.delete('/intervals/:intervalId/targets/:targetId', deleteTarget);

export default router;