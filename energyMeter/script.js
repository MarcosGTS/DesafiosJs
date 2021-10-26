document.addEventListener("DOMContentLoaded", () => {
    const rating = document.querySelector("#rating")
    const bar = document.querySelector("#energyBar")

    rating.addEventListener("change", () => {
        let {value} = rating
        console.log(value)
        bar.style.width = `${value*10}%`
    })
})