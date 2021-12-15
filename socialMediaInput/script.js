const MAX_LENGTH = 140;

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector(".tweet-form textarea");
    textarea.addEventListener("keyup", () => {
        const tweet = textarea.value;
        const remained = document.querySelector(".remained");
        const counter = document.querySelector(".counter");

        remained.innerText = `${MAX_LENGTH - tweet.length}`;

        counter.style.color = tweet.length > MAX_LENGTH ? "red" : "black";   
    })
    
    const confirm = document.querySelector(".tweet-form button");
    confirm.addEventListener("click", () => {
        const tweet = textarea.value.trim();
        const tweet_list = document.querySelector(".tweet-list");

        if (tweet.length > MAX_LENGTH || tweet == "") return;

        tweet_list.innerHTML += `<p>${tweet}</p>`;
        textarea.value = "";
    })
})