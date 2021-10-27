document.addEventListener("DOMContentLoaded", () => {
    const cats = [
         {
            name: 'Snuggles',
            credit: "https://images.dog.ceo/breeds/terrier-scottish/n02097298_3589.jpg"
        },
         {
            name: 'Cruella',
            credit: "https://images.dog.ceo/breeds/terrier-american/n02093428_225.jpg"
        },
        {
            name: "Ruffus",
            credit:'https://images.dog.ceo/breeds/frise-bichon/3.jpg'
        }
    ]

    const usersList = document.querySelector("#usersList")

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