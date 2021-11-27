document.addEventListener("DOMContentLoaded", main);

let plays = ["rock", "paper", "scissors"];
let relations = {
    "rockscissors": true,
    "scissorspaper": true,
    "paperrock": true
}
function main() {
    let buttons = document.querySelectorAll("#app button");

    buttons.forEach(btn => btn.addEventListener("click", () => {
        let display = document.querySelector("#victory");
        let bot = document.querySelector("#bot");
        let userChoice = btn.name;
        let botChoice = randomChoice(plays);
        
        //Redering
        bot.innerText = `Bot-Choice: ${botChoice}`;
        display.innerText = checkVictory(userChoice, botChoice); 
    }))
}

function checkVictory(play1, play2) {
    if (play1 == play2)
        return "Draw";

    if (relations[play1 + play2])
        return `Player Wins : ${play1}`;
    
    return `Bot Wins: ${play2}`;
}

function randomChoice(list) {
    let random = Math.floor(Math.random() * list.length);
    return list[random];
}