function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 37.773972, lng: -122.431297 },
    keyboardShortcuts: false,
    streetViewControl: false,
    zoomControl: false,
  });
}
