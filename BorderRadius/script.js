const conteudo = document.querySelectorAll("input[type=text]");
const output = document.getElementById("output");
const cubo = document.getElementById("cubo");

conteudo[0].addEventListener('input', borderRadiusTL);
conteudo[1].addEventListener('input', borderRadiusTR);
conteudo[2].addEventListener('input', borderRadiusBL);
conteudo[3].addEventListener('input', borderRadiusBR);


function borderRadiusTL(){
    cubo.style.borderTopLeftRadius = `${conteudo[0].value}px`; 
}

function borderRadiusTR(){
    cubo.style.borderTopRightRadius = `${conteudo[1].value}px`;
}

function borderRadiusBL(){
    cubo.style.borderBottomLeftRadius = `${conteudo[2].value}px`;
}

function borderRadiusBR(){
    cubo.style.borderBottomRightRadius = `${conteudo[3].value}px`;
}