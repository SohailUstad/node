const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World! This is your REST API.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});