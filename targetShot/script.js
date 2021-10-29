document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".target")
    
    target.addEventListener("click", createTarget)
})

function createTarget(){
    let [targetW, targetH] = [50,50]
    let x = Math.floor(Math.random() * (window.innerWidth - targetW)) 
    let y = Math.floor(Math.random() * (window.innerHeight - targetH))
    
    this.style.cssText = `top:${y}px; left:${x}px;`

    renderPoints()
}

function renderPoints(){
    let points = document.querySelector("#points")
    let current = Number(points.innerText)

    points.innerText = `${current + 1}`
}