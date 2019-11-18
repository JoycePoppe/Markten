var mymap = L.map('mapje').setView([51.212163, 4.415377], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 16,
    id: 'mapbox.streets'
}).addTo(mymap);


var icon = L.icon({
    iconUrl: '/img/plaats.png',
    iconSize:     [50, 40]

});

var marker1 = L.marker([51.225282, 4.417210], {icon: icon}).addTo(mymap); //sint jansplein woensdag vrijdag
var marker2 = L.marker([51.206888, 4.458344], {icon: icon}).addTo(mymap); // arenaplein maandag
var marker3 = L.marker([51.222074, 4.387784], {icon: icon}).addTo(mymap); // van eeden donderdag
var marker4 = L.marker([51.246408, 4.446889], {icon: icon}).addTo(mymap); // franciscusplein dinsdag
var marker5 = L.marker([51.278314, 4.418919], {icon: icon}).addTo(mymap); //KRISTUS-KONINGPLEIN woensdag
var marker6 = L.marker([51.195816, 4.398895], {icon: icon}).addTo(mymap); // DESGUINLEI vrijdag
var marker7 = L.marker([51.248900, 4.422599], {icon: icon}).addTo(mymap); // LUCHTBAL - SANTIAGOSTRAAT donderdag
var marker8 = L.marker([51.225800, 4.404916], {icon: icon}).addTo(mymap); // falconplein zondag
var marker9 = L.marker([51.221298, 4.399991], {icon: icon}).addTo(mymap); // GROTE MARKT woensdag
var marker10 = L.marker([51.228895, 4.477577], {icon: icon}).addTo(mymap); // WIM SAERENSPLEIN zaterdag
var marker11 = L.marker([51.184949, 4.435403], {icon: icon}).addTo(mymap); // rooiplein dinsdag
var marker12 = L.marker([51.207267, 4.430597], {icon: icon}).addTo(mymap); // DAGERAADPLAATS donderdag
var marker13 = L.marker([51.212774, 4.409103], {icon: icon}).addTo(mymap); // OUDEVAARTPLAATS - BLAUWTORENPLEIN	zaterdag zondag
var marker14 = L.marker([51.220566, 4.402239], {icon: icon}).addTo(mymap); // LIJNWAADMARKT zaterdag
var marker15 = L.marker([51.360178, 4.308529], {icon: icon}).addTo(mymap); // BOTERMARKT vrijdag
var marker16 = L.marker([51.216198, 4.433319], {icon: icon}).addTo(mymap); // laar vrijdag
var marker17 = L.marker([51.226720, 4.454770], {icon: icon}).addTo(mymap); // LAKBORSLEI donderdag
var marker18 = L.marker([51.175244, 4.350710], {icon: icon}).addTo(mymap); // KIOSKPLAATS maandag zaterdag
var marker19 = L.marker([51.169990, 4.393344], {icon: icon}).addTo(mymap); // BIST dinsdag
var marker20 = L.marker([51.195710, 4.424446], {icon: icon}).addTo(mymap); // DE VILLEGASSTRAAT	zaterdag
var marker21 = L.marker([51.199881, 4.449768], {icon: icon}).addTo(mymap); // GITSCHOTELLEI woendsdag
var marker22 = L.marker([51.194991, 4.444245], {icon: icon}).addTo(mymap); // ZILLEBEKELAAN vrijdag
var marker23 = L.marker([51.229994, 4.408400], {icon: icon}).addTo(mymap); // NAPOLEONKAAI	vrijdag
var marker24 = L.marker([51.180426, 4.375467], {icon: icon}).addTo(mymap); // MICHEL WILLEMSPLEIN	vrijdag
var marker25 = L.marker([51.218629, 4.396230], {icon: icon}).addTo(mymap); // SINT-JANSVLIET	vrijdag

mymap.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);



var maandag = L.layerGroup([marker2, marker18]);
var dinsdag = L.layerGroup([marker4, marker11, marker19]);
var woensdag = L.layerGroup([marker1, marker5, marker9, marker21]);
var donderdag = L.layerGroup([marker3, marker7, marker12, marker17]);
var vrijdag = L.layerGroup([marker1, marker6, marker15, marker16,marker22,marker23,marker24, marker25]);
var zaterdag = L.layerGroup([marker10, marker13, marker14, marker18,marker20]);
var zondag = L.layerGroup([marker8, marker13]);


var overlayMaps = {
    "maandag": maandag,
    "dinsdag": dinsdag,
    "woensdag": woensdag,
    "donderdag": donderdag,
    "vrijdag": vrijdag,
    "zaterdag": zaterdag,
    "zondag": zondag
};


marker1.addTo(mymap);
marker1.bindPopup("<b>Hallo!</b><br>Dit is het Sint-Jansplein");
marker2.addTo(mymap);
marker2.bindPopup("<b>Hallo!</b><br>Dit is het Arenaplein");
marker3.addTo(mymap);
marker3.bindPopup("<b>Hallo!</b><br>Dit is het F. Van Eedenplein");
marker4.addTo(mymap);
marker4.bindPopup("<b>Hallo!</b><br>Dit is het Franciscusplein");
marker5.addTo(mymap);
marker5.bindPopup("<b>Hallo!</b><br>Dit is het Kristus-Koningplein");
marker6.addTo(mymap);
marker6.bindPopup("<b>Hallo!</b><br>Dit is de Desguinlei");
marker7.addTo(mymap);
marker7.bindPopup("<b>Hallo!</b><br>Dit is de Santtiagostraat");
marker8.addTo(mymap);
marker8.bindPopup("<b>Hallo!</b><br>Dit is het Falconplein");
marker9.addTo(mymap);
marker9.bindPopup("<b>Hallo!</b><br>Dit is de Grote Markt");
marker10.addTo(mymap);
marker10.bindPopup("<b>Hallo!</b><br>Dit is het Wim Saerensplein");
marker11.addTo(mymap);
marker11.bindPopup("<b>Hallo!</b><br>Dit is het Rooiplein");
marker12.addTo(mymap);
marker12.bindPopup("<b>Hallo!</b><br>Dit is de Dageraadplaats");
marker13.addTo(mymap);
marker13.bindPopup("<b>Hallo!</b><br>Dit is het Blauwtorenplein & Oudevaartplaats");
marker14.addTo(mymap);
marker14.bindPopup("<b>Hallo!</b><br>Dit is de Lijnwaadmarkt");
marker15.addTo(mymap);
marker15.bindPopup("<b>Hallo!</b><br>Dit is de Botermarkt");
marker16.addTo(mymap);
marker16.bindPopup("<b>Hallo!</b><br>Dit is het Laar");
marker17.addTo(mymap);
marker17.bindPopup("<b>Hallo!</b><br>Dit is de Lakborslei");
marker18.addTo(mymap);
marker18.bindPopup("<b>Hallo!</b><br>Dit is de Kioskplaats");
marker19.addTo(mymap);
marker19.bindPopup("<b>Hallo!</b><br>Dit is het Bist");
marker20.addTo(mymap);
marker20.bindPopup("<b>Hallo!</b><br>Dit is De Villegasstraat");
marker21.addTo(mymap);
marker21.bindPopup("<b>Hallo!</b><br>Dit is de Gitschotellei");
marker22.addTo(mymap);
marker22.bindPopup("<b>Hallo!</b><br>Dit is de Zillebekelaan");
marker23.addTo(mymap);
marker23.bindPopup("<b>Hallo!</b><br>Dit is de Napoleonkaai");
marker24.addTo(mymap);
marker24.bindPopup("<b>Hallo!</b><br>Dit is het Michel Willemsplein");
marker25.addTo(mymap);
marker25.bindPopup("<b>Hallo!</b><br>Dit is het Sint-Jansvliet");


L.control.layers('', overlayMaps).addTo(mymap);



//mymap.fitWorld();
//mymap.locate({setView: true, maxZoom: 16});
