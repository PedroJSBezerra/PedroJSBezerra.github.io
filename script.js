var x = document.getElementById("latlong");
function geo() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  x.value = position.coords.latitude +","+position.coords.longitude;
}