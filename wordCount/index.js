document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("textArea");
    const wordCount = document.getElementById("wordCount");

    let numberOfWords = 0;

    textArea.addEventListener("keyup", () => {
        let inputText = textArea.value;
        
        if (inputText !== ""){
            inputText = inputText.trim();
            numberOfWords = inputText.split(/\s+/).length;
        } else {
            numberOfWords = 0;
        }
        
        wordCount.innerText = `Words Number: ${numberOfWords}`;
    })
    
})