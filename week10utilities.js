// create a function called getJSON(url). 
//Add the code to make your function do a simple fetch 
//request using the url argument that should get passed in, 
//and return the response in JSON.

// You can use https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02' 
//to test your function with. Check your function against mine once you have it working.

// fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02')
//     .then(result => result.json())
//     .then(person => {
//         document.querySelector('section').innerHTML +=
//         //Send to HTML the name of the person 1 in the URL above
//         `<h1>${person.name}</h1>`;
 
//         //Build a list and send to HTML of all the movies person 1 was in
//         person.films.forEach (
//             film => {
//                 document.getElementById('movieList').innerHTML +=
//                 `<li><a href="${film}">${film}</li>`;
//             }
//         )
//     });


// let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// fetch(url)
// export function getJSON(url) {
//     return fetch(url)
//         .then(function(response) {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             } else {
//                 return response.json();
//             }
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// }

// export const getLocation = function(options) {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject, options);
//     });
// };

// let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
 
// // Example using AJAX and the fetch()
// function getJSON(url) {
//  let response = fetch(url)
//     .then(result => result.json())
//     .then(data => console.log(data));
    
//     return response;
//   };
 
//   getJSON(url);

export function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          //console.log(response.json());
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  
  
   
  // let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
   
  // export function getJSON(url) {
  //  let response = fetch(url)
  //     .then(result => result.json())
  //     .then(data => console.log(data));
      
  //     return response;
  //   };
   
  //   getJSON(url);