$(".geo").click(function(){
  navigator.geolocation.getCurrentPosition(function(position){
    $("#res").val(position.coords.latitude +","+position.coords.longitude)
  })
})