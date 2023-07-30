const gifRenderer = document.querySelector("#gif-renderer");
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");

const KEY = "zdpDXzFdWVBxqR3wJ4JEdCD7F0lT8Kqv"
const API = "https://api.giphy.com/v1/gifs"

async function getRandomGif(search) {
    const url = getApiUrl(KEY, search);
    const response = await fetch(url, { mode: "cors" });
    const randomGif = await response.json();

    return randomGif;
}

function appendAttribute(url, attr, value) {
    if (url.includes("?")) {
        return `${url}&${attr}=${value}`;
    }

    return `${url}?${attr}=${value}`;
}

function getApiUrl(apiKey, search) {
    let apiUrl = "";

    if (search) {
        apiUrl = appendAttribute(`${API}/translate`,"api_key", KEY);
        apiUrl = appendAttribute(apiUrl, "s", search);
    } else {
        apiUrl = appendAttribute(`${API}/random`,"api_key", KEY);
    }

    return apiUrl;
}

async function renderGif() {
    const search = searchBar.value
    const response = await getRandomGif(search)
    
    gifRenderer.src = response.data.images.original.url
}

searchBtn.addEventListener("click", renderGif);
