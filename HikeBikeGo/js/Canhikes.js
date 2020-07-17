const CanrequestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/canyonhikes.json';
fetch(CanrequestURL) 
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    //console.table(jsonObject); //temporary testing
    const canyonhikes = jsonObject['canyonhikes'];
    for (let i = 0; i < canyonhikes.length; i++) {
        //create variable elements
        let hike = document.createElement('section');
        let span = document.createElement('span');
        let h3 = document.createElement('h3');
        let details = document.createElement('p');
        let button = document.createElement('button');
        let div = document.createElement('div');
        let location = document.createElement('p');
        let difficulty = document.createElement('p');
        let length = document.createElement('p');
        let elevation = document.createElement('p');
        let description = document.createElement('p');
        //let image = document.createElement('img');
        //modify the contents
       
        hike.setAttribute('id', canyonhikes[i].hikeName);
        hike.addEventListener('click', (e) => {
            console.log(e.target.id);
        });
        //location.className = 'motto';
        h3.textContent = canyonhikes[i].hikeName;
        div.setAttribute('id', 'showDetails');
        details.textContent = canyonhikes[i].details;
        details.setAttribute('id', 'detailClick');
        details.className = 'Details';
        button.setAttribute('onclick', 'myFunction()');
        button.setAttribute('id', 'detailButton');
        button.textContent = 'Details';
        location.textContent = canyonhikes[i].location;
        difficulty.textContent =  'Difficulty: ' + canyonhikes[i].difficulty;
        length.textContent =  'Length: ' + canyonhikes[i].length;
        elevation.textContent =  'Elevation: ' + canyonhikes[i].elevation;
        description.textContent = canyonhikes[i].description;
        //image.setAttribute('src', 'images/' + archeshikes[i].photo);
        //image.setAttribute('alt', archeshikes[i].name);
        //Merge them together
        hike.appendChild(span);
        span.appendChild(h3);
        span.appendChild(details);
        span.appendChild(div);
        span.appendChild(button);
        div.appendChild(location);
        div.appendChild(difficulty);
        div.appendChild(length);
        div.appendChild(elevation);
        div.appendChild(description);
        
        
        //hike.appendChild(image);
        //Attaching to the page
        document.querySelector('div.CanhikeDisplay').appendChild(hike);
    
    }
});


function myFunction() {
    var x = document.querySelector("CanhikeDisplay");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }