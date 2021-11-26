document.addEventListener("DOMContentLoaded", main);

function main() {
    document.querySelector("#add").addEventListener("click", addTask);
}

function addTask(){
    const taskSection = document.querySelector("#app section");
    const taskName = document.querySelector("#task-input").value;
    
    if (taskName.trim() != "")
    {
        let newTask = document.createElement("DIV");
        let taskText = document.createElement("P");
        taskText.innerText = taskName;

        let finishBtn = createBtn("&#9989", () => taskText.classList.toggle("lineThrough"));
        let removeBtn = createBtn("&#128465", () => newTask.remove());
        
        newTask.appendChild(taskText);
        newTask.appendChild(finishBtn);
        newTask.appendChild(removeBtn);
        
        newTask.classList = "task";
        taskSection.appendChild(newTask);
    }
    
}

function createBtn (text, func = () => {})
{
    let btn = document.createElement("BUTTON");
    btn.innerHTML = text;
    btn.addEventListener("click", func);

    return btn;
}