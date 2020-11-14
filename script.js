function geo() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  var x = document.getElementById("latlong");
  x.value = position.coords.latitude +","+position.coords.longitude;
}