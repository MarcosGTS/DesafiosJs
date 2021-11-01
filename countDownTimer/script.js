document.addEventListener("DOMContentLoaded", main)

const miliSecInDay = (60 * 60 * 24 * 1000)
const miliSecInHour = (60 * 60 * 1000)
const miliSecInMin = (60 * 1000)

function main() {
    setInterval(setTimer, 1000)
}

function setTimer() {
    const input = document.querySelector("input")
    let display = document.querySelector("#display")

    let currentDate = new Date().getTime()
    let selectedDate = new Date(input.value).getTime()
    
    let diff = dateConverter(selectedDate - currentDate)

    display.innerText = diff
}

function dateConverter(diff) {
    let days = Math.floor(diff / miliSecInDay )
    diff %= miliSecInDay
    let hours = Math.floor(diff / miliSecInHour )
    diff %= miliSecInHour
    let mins = Math.floor(diff / miliSecInMin )
    diff %= miliSecInMin
    let secs = Math.floor(diff / 1000 )

    return `${days}:${hours}:${mins}:${secs}`
}