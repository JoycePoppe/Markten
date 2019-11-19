const express = require('express');
const request = require('request');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}



const app = express();

const path = require('path');



//publieke map definiëren
app.use(express.static('public'));
//ejs instellen als templating engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

//json inladen in applicatie
const ap = require('./data/markten.json');



app.get('/', function(req, res){
  res.render('main', {
        markten: markten.markten
    });
});

var data
app.get('/contact', function (req, res) {
  res.render('contact',{
    naam_frontend: data
  });
});

app.get('/home', function (req, res) {
  res.render('home',{
    naam_frontend: data
  });
});

app.get('/detail/:id', function (req, res) {
  res.render('detail',{
    markt: data[req.params.id]
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
