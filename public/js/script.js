var mymap = L.map('mapje').setView([51.505, -0.09], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500
}).addTo(mymap);

var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
]).addTo(mymap);



mymap.fitWorld();
//mymap.locate({setView: true, maxZoom: 16});
