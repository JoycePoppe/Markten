// Wegens de filter gebruiken we voor deze content niet de databanks

var mymap = L.map('mapje').setView([51.212163, 4.415377], 13);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
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
marker1.bindPopup("<string> A-MERT!</br>Sint-Jansplein</br>Woensdag en vrijdag</br>06:00 - 15:00 </br> <img src=/img/markt1.jpg  width=120px></img></string>");
marker2.addTo(mymap);
marker2.bindPopup("<string>A-MERT!</br>Arenaplein</br>Maandag</br>06:00 - 15:00 </br> <img src=/img/markt2.jpg  width=120px></img></string>");
marker3.addTo(mymap);
marker3.bindPopup("<string>A-MERT!</br>F. Van Eedenplein</br>Donderdag</br>06:00 - 15:00</br> <img src=/img/markt3.jpg  width=120px></img></string>");
marker4.addTo(mymap);
marker4.bindPopup("<string>A-MERT!</br>Franciscusplein</br>Dinsdag</br>06:00 - 15:00</br> <img src=/img/markt4.jpg  width=120px></img></string>");
marker5.addTo(mymap);
marker5.bindPopup("<string>A-MERT!</br>Kristus-Koningplein</br>Woensdag</br>06:00 - 15:00</br> <img src=/img/markt5.png  width=120px></img></string>");
marker6.addTo(mymap);
marker6.bindPopup("<string>A-MERT!</br>Desguinlei</br>Vrijdag</br>09:30 - 18:30</br> <img src=/img/markt6.jpg  width=120px ></img></string>");
marker7.addTo(mymap);
marker7.bindPopup("<string>A-MERT!</br>Santtiagostraat</br>Donderdag</br>06:00 - 15:00</br> <img src=/img/markt7.jpg  width=120px ></img></string>");
marker8.addTo(mymap);
marker8.bindPopup("<string>A-MERT!</br>Falconplein</br>Zondag</br>06:00 - 18:00</br> <img src=/img/markt8.jpg  width=120px ></img></string>");
marker9.addTo(mymap);
marker9.bindPopup("<string>A-MERT!</br>Grote Markt</br>Woensdag</br>07:00 - 22:00</br> <img src=/img/markt9.jpg  width=120px ></img></string>");
marker10.addTo(mymap);
marker10.bindPopup("<string>A-MERT!</br>Wim Saerensplein</br>Zaterdag</br>06:00 - 15:00</br> <img src=/img/markt10.jpg  width=120px ></img></string>");
marker11.addTo(mymap);
marker11.bindPopup("<string>A-MERT!</br>Rooiplein</br>Dinsdag</br>06:00 - 15:00</br> <img src=/img/markt11.jpg  width=120px ></img></string>");
marker12.addTo(mymap);
marker12.bindPopup("<string>A-MERT!</br>Dageraadplaats</br>Donderdag</br>06:00 - 15:00</br> <img src=/img/markt12.jpg  width=120px ></img></string>");
marker13.addTo(mymap);
marker13.bindPopup("<string>A-MERT!</br>Blauwtorenplein & Oudevaartplaats</br>Zaterdag en zondag</br>06:00 - 18:00</br> <img src=/img/markt13.jpg  width=120px ></img></string>");
marker14.addTo(mymap);
marker14.bindPopup("<string>A-MERT!</br>Lijnwaadmarkt</br>Zaterdag</br>06:00 - 15:00</br> <img src=/img/markt14.jpg  width=120px></img></string>");
marker15.addTo(mymap);
marker15.bindPopup("<string>A-MERT!</br>Botermarkt</br>Vrijdag</br>06:00 - 15:00</br> <img src=/img/markt15.jpg  width=120px ></img></string>");
marker16.addTo(mymap);
marker16.bindPopup("<string>A-MERT!</br>Laar</br>Vrijdag</br>06:00 - 15:00</br> <img src=/img/markt16.jpg  width=120px ></img></string>");
marker17.addTo(mymap);
marker17.bindPopup("<string>A-MERT!</br>Lakborslei</br>Donderdag</br>06:00 - 15:00</br> <img src=/img/markt17.jpg  width=120px ></img></string>");
marker18.addTo(mymap);
marker18.bindPopup("<string>A-MERT!</br>Kioskplaats</br>Zaterdag</br>06:00 - 15:00</br> <img src=/img/markt18.jpg  width=120px ></img></string>");
marker19.addTo(mymap);
marker19.bindPopup("<string>A-MERT!</br>Bist</br>Dinsdag</br>06:00 - 15:00</br> <img src=/img/markt19.png  width=120px ></img></string>");
marker20.addTo(mymap);
marker20.bindPopup("<string>A-MERT!</br>De Villegasstraat</br>Zaterdag</br>06:00 - 15:00</br> <img src=/img/markt20.jpg  width=120px ></img></string>");
marker21.addTo(mymap);
marker21.bindPopup("<string>A-MERT!</br>Gitschotellei</br>Woensdag</br>06:00 - 15:00</br> <img src=/img/markt21.jpg  width=120px ></img></string>");
marker22.addTo(mymap);
marker22.bindPopup("<string>A-MERT!</br>Zillebekelaan</br>Vrijdag</br>06:00 - 15:00</br> <img src=/img/markt22.jpg  width=120px ></img></string>");
marker23.addTo(mymap);
marker23.bindPopup("<string>A-MERT!</br>Napoleonkaai</br>Vrijdag</br>15:00 - 22:00</br> <img src=/img/markt23.jpg  width=120px ></img></string>");
marker24.addTo(mymap);
marker24.bindPopup("<string>A-MERT!</br>Michel Willemsplein</br>Vrijdag</br>06:00 - 15:00</br> <img src=/img/markt24.jpg  width=120px ></img></string>");
marker25.addTo(mymap);
marker25.bindPopup("<string>A-MERT!</br>Sint-Jansvliet</br>Zondag</br>07:00 - 19:00</br> <img src=/img/markt25.jpg  width=120px ></img></string>");

maandag.addTo(mymap);
dinsdag.addTo(mymap);
woensdag.addTo(mymap);
donderdag.addTo(mymap);
vrijdag.addTo(mymap);
zaterdag.addTo(mymap);
zondag.addTo(mymap);
L.control.layers('', overlayMaps).addTo(mymap);
