const express = require('express');
const app = express();
const port = 3001;

app.get('/api/properties', (req, res) => {
  res.json([
    { id: 1, name: 'Property 1', price: '$100,000' },
    { id: 2, name: 'Property 2', price: '$150,000' },
    // Add more properties as needed
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
