document.addEventListener("DOMContentLoaded", main);

async function getFilm () {
    let response = await fetch("./film.json");
    let data = await response.json();

    return data;
}

function main() {
    getFilm().then(data => {
        const listBody = document.querySelector(".film-list");

        data.forEach(el => {
            let newFilm = createFilmTemplate(el);
            listBody.appendChild(newFilm);
        });

    })
}

function createFilmTemplate(obj) {
    
    let film = document.createElement("DIV");
    film.innerHTML = `
    <img src=${obj.Poster}> 
    <div>
        <h3>${obj.Title}</h3>
        <p>${obj.Plot}</p> 
    </div>
    <p class="nota">${obj.imdbRating}</p>
    
    `
    film.className = "film";
    return film;
}