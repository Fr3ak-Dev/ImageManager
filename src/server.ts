import express from 'express'; // ESM Esmascript Module import

const app = express();

app.get('/', (req, res) => {
  res.send('Image Manager');
});

export default app;