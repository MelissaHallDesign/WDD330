import { Favorite } from './favorite.js';

let favorites = [];
let favorite1 = new Favorite('Hike 1');
let favorite2 = new Favorite('Hike 2');
let favorite3 = new Favorite('Hike 3');

favorites.push(favorite1);
favorites.push(favorite2);
favorites.push(favorite3);

function favoriteHike() {

    document.querySelector('#favorite').innerHTML = '';    
favorites.forEach(
    favorite => {
        if (favorite.completed) {
            document.querySelector('#favorite').innerHTML +=
            `<p id="${favorite.id}" class="completed">${favorite.name}</p>`;
        } else 
        document.querySelector('#favorite').innerHTML +=
        `<p id="${favorite.id}">${favorite.name}</p>`;
    }
);
}

document.querySelector('#favorite').addEventListener('click', 
    (e) => {
        let id = e.target.id;

        let favorite = favorites.find(f => f.id == id);

        if (favorite) {
            favorite.completed = 1;

            document.querySelector('#id').textContent = 
            favorite.id;
            document.querySelector('#name').textContent = 
            favorite.name;
            document.querySelector('#completed').textContent = 
            favorite.completed;
        }

        favoriteHike();
    }
);

favoriteHike();