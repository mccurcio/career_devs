var temperature;
var station;
var humidity;
var wind;
var direction;
var icon;


function update(weather){
  temperature.innerHTML = weather.temperature;
  station.innerHTML = weather.station;
  humidity.innerHTML = weather.humidity;
  wind.innerHTML = wind.temperature;
  direction.innerHTML = weather.temperature;
  icon.src = "img/codes/"
}
window.onoad = function(){
  temperature = document.getElementById("temperature");
  station = document.getElementById("station");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");
  icon = document.getElementById("icon");

  update(weather);
}