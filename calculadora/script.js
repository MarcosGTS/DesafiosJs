var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID... SE PASSAREM UM ID
        return document.querySelector(element); // ... returns single element RETORNE UM UNICO ELEMENTO
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

var numbers = el(".number"); //  conjunto dos numeros 
var display = el("#display"); // area de display

var result  = "";


for(let i =0; i < numbers.length;i++){
    numbers[i].addEventListener("click", function(){
        result= numbers[i].innerText;
        display.innerHTML = `<h1>${result}</h1>`;
    });
}




