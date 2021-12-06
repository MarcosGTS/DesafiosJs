document.addEventListener("DOMContentLoaded", () => {
    displayImg()
    document.querySelector("main button").addEventListener("click", displayImg)
})

async function getRandomFood() {
    const data = await fetch("https://foodish-api.herokuapp.com/api/")
    const obj = await data.json()
    return obj.image
}

function displayImg() {
    getRandomFood()
    .then(link => {
        console.log(link)
        document.querySelector(".img").style= `
        background: url(${link});
        height: 300px;
        width: 300px; 
        background-size:cover;
        background-position: center;`
    })
}