import rates from "./currency.js"

const KEY = "e04ddc0f69246ba19d6887723beff693"
const currentDate = new Date().toISOString().split(/[A-Za-z]/)[0];

//atualizar informacoes currency
if (currentDate != rates.date){  
    getLatestCurrency()
    .then(data => rates = data);
}

/*Objetivo 
    Converter a moedas atraves dos ultimos dados conseguidos atraves da API
    Manter um vesao de "Backup" se o numero maximo de requisicoes for alcancado
    cria um interface bonita 
*/

async function getLatestCurrency() 
{
    let func = "latest"
    let response = await fetch(`http://data.fixer.io/api/${func}?access_key=${KEY}`);
    let obj = await response.json()
    return obj
}

