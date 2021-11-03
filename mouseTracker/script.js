document.addEventListener("DOMContentLoaded", main);

function main()
{
    let c = document.getElementById("app")
    let ctx = c.getContext("2d");
    
    //setting canvas dimensions
    c.width = innerWidth
    c.height = innerHeight

    class aim {
        constructor (x, y, color, radius)
        {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = radius;
        }

        draw()
        {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillsytle = this.color;
            ctx.fill();
            ctx.stroke();
        }

        update (x, y)
        {
            this.x = x;
            this.y = y;
        }
    }
    
    let mouse = new aim(innerWidth/2, innerHeight/2, "red", 10);
    mouse.draw();


    function animate()
    {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, c.width, c.height)
        mouse.draw();
    }

    document.addEventListener("mousemove", (e) => {
        mouse.update(e.clientX, e.clientY);
        
    })

    animate()
}

