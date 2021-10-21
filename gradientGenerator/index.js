document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas")
    const slider = document.getElementById("slider");
    const pickers = [...document.getElementsByClassName("colorPick")];
    
    //getting value from slider (soft or hard transition)
    slider.addEventListener("change", () => {
        console.log(slider.value)
        updateColor()
    })

    //add to all color picker a event
    pickers.map((pick) => {
        pick.addEventListener("change", () => {
            updateColor()
        })
    })

    function updateColor () {
        const c1 = pickers[0].value
        const c2 = pickers[1].value

        const [sValue1, sValue2] = [slider.value, 100 - slider.value]
        console.log(sValue1, sValue2)
        canvas.style.cssText = `background: linear-gradient(90deg, ${c1}, ${sValue1}%, ${c2});`
    }
})