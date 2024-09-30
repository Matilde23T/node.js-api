import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//configuarazione dotenv
dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Connessione a MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connessione al database MongoDB riuscita');

    app.listen(PORT, () => {
        console.log(`Server in esecuzione sulla porta ${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Errore durante la connessione al database:', error);
    });

//rotte
import userRoute from './routes/userRoute.js';
import intervalRoute from './routes/intervalRoute.js';
import targetRoute from './routes/targetRoute.js';

// Definizione delle rotte
app.use('/api', userRoute);
app.use('/api', intervalRoute);
app.use('/api', targetRoute);

