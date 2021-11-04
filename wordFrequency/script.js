document.addEventListener("DOMContentLoaded", main);

function main() {
    let countBtn = document.querySelector("#countButton")

    countBtn.addEventListener("click", () => {
        let textValue = document.querySelector("#textInput").value
        let wordsList = createListWords(textValue)
        displayWordList(wordsList)
    })
}

function createListWords (text) {
    let words = {}

    //Split elements when find a char != alphanum
    text.split(/\W+/).filter(s => s)
        //Adding and count existent words
        .forEach(word => {
            if (!words[word])
                words[word] = 1
            else
                words[word] += 1
        })
    
    return words
}

function displayWordList(wordsList)
{
    let display = document.querySelector("#list")
    
    display.innerHTML = ""
    
    for (let key in wordsList){
        display.innerHTML += "<tr>"
        display.innerHTML += `<td>${key}</td><td>${wordsList[key]}</td>`
        display.innerHTML += "</tr>"
    }

}