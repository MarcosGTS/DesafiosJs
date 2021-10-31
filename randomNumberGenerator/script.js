document.addEventListener("DOMContentLoaded", main)

function main() {
    setButton()
    setInputs()
}

function setButton() {
    let button = document.querySelector("button")

    button.addEventListener("click", generateRandomNumber)
}

function generateRandomNumber() {
    let min = Number(document.querySelector("#min").value)
    let max = Number(document.querySelector("#max").value)

    let random = Math.floor(min + (Math.random() * (max - min + 1)))

    displayResult(random)
}

function displayResult(random) {
    let display = document.querySelector("#randomNumber")
    
    display.innerText = `${random}`
}

function setInputs() {
    let min = document.querySelector("#min")
    let max = document.querySelector("#max")

    min.addEventListener("change", () => {
        if (Number(min.value) > Number(max.value))
            min.value = max.value
    })

    max.addEventListener("change", () => {
        if (Number(max.value) < Number(min.value))
            max.value = min.value
    })
}