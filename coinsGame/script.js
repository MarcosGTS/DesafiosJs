document.addEventListener("DOMContentLoaded", setup);

const coinsGame = {
    inGame: false,
    maxNum: 10,
    coins: {
        "1": 5,
        "0.50": 3,
        "0.25": 2,
        "0.10": 1,
        "0.05": 4
    }
    
}

function setup() {
    randomizeCoins();
    render()
    document.querySelector(".user-area button").addEventListener("click", () => {
        const answer = Number(document.querySelector(".user-area input").value);
        
        if (verifyAnswer(answer)) {
            document.querySelector("#result").innerText = "Correct!";
            randomizeCoins() 
            render()
        } else {
            document.querySelector("#result").innerText = "Incorrect";
        }
    })
}

function verifyAnswer(ans) {
    let {coins} = coinsGame;
    let sum = Object.keys(coins).reduce((acc, key) => {
        return acc + Number(key) * coins[key];
    }, 0);

    return ans == sum;
}

function randomizeCoins() {
    let {coins} = coinsGame;
    let max = coinsGame.maxNum;

    Object.keys(coins).forEach(key => {
        coins[key] = pickRandom(max);
    })
}

function pickRandom(max) {
    return Math.floor(Math.random() * (max + 1))
}

function render() {
    const displays = document.querySelectorAll(".quantity");
    const {coins} = coinsGame;
    displays.forEach(el => {
        let coinType = el.getAttribute("data-value");
        el.innerText = coins[coinType];
    })
}