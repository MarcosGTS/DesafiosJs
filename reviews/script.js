document.addEventListener("DOMContentLoaded", main);
import data from "./reviews.js";

class reviewState {
    constructor (array) {
        this.elements = array;
        this.crrElement = 0;
    }

    next(direction = "right") {
    
        console.log(this.crrElement)
        if (direction == "right") 
        {
            this.crrElement++;
            if (this.crrElement > this.elements.length - 1)
                this.crrElement = 0;
        }
        else if (direction == "left")
        {
            this.crrElement--;
            if (this.crrElement < 0)
                this.crrElement = this.elements.length - 1;
        }
        else if (direction == "random")
        {   
            let randomIndex;
            do{
                randomIndex = Math.floor(Math.random() * this.elements.length);
            } 
            while (randomIndex == this.crrElement);
            this.crrElement = randomIndex;
        }

        return this.elements[this.crrElement];
    }
}

const DELAY = 5000;
var interval;
var reviews = new reviewState(data);

function main() {
    createInterval()
    setUpButtons(reviews);
}

function createInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        displayReview(reviews.next());
    }, DELAY);
}

function setUpButtons(reviews) {
    let buttons = document.querySelectorAll("#review button")
    
    buttons.forEach(btn => btn.addEventListener("click", () => {
        displayReview(reviews.next(btn.name));
        createInterval()
    }))
}

function displayReview({img, description}) {
    let reviewImg = document.querySelector("#review img");
    let reviewDescription = document.querySelector("#review p");

    reviewImg.src = img;
    reviewDescription.innerText = description;
}


