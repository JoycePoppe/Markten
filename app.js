const express = require('express');
const app = express();

const path = require('path');
const port = 3000;



//publieke map definiëren
app.use(express.static('public'));
//ejs instellen als templating engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

//json inladen in applicatie
const ap = require('./data/ap.json');



app.get('/', function(req, res){
  res.render('main', {
        campussen: ap.campussen
    });


app.get('/Contact', function (req, res) {
  res.render('Contact');
    });

    app.get('/home', function (req, res) {
      res.render('home');
    });
});

app.listen(port);
