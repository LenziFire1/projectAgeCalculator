let years = document.querySelector(".years")
let months = document.querySelector(".months")
let days = document.querySelector(".days")
let btn = document.querySelector("button")
let date = document.querySelector(".date")

// console.log(years.innerHTML)
// console.log(months.innerHTML)
// console.log(days.innerHTML)
let currentDate = new Date();
console.log(currentDate)
btn.addEventListener('click', function() {
    let day = date.value.slice(0,2)
    console.log(day) 
})
