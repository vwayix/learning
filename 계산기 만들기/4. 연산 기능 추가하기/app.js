const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".num");
const operaters = document.querySelectorAll(".operater");

let currentInput = '';  // 현재 입력된 숫자를 저장할 변수
let operator = '';  // 선택된 연산자를 저장할 변수
let lastInputIsOperator = false;

numbers.forEach(button => {
    button.addEventListener("click", (event) => {
        const clickedNumber = event.target.innerHTML;

        if(display.innerHTML === "0" || lastInputIsOperator){
            display.innerHTML = clickedNumber;
        } else {
            display.innerHTML += clickedNumber;
        }
        currentInput += clickedNumber;
        lastInputIsOperator = false;
    })
});


operaters.forEach(operater => {
    operater.addEventListener("click", (event) => {
        const clickedOperater = event.target.innerHTML;

        if(display.innerHTML !== "0" && display.innerHTML.trim() !== ""){
            if(lastInputIsOperator){
                display.innerHTML = display.innerHTML.slice(0, -2) + ` ${clickedOperater} `;
            } else {
                display.innerHTML += ` ${clickedOperater} `;
            }
        }
        
        operator = clickedOperater;
        currentInput = '';
        lastInputIsOperator = true;
    })
});