function toggleMenu() {
    document.querySelector('#navigation').classList.toggle('open');
}
document.querySelector('#menu').addEventListener('click', toggleMenu);

function hikeDetails() {
    document.querySelector('#hikeDetails').classList.toggle('hidden');
}
document.querySelector('#Details').removeEventListener('click', hikeDetails);


// function hikeDetails() {
//     let detailDisplay = document.getElementById("Details");
//     detailDisplay.classList.toggle("showDetails");
// }

//FROM CODEPEN
// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav';
});
// register click event listener
document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className = 'fav';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = '';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage







// function toggleDetails() {
//     document.querySelector('#navigation').classList.toggle('open');
// }
// document.querySelector('#menu').addEventListener('click', toggleDetails);

// //Favorite Hike Using localStorage
// //Use empty array to get favorites
// const fave = JSON.parse(localStorage.getItem('fave'));
// //Add the class 'star' on each favorited item
// fave.forEach(function(favorites) {
//   document.getElementById(favorites).className = 'star';
// });

// //Add event listener to star the items
// document.querySelector('.favorite').addEventListener('click', function(e) {
//   var id = e.target.id,
//   item = e.target,
//   index = fave.indexOf(id);
// // return if target doesn't have an id (shouldn't happen)
// if (!id) return;
// // item is not favorite
// if (index == -1) {
// fave.push(id);
// item.className = 'star';
// // item is already favorite
// } else {
// fave.splice(index, 1);
// item.className = '';
// }
// // store array in local storage
// localStorage.setItem('fave', JSON.stringify(fave));
// });

// function toggleMenu() {
//   document.querySelector('#showHike').classList.toggle('openDetails');
// }
// document.querySelector('#details').addEventListener('click', toggleMenu);

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


// $(document).ready(function() {
  
//     $(".showDetails dt a").click(function(){
//       //alert("click")
//       $(this).parent().next('dd').toggle();
//     });
//   });