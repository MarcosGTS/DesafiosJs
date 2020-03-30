const binario = document.querySelector("input#binario");
const botao = document.querySelector("button#converter");
botao.addEventListener("click", conversor);

function conversor() {
    let resposta = document.querySelector("div#res");
    let numero = binario.value;
    let decimal = 0;
    let aux = binario.value;
    let flag = true;
    
    for(let i = 0; i < numero.length; i++){
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
    resposta.innerHTML= `<strong>${decimal}<strong>`;
   }
}


let num = 400
