
var res = document.getElementById("geolocation")
var loc = navigator.geolocation.getCurrentPosition(showPosition)

function geo(){

}

function showPosition(){
    res.innerHTML = loc
}