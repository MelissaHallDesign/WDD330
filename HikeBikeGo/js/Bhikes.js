const BrequestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/brycehikes.json';
fetch(BrequestURL) 
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    //console.table(jsonObject); //temporary testing
    const brycehikes = jsonObject['brycehikes'];
    //const idahoTowns = ["Fish Haven", "Soda Springs", "Preston"];
    for (let i = 0; i < brycehikes.length; i++) {
        //create variable elements
        let hike = document.createElement('section');
        let span = document.createElement('span');
        let h3 = document.createElement('h3');
        let details = document.createElement('p');
        //let button = document.createElement('button');
        let div = document.createElement('div');
        let location = document.createElement('p');
        let difficulty = document.createElement('p');
        let length = document.createElement('p');
        let elevation = document.createElement('p');
        let description = document.createElement('p');
        //let image = document.createElement('img');
        //modify the contents
        //hike.className = 'towncard';
        hike.setAttribute('id', brycehikes[i].hikeName);
        hike.addEventListener('click', (e) => {
            console.log(e.target.id);
        });
        //location.className = 'motto';
        h3.textContent = brycehikes[i].hikeName;
        div.setAttribute('id', 'showDetails');
        details.textContent = brycehikes[i].details;
        details.setAttribute('id', 'detailClick');
        //details.className = 'Details';
        // button.setAttribute('onclick', 'buttonFunction()');
        // button.setAttribute('id', 'detailButton');
        // button.textContent = 'Details';
        location.textContent = brycehikes[i].location;
        difficulty.textContent =  'Difficulty: ' + brycehikes[i].difficulty;
        length.textContent =  'Length: ' + brycehikes[i].length;
        elevation.textContent =  'Elevation: ' + brycehikes[i].elevation;
        description.textContent = brycehikes[i].description;
        //image.setAttribute('src', 'images/' + archeshikes[i].photo);
        //image.setAttribute('alt', archeshikes[i].name);
        //Merge them together
        hike.appendChild(span);
        span.appendChild(h3);
        span.appendChild(details);
        span.appendChild(div);
        //span.appendChild(button);
        div.appendChild(location);
        div.appendChild(difficulty);
        div.appendChild(length);
        div.appendChild(elevation);
        div.appendChild(description);
        
        
        //hike.appendChild(image);
        //Attaching to the page
        document.querySelector('div.BhikeDisplay').appendChild(hike);
    
    }
});