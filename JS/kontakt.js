mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VyZGE1MjIiLCJhIjoiY2wwczJ2M24yMDlmYTNjcGtteG05ZWV2ZiJ9.6nPrlOmdtKJ-JuH73iqcyQ';
const monument = [10.208814, 56.158277];
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/gerda522/cl0s32hd4001214s29ykcl5iq', // style URL
  center: monument,
  zoom: 15 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

// create the popup
const popup = new mapboxgl.Popup({
  offset: 25
}).setText(
  'Guldsmedgade 26B, 8000 Aarhus C'
);

// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
  .setLngLat(monument)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);
