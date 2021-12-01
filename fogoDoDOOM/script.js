const h = 50
const w = 20
let fire = []

var fireColorsPaletteRed = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}];

document.addEventListener("DOMContentLoaded", () => {
    init()  
    fireSource()
    setInterval(update, 100)
})

function init (){
    fire = Array(w*h).fill(0)
}

function render() {
    let app = document.querySelector("#app")
    let html = ""
    let debugg = false
    html += "<table>"
    for(let i = 0; i < h; i++){
        html += "<tr>"
        for(let j = 0; j < w; j++){
            let pos = j + (i * w)
            if (debugg){
                html += `<td>${fire[pos]}</td>`
            }else{
                let {r,g,b} = fireColorsPaletteRed[fire[pos]]
                html += `<td style="background-color:rgb(${r}, ${g}, ${b})"></td>`
            }
        }
        html += "</tr>"
    }
    html += "</table>"

    app.innerHTML = html
}

function update() {
    for(let i = 0; i < w; i++){
        for(let j = 0; j < h; j++){
            let pos = i + (j * w)
            updateFirePixel(pos)
        }
    }

    render()
}

function updateFirePixel (pos) {
    if (!fire[pos + w])
        return 
    
    let decay = Math.floor(Math.random(0) * 3)
    let newValue = fire[pos + w] - decay
    fire[pos] = (newValue > 0) ? newValue : 0
}

function fireSource(){
    for(let i = 0; i < w; i++){
        let pos = i + ((h-1) * w)
        fire[pos] = 36
    }
}