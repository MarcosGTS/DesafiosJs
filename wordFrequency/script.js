document.addEventListener("DOMContentLoaded", main);

function main() 
{
    let countBtn = document.querySelector("#countButton")

    countBtn.addEventListener("click", () => {
        let textValue = document.querySelector("#textInput").value

        let wordsList = createListWords(textValue)
        displayWordList(wordsList)

    })
}

function createListWords (text) 
{
    let words = {}

    //Split elements when find a char != alphanum
    //Adding and count existent words

    text.split(/\W+/).filter(s => s)
        .forEach(word => {
            word = word.toLowerCase()

            words[word] = (words[word] += 1) || 1
        })

    return objToList(words)
}

function displayWordList(wordsList)
{
    let display = document.querySelector("#list")
    
    display.innerHTML = `
    <thead>
    <tr>
        <td>Word</td>
        <td>Frequency</td>
    </tr>
    </thead>`
    
    wordsList.forEach( obj => {
        display.innerHTML += "<tr>"
        display.innerHTML += `<td>${obj.word}</td><td>${obj.frequency}</td>`
        display.innerHTML += "</tr>"
    })

    if (wordsList.length == 0)
        display.innerHTML = "No words"
        
}

function objToList(obj)
{
    let list = []

    for (let key in obj){
        list.push({word: key, frequency: obj[key]})
    }
    
    return list.sort((a, b) => b.frequency - a.frequency)
}