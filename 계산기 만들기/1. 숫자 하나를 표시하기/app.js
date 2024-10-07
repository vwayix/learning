const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".num");

numbers.forEach(number => {
    number.addEventListener("click", (event)=>{
        display.innerHTML = event.target.innerHTML;
    })
    
});