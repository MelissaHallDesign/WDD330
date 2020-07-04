//Arches Weather
const ArchesapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5543307&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";

fetch(ArchesapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('Acurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Atemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Ahumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Aspeed')
    .textContent = jsObject.wind.speed;

    runWindChillA();
  });
  function runWindChillA(){
    let temp = parseFloat(document.getElementById('Atemp').textContent);
    let speed = parseFloat(document.getElementById('Aspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    let calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Acalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Acalc').innerHTML = 'N/A';
}
}

//Bryce Weather

//Canyonlands Weather

//Capitol Reef Weather

//Zions Weather