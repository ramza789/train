let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.773972, lng: -122.431297 },
    zoom: 12,
    keyboardShortcuts: false,
    streetViewControl: false,
    zoomControl: false,
  });
}

initMap();
