let years = document.querySelector(".years");
let months = document.querySelector(".months");
let days = document.querySelector(".days");
let btn = document.querySelector("button");
let date = document.querySelector(".date");

// console.log(years.innerHTML)
// console.log(months.innerHTML)
// console.log(days.innerHTML)
let currentDate = new Date();
console.log(currentDate);

btn.addEventListener('click', function(e) {
    e.preventDefault();  

    let newDate = date.value;
    let year = newDate.slice(0,4);
    let inputMonth = +newDate.slice(5,7); 
    let day = +newDate.slice(8,10);

    let yearToday = currentDate.getFullYear();
    let monthsToday = currentDate.getMonth() + 1;
    let dayToday = currentDate.getDate();
    
    let inputYear = yearToday - year;
    
    if (monthsToday >= inputMonth) {
        months.innerHTML = monthsToday - inputMonth;         
    } else {
        inputYear -= 1;
        months.innerHTML = 12 + monthsToday - inputMonth;
    }

    if (dayToday >= day) {
        days.innerHTML = dayToday - day;         
    } else {
        months.innerHTML -= 1;

        let prevMonth = monthsToday - 1;
        let prevYear = yearToday;
        if (prevMonth === 0) {
            prevMonth = 12;
            prevYear -= 1;
        }

        let daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();
        days.innerHTML = daysInPrevMonth + dayToday - day;
    }

    years.innerHTML = inputYear;
});