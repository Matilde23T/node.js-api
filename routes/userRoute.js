import express from 'express';
import { createUser, getUser, UpdateUser, deleteUser } from '../controller/userController.js';
import { validateUser } from '../middleware/userMiddleware.js'; 

const router = express.Router();

// nuovo utente
router.post('/users', validateUser, createUser);

// Ottenere un singolo utente 
router.get('/users/:id', getUser);

// Aggiornare utente
router.put('/users/:id', validateUser, UpdateUser);

// Eliminareuten te 
router.delete('/users/:id', deleteUser);

export default router;
