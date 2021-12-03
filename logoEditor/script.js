document.addEventListener("DOMContentLoaded", setup);

function setup() {
    const buttons = document.querySelectorAll(".buttons-section input");

    buttons.forEach(btn => {
        const logo = document.querySelector(".logo");

        btn.addEventListener("change", () => {
            if (btn.name == "box-shadow")
                logo.style.boxShadow = `${btn.value} 5px 5px 5px`;
            else
                logo.style[btn.name] = btn.value;
            
        })   
        
    })
}