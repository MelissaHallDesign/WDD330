function toggleMenu() {
    document.querySelector('#navigation').classList.toggle('open');
}
document.querySelector('#menu').addEventListener('click', toggleMenu);

/*
Flaming Gorge (Manila UT) https://openweathermap.org/city/5777855
Bear Lake (Garden City UT) https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=41.9605&lon=-111.3986&zoom=10


National Parks:
Arches (Moab): https://openweathermap.org/city/5543307
Bryce Canyon: 
Canyonlands: 
Capitol Reef: 
Zion (Shunesburg): https://openweathermap.org/city/5546822

Using lat lon:

API call:
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

Parameters:
lat, lon coordinates of the location of your interest
Examples of API calls:
api.openweathermap.org/data/2.5/weather?lat=35&lon=139
*/
$(document).ready(function() {
  
    $(".showDetails dt a").click(function(){
      //alert("click")
      $(this).parent().next('dd').toggle();
    });
  });