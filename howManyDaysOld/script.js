document.addEventListener("DOMContentLoaded", main);

const miliSecsInDay = 60 * 60 * 24 * 1000;

function main()
{
    setCalendar();
}

function setCalendar()
{
    const dateInput = document.querySelector("input");
    
    dateInput.addEventListener("change", displayDays);
}

function displayDays()
{
    const display = document.querySelector("#display");
    let daysYearOld = calculateDays(this.value);
    display.innerText = daysYearOld;
}

function calculateDays(date)
{
    const currentDay = new Date().getTime();
    const birthDate = new Date(date).getTime();

    return Math.floor((currentDay - birthDate) / miliSecsInDay);
}