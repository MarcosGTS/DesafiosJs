document.addEventListener("DOMContentLoaded", main)
import data from "./data.js"

function main() {
    setList()
}

function setList () {
    const list = document.querySelector("#dataList ul")
    data.forEach(item => {
        let newItem = createListItem(item)
        list.appendChild(newItem)
    })
}

function createListItem(item) {
    let newItem = document.createElement("li")
    newItem.innerText = item["name"]
    newItem.addEventListener("click", () => showMore(item))

    return newItem
}

function showMore(item){
    let details = document.querySelector("#details")
    let html = ""

    console.log(item)
    html += `<h2>${item.name}</h2>`
    html += `<p>${item.telephone}</p>`
    html += `<p>${item.country}</p>`
    html += `<p>${item.description}</p>`

    details.innerHTML = html
}

