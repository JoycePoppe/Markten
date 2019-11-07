const express = require('express');
const request = require('request');
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
});

var data;
app.get('/filter', function (req, res) {
  res.render('filter');
});

app.get('/home', function (req, res) {
  res.render('home',{
    naam_frontend: data
  });
});


app.listen(port);

request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek3/MapServer/202/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  function(error, response, body){
    data = JSON.parse(body);
    data = data.features;
    console.log(data);

    /*for(var i=0; i < data.features.length; i++) {
        console.log("naam: " + data.features[i].attributes.soort);
        console.log("naam: " + data.features[i].attributes.locatie);
        console.log("naam: " + data.features[i].attributes.marktdag1);
        console.log("naam: " + data.features[i].attributes.marktdag2);
        console.log("naam: " + data.features[i].attributes.van);
        console.log("naam: " + data.features[i].attributes.tot);
        console.log("naam: " + data.features[i].attributes.district);

        console.log("coord: " + data.features[i].geometry.x + ", " + data.features[i].geometry.y);
        console.log("");
    }*/
}
);