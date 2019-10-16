var mymap = L.map('mapje').setView([51.212163, 4.415377], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 16,
    id: 'mapbox.streets'
}).addTo(mymap);

var circle = L.circle([51.212163, 4.415377], {
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



//mymap.fitWorld();
//mymap.locate({setView: true, maxZoom: 16});
