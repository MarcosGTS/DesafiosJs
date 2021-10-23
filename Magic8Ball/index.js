document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("majorBall")
    const message = document.getElementById("message")
    const advice = [
        "If you’re good at something, never do it for free.",
        "Do, or do not. There is no try.",
        "It’s what you do right now that makes a difference.",
        "Until you start believing in yourself, you ain't gonna have a life!",
        "Life does not stop and start at your convenience.",
        "You know what the trouble about real life is? There's no danger music."
    ]

    ball.addEventListener("click", () => {
        const randomPos = Math.floor(Math.random() * advice.length)
        const msg = advice[randomPos]
        message.innerText = `${msg}`
    })

})