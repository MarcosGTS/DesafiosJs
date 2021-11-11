document.addEventListener("DOMContentLoaded", main)
let colors = ["red", "green", "blue", "yellow"]

let MODE = "hex"

function main() {
    
    const switcher = document.querySelector("#switcher");
    const modes = document.querySelectorAll(".mode")

    switcher.addEventListener("click", () => {
        const background = document.querySelector("body");
        const display = document.querySelector("#crrColor")
        const color = pickColor(MODE);

        display.innerText = color
        background.style.backgroundColor = color
    })

    modes.forEach(btn => btn.addEventListener("click", () => {
        MODE = btn.name
    }))
}

function pickColor(mode){
    const pickColor = {
        simple() {
            let color = colors.pop()
            colors.unshift(color)
            return color
        },
        hex(){
            let randomHex = Math.floor(Math.random()* 0xffffff)
            return `#${randomHex.toString(16)}`
        }
    }

    return pickColor[mode]()
}