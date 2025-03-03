// const express = require('express'); // CommonJS import
import express from 'express'; // ESM Esmascript Module import

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Image Manager');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});