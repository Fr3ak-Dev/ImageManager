import express from 'express'; // ESM Esmascript Module import
import router from './router';

const app = express();

app.use('/api', router);

export default app;