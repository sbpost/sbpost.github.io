"use strict"

// Initialize the map + set view to chosen coordinates and zoom level
let mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmFsY2hlbnBvc3QiLCJhIjoiY2tqaWJ1bXRsMmd4MjMxc2NobWd3Nnk2dyJ9.1IiEC7KCRVz1sQsnA562Yw'
}).addTo(mymap);


const marker_coords = [[20.877256667196395, 95.85918541151216], 
 [16.257278295425216, 97.72079215537164],
 [16.861164437809514, 96.12908698253791],
 [16.83594716109176, 96.17141215555051],
 [16.861164437809514, 96.12908698253791],
 [16.968012125381208, 96.14523179147754],
 [16.8237463944436, 96.21211224527993],
 [16.8237463944436, 96.21211224527993],
 [21.98306764132416, 96.08501437452537],
 [13.865887237338725, 98.26250412966354],
 [16.876242580199527, 97.64391080228363],
 [19.75948300933603, 96.06477226150693],
 [20.493161084121652, 96.88394940184331],
 [19.75948300933603, 96.06477226150693],
 [16.8237463944436, 96.21211224527993],
 [16.8237463944436, 96.21211224527993],
 [18.53293590367587, 96.61940732750786],
 [13.865887237338725, 98.26250412966354]]

for(let i = 0; i < marker_coords.length; i++) {
let marker = L.marker(marker_coords[i]).addTo(mymap);
}


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

marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
