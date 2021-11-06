let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let BULLETS = []

class Player {
    constructor(x, y, radius, color)
    {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw()
    {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    shoot(mouseX, mouseY)
    {
        BULLETS.push(new Bullet(this.x, this.y, 5, "green", 10, mouseX, mouseY))
    }
}

class Bullet {
    constructor(x, y, radius, color, velocity, directionX, directionY)
    {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.angle = Math.atan2(directionY - this.y,directionX - this.x)
    }

    draw()
    {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update()
    { 
        this.x += this.velocity * Math.cos(this.angle)
        this.y += this.velocity * Math.sin(this.angle)
    }
}

let cCenterX = canvas.width / 2
let cCenterY = canvas.height / 2

let player = new Player(cCenterX, cCenterY, 10, "red")

window.addEventListener("click", (e) => {
    player.shoot(e.clientX, e.clientY)
})

function animate()
{
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    BULLETS.forEach(b => {
        b.update()
        b.draw()
    })
    player.draw()
}

animate()