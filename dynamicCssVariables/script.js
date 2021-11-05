document.addEventListener("DOMContentLoaded", main)

const USER = "User1"
const PASSWORD = "1234"


function main ()
{
    let userId = document.querySelector("#userId")
    let password = document.querySelector("#password")

    let confirm = document.querySelector("#confirm")
    
    confirm.addEventListener("click", () => checkBoxes())
    confirm.addEventListener("click", () => validate(userId, password))
}


function validate(userId, password)
{
    if (userId.value == USER && password.value == PASSWORD)  
    {
        console.log("logado")
    }
}

function checkBoxes(userId, password)
{
    let boxes = document.querySelectorAll("input")

    boxes.forEach(box => {
        let {value} = box

        if (value == "")
        {
            colorBox(box.id,"bColor", "yellow")
        }
        else 
        { 
            colorBox(box.id,"bColor", "white")
        }

        
        if(value.match(" "))
        {
            document.querySelector("#warning").innerText = "Spaces are INVALID"
        }
        else
        {
            document.querySelector("#warning").innerText = ""
        }
    })
}

function colorBox(id, property, value) 
{
    const root = document.documentElement
    let unit = ""

    root.style.setProperty(`--${id}-${property}`, `${value}${unit}`)
}