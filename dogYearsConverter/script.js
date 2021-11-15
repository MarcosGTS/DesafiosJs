document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#converter")
    
    btn.addEventListener("click", () => {
        const dogYears = document.querySelector("#dog-years").value;
        displayYears(dogToHumanYears(dogYears))
    })
})

function dogToHumanYears(humanYears) {
    return Number(humanYears) * 10.5;
}

function displayYears(years) {
    const display = document.querySelector("#human-years");
    display.innerText = `${years}`
}
