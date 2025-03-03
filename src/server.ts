import express from 'express'; // ESM Esmascript Module import
import router from './router';

const app = express();

app.use(express.json());    // Enabled reading of form data from the request body (req.body)

app.use('/api', router);

export default app;