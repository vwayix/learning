const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".num");
const operaters = document.querySelectorAll(".operater");
const equal = document.querySelector(".equal");

let currentInput = '';  // 현재 입력된 숫자를 저장할 변수
let operator = '';  // 선택된 연산자를 저장할 변수
let lastInputIsOperator = false;
let firstOperand = '';

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

            if (!firstOperand) {
                firstOperand = currentInput;  // 첫 번째 입력된 숫자 저장
            }

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

// = 버튼 클릭 시 처리 (계산 수행)
equal.addEventListener("click", () => {
    if (firstOperand && currentInput && operator) {
        const secondOperand = currentInput;  // 두 번째 입력된 숫자 저장
        let result;

        // 연산자에 따라 계산 수행
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case 'x':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            case '%':
                result = parseFloat(firstOperand) % parseFloat(secondOperand);
                break;
            default:
                result = 'Error';  // 예외 처리
        }

        display.innerText = result;  // 계산 결과 출력
        firstOperand = '';  // 피연산자 초기화
        currentInput = '';  // 현재 입력된 숫자 초기화
        operator = '';  // 연산자 초기화
        lastInputIsOperator = false;  // 연산자 플래그 해제
    }
});