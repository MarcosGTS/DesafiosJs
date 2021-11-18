import {currency, symbols} from "./currency.js"

const KEY = "e04ddc0f69246ba19d6887723beff693"
const currentDate = new Date().toISOString().split(/[A-Za-z]/)[0];

const State = {
    to: {crr:"AED" , index: 0},
    from: {crr:"AED" , index: 0},
    amount: 0
}

function setUpDropdown() {
    const dropDown = document.querySelectorAll("#app select");
    for (let key of Object.keys(symbols)) {
        let text = `${key} - ${symbols[key]}`;
        dropDown[0].innerHTML += `<option value="${key}">${text}</option>`;
        dropDown[1].innerHTML += `<option value="${key}">${text}</option>`;
    }

    dropDown.forEach(el => el.addEventListener("change", () => {
        let index = el.selectedIndex;
        let currency = el.options[index].value;

        State[el.name].index = index;
        State[el.name].crr = currency; 

        renderState()
    }))
}
setUpDropdown()

function setUpAmout () {
    const amount = document.querySelector("#amount");
    amount.addEventListener("change", () => {
        let value = Number(amount.value)
        if (value < 0)
            State.amount = 0;
        else    
            State.amount = value;

        renderState()
    })
}
setUpAmout()

function setUpConvert () {
    const convert = document.querySelector("#convert");
    convert.addEventListener("click", () => {
        const result = document.querySelector("#result");
        let {amount} = State;
        let to = State.to.crr;
        let from = State.from.crr;
        result.innerText = convertion(amount, to, from);
    })
}
setUpConvert()

function setUpSwap() {
    const swap = document.querySelector("#swap");
    swap.addEventListener("click", () => {
        let tmp = State.to;
        State.to = State.from;
        State.from = tmp;
        renderState()
    })  
}
setUpSwap()

function renderState() {
    const dropDown = document.querySelectorAll("#app select");
    const amount = document.querySelector("#amount");

    amount.value = State.amount;
    dropDown[0].selectedIndex = State.to.index
    dropDown[1].selectedIndex = State.from.index
}

function convertion(amount, to, from) {
    let {rates} = currency
    if (!rates[to] || !rates[from])
        return 0;
    
    return amount/rates[to] * rates[from];
}

//atualizar informacoes currency
// if (currentDate != currency.date){  
//     getLatestCurrency()
//     .then(data => console.log(data));
// }

/*Objetivo 
    [X]Converter a moedas atraves dos ultimos dados conseguidos atraves da API
    []Manter um vesao de "Backup" se o numero maximo de requisicoes for alcancado
    []cria um interface bonita 
*/

async function getLatestCurrency() 
{
    let func = "symbols"
    let response = await fetch(`http://data.fixer.io/api/${func}?access_key=${KEY}`);
    let obj = await response.json()
    return obj
}

