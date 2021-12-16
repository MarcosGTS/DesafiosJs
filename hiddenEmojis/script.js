document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".emoji-container");

    cards.forEach(card => card.addEventListener("click", () => {
        const emoji = card.childNodes[1];
        emoji.classList.toggle("hidden")
    }))

})