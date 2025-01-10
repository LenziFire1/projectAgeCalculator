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



btn.addEventListener('click', function() {
    let newDate = date.value;
    let year = newDate.slice(0,4);
    let months = +newDate.slice(5,7);
    console.log(months)
    console.log(typeof(months))

    let day = newDate.slice(8,10);

    let yearToday = currentDate.getFullYear();
    let monthsToday = currentDate.getMonth() + 1;
    console.log(monthsToday)
    let dayToday = currentDate.getDate();
    
    let inputYear = yearToday  - year;
    
    if (monthsToday >= months){
        months.innerHTML =  monthsToday - months  ;         
    } 
    else {
        inputYear -= 1;
        months.innerHTML =  12 + monthsToday - months;
    }

    years.innerHTML = inputYear  
})
