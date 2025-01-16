const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // This will cause a 500 error instead of a 404
    res.status(500).json({ message: 'User not found' });
  }
  res.json(user);
});