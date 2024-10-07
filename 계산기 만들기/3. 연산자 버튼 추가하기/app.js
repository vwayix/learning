// 필요한 요소들 선택
const display = document.querySelector("#display"); // 디스플레이 영역 선택
const numbers = document.querySelectorAll(".num");  // 모든 숫자 버튼 선택
const operators = document.querySelectorAll(".operator");  // 모든 연산자 버튼 선택

let currentInput = '';  // 현재 입력된 숫자를 저장할 변수
let operator = '';  // 선택된 연산자를 저장할 변수
let lastInputIsOperator = false;  // 마지막 입력이 연산자인지 확인하는 플래그

// 숫자 버튼 클릭 시 처리
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        const clickedNumber = event.target.innerText;  // 클릭된 숫자

        // 디스플레이가 0이거나 마지막 입력이 연산자이면 새로운 숫자로 교체
        if (display.innerText === '0' || lastInputIsOperator) {
            display.innerText = clickedNumber;
        } else {
            display.innerText += clickedNumber;  // 기존 숫자 뒤에 새로운 숫자를 이어 붙임
        }
        currentInput += clickedNumber;  // 입력된 숫자를 currentInput에 저장
        lastInputIsOperator = false;  // 숫자가 입력되었으므로 연산자 플래그 해제
    });
});
//11~13 각각의 버튼마다 클릭을 하면 clickedNumber라는 변수에 클릭된 숫자를 저장
//16 if문을 보면 화면에 보이는 텍스트가 0이거나 lastInputIsOperator가 false
//참일때 display의 텍스트를 클릭된 숫자 변경해서 보여줌
//거짓일때 display의 텍스트를 클릭된 숫자로 이어서 보여줌





// 연산자 버튼 클릭 시 처리
operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        const clickedOperator = event.target.innerText;  // 클릭된 연산자

        // 숫자가 입력된 상태일 때만 연산자를 추가
        if (display.innerText !== '0' && display.innerText.trim() !== '') {
            // 마지막 입력이 연산자였으면, 연산자만 교체 (숫자는 그대로)
            if (lastInputIsOperator) {
                display.innerText = display.innerText.slice(0, -2) + ` ${clickedOperator} `;
            } else {
                display.innerText += ` ${clickedOperator} `;  // 숫자 뒤에 연산자 추가
            }

            operator = clickedOperator;  // 연산자를 저장
            currentInput = '';  // 다음 숫자를 입력하기 위해 currentInput 초기화
            lastInputIsOperator = true;  // 마지막 입력이 연산자임을 기록
        }
    });
});
// 36~38 각각의 버튼마다 클릭을 하면 clickedOperator라는 변수에 클릭된 연산자를 저장
// 41 if문에는 화면에 보이는 텍스트가 0이 아니면서 display.innerText.trim() !== ''는 양쪽 공백을 지워주고 공백이 아닌것
// 43 if문에는 lastInputIsOperator라는 변수가 false로 시작하고 나중에 true로 변경 
// 참일때 화면에 보이는 텍스트를 문자열 끝에서 2개 지우고 클릭한 연산자를 보여줌
// 거짓일때 숫자 뒤에 연산자를 추가함
