document.addEventListener("DOMContentLoaded", main);

function main() {
    const decimalInput = document.querySelector("#decimal-input");

    decimalInput.addEventListener("change", () => {
        const base = Number(document.querySelector("#base").value) || 2;

        const decimalValue = Number(decimalInput.value);
        displayResult(dec2Base(decimalValue, base));
    })
}

function displayResult(value) {
    let display = document.querySelector("#result");
    display.innerText = `${value}`;
}

function dec2Base(decimal, base = 2) {
    let result = ""

    if (decimal == 0) 
        return "0";

    while (decimal > 0) {
        let remainder = decimal % base;
        if (remainder > 9){
            remainder = String.fromCharCode(remainder % 10 + 65);
        }
        result = remainder + result;
        decimal = Math.floor(decimal / base);
    }

    return result;
}