let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let BULLETS = []
let ENEMIES = []

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
        this.draw()
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity, destineX, destineY)
    {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.directionX = destineX - x
        this.directionY = destineY - y
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
        let angle = Math.atan2(this.directionY, this.directionX)
        this.x += this.velocity * Math.cos(angle)
        this.y += this.velocity * Math.sin(angle)
        this.draw()
    }
}


let cCenterX = canvas.width / 2
let cCenterY = canvas.height / 2

let player = new Player(cCenterX, cCenterY, 10, "red")

window.addEventListener("click", (e) => {
    player.shoot(e.clientX, e.clientY)
})

function spawnEnemy() {
    setInterval(() => {
        let radius = 30
        let x
        let y
        if (Math.random() < 0.5)
        {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        }
        else 
        {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        
        let color = "green"
        let velocity = 3

        ENEMIES.push(new Enemy(x, y, radius, color, velocity, player.x, player.y))
    }, 200);
}

spawnEnemy()

function animate()
{
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    BULLETS.forEach(b => b.update())
    ENEMIES.forEach(e => e.update())
    player.draw()
}

animate()