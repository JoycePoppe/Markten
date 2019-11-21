// Wegens de filter gebruiken we voor deze content niet de databanks

var mymap = L.map('mapje').setView([51.212163, 4.415377], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 16,
    id: 'mapbox.streets'
}).addTo(mymap);


var icon = L.icon({
    iconUrl: '/img/marker.png',
    iconSize:     [100, 80]

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
        .bindPopup("Jij bent hier. Binnen de " + radius + " meter van dit punt").openPopup();

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
marker1.bindPopup("<b>A-MERT!</b><br>Sint-Jansplein</br><b>Woensdag en vrijdag</br><b>06:00 - 15:00</br>");
marker2.addTo(mymap);
marker2.bindPopup("<b>A-MERT!</b><br>Arenaplein</br><b>Maandag</br><b>06:00 - 15:00</br>");
marker3.addTo(mymap);
marker3.bindPopup("<b>A-MERT!</b><br>F. Van Eedenplein</br><b>Donderdag</br><b>06:00 - 15:00</br>");
marker4.addTo(mymap);
marker4.bindPopup("<b>A-MERT!</b><br>Franciscusplein</br><b>Dinsdag</br><b>06:00 - 15:00</br>");
marker5.addTo(mymap);
marker5.bindPopup("<b>A-MERT!</b><br>Kristus-Koningplein</br><b>Woensdag</br><b>06:00 - 15:00</br>");
marker6.addTo(mymap);
marker6.bindPopup("<b>A-MERT!</b><br>Desguinlei</br><b>Vrijdag</br><b>09:30 - 18:30</br>");
marker7.addTo(mymap);
marker7.bindPopup("<b>A-MERT!</b><br>Santtiagostraat</br><b>Donderdag</br><b>06:00 - 15:00</br>");
marker8.addTo(mymap);
marker8.bindPopup("<b>A-MERT!</b><br>Falconplein</br><b>Zondag</br><b>06:00 - 18:00</br>");
marker9.addTo(mymap);
marker9.bindPopup("<b>A-MERT!</b><br>Grote Markt</br><b>Woensdag</br><b>07:00 - 22:00</br>");
marker10.addTo(mymap);
marker10.bindPopup("<b>A-MERT!</b><br>Wim Saerensplein</br><b>Zaterdag</br><b>06:00 - 15:00</br>");
marker11.addTo(mymap);
marker11.bindPopup("<b>A-MERT!</b><br>Rooiplein</br><b>Dinsdag</br><b>06:00 - 15:00</br>");
marker12.addTo(mymap);
marker12.bindPopup("<b>A-MERT!</b><br>Dageraadplaats</br><b>Donderdag</br><b>06:00 - 15:00</br>");
marker13.addTo(mymap);
marker13.bindPopup("<b>A-MERT!</b><br>Blauwtorenplein & Oudevaartplaats</br><b>Zaterdag en zondag</br><b>06:00 - 18:00</br>");
marker14.addTo(mymap);
marker14.bindPopup("<b>A-MERT!</b><br>Lijnwaadmarkt</br><b>Zaterdag</br><b>06:00 - 15:00</br>");
marker15.addTo(mymap);
marker15.bindPopup("<b>A-MERT!</b><br>Botermarkt</br><b>Vrijdag</br><b>06:00 - 15:00</br>");
marker16.addTo(mymap);
marker16.bindPopup("<b>A-MERT!</b><br>Laar</br><b>Vrijdag</br><b>06:00 - 15:00</br>");
marker17.addTo(mymap);
marker17.bindPopup("<b>A-MERT!</b><br>Lakborslei</br><b>Donderdag</br><b>06:00 - 15:00</br>");
marker18.addTo(mymap);
marker18.bindPopup("<b>A-MERT!</b><br>Kioskplaats</br><b>Zaterdag</br><b>06:00 - 15:00</br>");
marker19.addTo(mymap);
marker19.bindPopup("<b>A-MERT!</b><br>Bist</br><b>Dinsdag</br><b>06:00 - 15:00</br>");
marker20.addTo(mymap);
marker20.bindPopup("<b>A-MERT!</b><br>De Villegasstraat</br><b>Zaterdag</br><b>06:00 - 15:00</br>");
marker21.addTo(mymap);
marker21.bindPopup("<b>A-MERT!</b><br>Gitschotellei</br><b>Woensdag</br><b>06:00 - 15:00</br>");
marker22.addTo(mymap);
marker22.bindPopup("<b>A-MERT!</b><br>Zillebekelaan</br><b>Vrijdag</br><b>06:00 - 15:00</br>");
marker23.addTo(mymap);
marker23.bindPopup("<b>A-MERT!</b><br>Napoleonkaai</br><b>Vrijdag</br><b>15:00 - 22:00</br>");
marker24.addTo(mymap);
marker24.bindPopup("<b>A-MERT!</b><br>Michel Willemsplein</br><b>Vrijdag</br><b>06:00 - 15:00</br>");
marker25.addTo(mymap);
marker25.bindPopup("<b>A-MERT!</b><br>Sint-Jansvliet</br><b>Zondag</br><b>07:00 - 19:00</br>");

maandag.addTo(mymap);
dinsdag.addTo(mymap);
woensdag.addTo(mymap);
donderdag.addTo(mymap);
vrijdag.addTo(mymap);
zaterdag.addTo(mymap);
zondag.addTo(mymap);
L.control.layers('', overlayMaps).addTo(mymap);



//mymap.fitWorld();
//mymap.locate({setView: true, maxZoom: 16});
