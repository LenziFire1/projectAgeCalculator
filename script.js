let years = document.querySelector(".years");
let months = document.querySelector(".months");
let days = document.querySelector(".days");
let btn = document.querySelector("button");
let date = document.querySelector(".date");

let currentDate = new Date();

btn.addEventListener('click', function(e) {
    e.preventDefault();  

    let newDate = date.value;
    let year = +newDate.slice(0,4);
    let inputMonth = +newDate.slice(5,7); 
    let day = +newDate.slice(8,10);

    let yearToday = currentDate.getFullYear();
    let monthsToday = currentDate.getMonth() + 1;
    let dayToday = currentDate.getDate();
    
    let inputYear = yearToday - year;
    let inputMonthCalc, inputDayCalc;

    if (monthsToday >= inputMonth) {
        inputMonthCalc = monthsToday - inputMonth;         
    } else {
        inputYear -= 1;
        inputMonthCalc = 12 + monthsToday - inputMonth;
    }

    if (dayToday >= day) {
        inputDayCalc = dayToday - day;         
    } else {
        inputMonthCalc -= 1;
        if (inputMonthCalc < 0) {
            inputMonthCalc = 11;
            inputYear -= 1;
        }

        let prevMonth = monthsToday - 1;
        let prevYear = yearToday;
        if (prevMonth === 0) {
            prevMonth = 12;
            prevYear -= 1;
        }

        let daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();
        inputDayCalc = daysInPrevMonth + dayToday - day;
    }

    years.innerHTML = inputYear;
    months.innerHTML = inputMonthCalc;
    days.innerHTML = inputDayCalc;
});
