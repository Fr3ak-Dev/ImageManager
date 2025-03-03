import express from 'express'; // ESM Esmascript Module import
import 'dotenv/config'; // Import the dotenv package to read the .env file
import router from './router';
import { connectDB } from './config/db';

const app = express();

connectDB();

app.use(express.json());    // Enabled reading of form data from the request body (req.body)

app.use('/api', router);

export default app;