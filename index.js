const express = require('express');
const app = express();

app.get('/addition', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.send({ result: sum });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
/* */