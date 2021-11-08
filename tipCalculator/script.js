document.addEventListener("DOMContentLoaded", main)

function main() {
    const inputs = document.querySelectorAll("input")
    
    inputs.forEach(input => {
        input.addEventListener("change", calculateTip)
    })
}

function calculateTip() {
    const billValue = Number(document.querySelector("#bill-value").value)
    const tipValue = Number(document.querySelector("#tip-value").value)
    const display = document.querySelector("#result")

    let result = billValue * tipValue / 100

    display.innerText = result
}