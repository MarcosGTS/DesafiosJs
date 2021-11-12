document.addEventListener("DOMContentLoaded", main);
let COUNT = 0;

function main() {
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll("#buttons button");

    buttons.forEach(btn => btn.addEventListener("click", () => {

        COUNT = changeCount(btn.name, COUNT);
        display.style.color = pickColor(COUNT);
        display.innerText = COUNT;
        
    }))
}

function changeCount(mode, count) {
    
    const modes = {
        decrease: -1,
        reset: -count,
        increase: 1  
    }

    return count + modes[mode];
}

function pickColor(count) {
    return count > 0 ? "green" : count < 0 ? "red" : "black";
}