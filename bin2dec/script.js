const binario = document.querySelector("input#binario");
const botao = document.querySelector("button#converter");
const resposta = document.querySelector("input#resultado")
botao.addEventListener("click", conversor);

function conversor() {
    let numero = Number(binario.value);
    let tamanho = binario.value.length;
    let aux = numero;
    let decimal = 0;
    let flag = true;
    
    for(let i = 0; i < tamanho; i++){
        if(aux%10 == 1 || aux%10 == 0){
            decimal += (aux%10)*2**i;
            aux = Math.floor(aux/10);
        } else {
            window.alert("so pode 0 ou 1");
            flag = false;
            break;
        }
    }

    if(flag){
        resposta.value = `${decimal}`;
    }
}

