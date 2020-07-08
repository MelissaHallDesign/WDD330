const requestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/hikes.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const hikes = jsonObject['hikes'];
        //console.table(jsonObject); //temporary testing
        for (let i = 0; i < hikes.length; i++) { 
            let hike = document.createElement('div');
            //let h3 = document.createElement('h3');
            let hikeName = document.createElement('p');
            let location = document.createElement('p');
            let difficulty = document.createElement('p');
            let length = document.createElement('p');
            let elevation = document.createElement('p');
            let description = document.createElement('p');
            hikeName.textContent = hikes[i].hikeName;
            location.textContent = hikes[i].location;
            difficulty.textContent = hikes[i].difficulty;
            length.textContent = hikes[i].length;
            elevation.textContent = hikes[i].elevation;
            description.textContent = hikes[i].description;
            //hike.appendChild(h3);
            hike.appendChild(hikeName);
            hike.appendChild(location);
            hike.appendChild(difficulty);
            hike.appendChild(length);
            hike.appendChild(elevation);
            hike.appendChild(description);
            document.querySelector('div.hikeDisplay').appendChild(hike);
        }
    });