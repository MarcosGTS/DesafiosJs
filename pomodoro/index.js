document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("timer")
    const buttons = [...document.getElementsByTagName("button")]
    const cancel = document.getElementById("cancel")

    const timerInf = {
        id: "",
        on: true,
        deadlines:{
            "short": 5,
            "long": 15,
            "work": 25
        }
    }

    function toggleButtons() {
        buttons.map((btt) => {
            btt.toggleAttribute("hidden")
        })
    }

    function playRing() {
        const ring = new Audio("./sounds/ring.mp3")
        ring.play()
    }

    function formatTime(time) {
        return (time < 10) ? `0${time}`: `${time}`
    }

    function updatePomodoro(time){
        const mins = Math.trunc(time / 60)
        const sec = time % 60

        timer.innerHTML = `<p>${formatTime(mins)}:${formatTime(sec)}</p>`
    }

    function stopTimer(time = 0){
        if(time <= 0 ) {
            timerInf.on = !timerInf.on
            clearInterval(timerInf.id)
            updatePomodoro(0) 
            toggleButtons() 
            playRing()
        }
    }

    function setTimer(min) {
        let deadline = min * 60
        timerInf.id = setInterval(() => {
            
            deadline--
            updatePomodoro(deadline)
            stopTimer(deadline)

        }, 1000)
    }  

    buttons.map((btt) => {

        btt.addEventListener("click",() => {
            const deadline = timerInf.deadlines[btt.name]
            const {on} = timerInf

            if (on){
                timerInf.on = !on
                setTimer(deadline)
            }

            toggleButtons()
        })
  
    })
    
    cancel.addEventListener("click", () => {
        stopTimer()
        toggleButtons()
    })
})

