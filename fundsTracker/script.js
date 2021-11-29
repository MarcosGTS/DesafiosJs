document.addEventListener("DOMContentLoaded", main);

const jose = {
    funds: 0, 
    history: []
}

function main() {
    document.querySelector("#confirm-operation").addEventListener("click", () => {
        const fundInput = document.querySelector("#fund-input");
        const {name, value} = fundInput;

        try {
            countMoviment(jose, name)(Number(value));
        } catch (error) {
            console.error(error);
        }
        fundInput.value = "";
       
        displayState()
    });

    document.querySelector("#switcher").addEventListener("click", () => {
        const fundInput = document.querySelector("#fund-input");
        let value = (fundInput.name == "deposit") ? "withdraw" : "deposit";

        fundInput.name = value;
        fundInput.placeholder = value.replace(/^\w/, (c) => c.toUpperCase());
    });
}

function countMoviment(client, type) {
    const modes = {
        withdraw: (value) => {
            value = (value < 0) ? 0 : value;
            client.funds -= value;
            return client;
        }, 
        deposit: (value) => {
            value = (value < 0) ? 0 : value;
            client.funds += value;
            return client;
        }
    }

    return modes[type];
}

function displayState() {
    document.querySelector("#funds").innerText = jose.funds;
}