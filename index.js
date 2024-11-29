const express = require('express');
const app = express();

app.get('/addition', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.send({ result: sum });
});
//ajout de la soustraction
app.get('/soustraction', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) - parseInt(b);
  res.send({ result: sum });
});
//ajout de la multiplication
app.get('/multiplication', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) * parseInt(b);
  // si b est égal à 0
  res.send({ result: sum });
});
//ajout de la division
app.get('/division', (req, res) => {
  const { a, b } = req.query;
  // si b est égal à 0
  const sum = parseInt(a) / parseInt(b);
  res.send({ result: sum });
});



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
/* */