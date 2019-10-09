console.log("Hello World");

// deze 3 lijnen heb je altijd nodig en moeten bovenaan
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('A-Mert, Your guide to go');
});

//deze moet altijd onderaan
app.listen(port);
