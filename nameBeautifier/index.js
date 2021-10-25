document.addEventListener("DOMContentLoaded", () => {
    
    function colorGenerator() {
        const r = Math.floor(Math.random()* 256)
        const g = Math.floor(Math.random()* 256)
        const b = Math.floor(Math.random()* 256)
    
        return {r, g, b}
    }

    function fontRandomizer(fonts, currentStyle) {
        let newStyle;
        do {
            newStyle = fonts[Math.floor(Math.random()* fonts.length)]
        } while (newStyle == currentStyle);
        
        return newStyle
    }

    const fonts = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif"
    ]

    const button = document.getElementById("button")
    const placeHolder = document.getElementById("placeholder")
    const backGround = document.getElementsByTagName("body")[0]

    button.addEventListener("click", () => {
        const currentStyle = placeHolder.style.fontFamily
        const style = fontRandomizer(fonts, currentStyle)
        const color = colorGenerator()

        console.log(color, )

        placeHolder.style.fontFamily = style
        placeHolder.style.color = `rgb(${color.r},${color.g},${color.b})`
        backGround.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`
        button.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`
    })

})


