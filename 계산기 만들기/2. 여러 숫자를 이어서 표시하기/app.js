const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".num");

function button(event){
    const clickedNumber = event.target.innerHTML;

    if(display.innerHTML === "0"){
        display.innerHTML = clickedNumber;
    }else{
        display.innerHTML += clickedNumber;
    }
}

numbers.forEach(number => {
    number.addEventListener("click", button);
})