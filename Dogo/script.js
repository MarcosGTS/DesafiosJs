import cats from "./cats.js"

document.addEventListener("DOMContentLoaded", () => {
    
    const usersList = document.querySelector("#usersList")
    console.log(cats)
    cats.forEach(cat => {
        const node = `<div class="user">
                        <img src="${cat.credit}" alt="problema">
                        <p>${cat.name}</p>
                      </div>`
        usersList.innerHTML += node
    })
})

// fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     })