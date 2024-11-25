const quiz = [
    "타이타닉의 구명보트는 몇 명이 탈수 있을까?",
    "초등학생이 가장 좋아하는 동네는?",
    "진짜 문제투성이인 것은",
    "폭력배가 많은 나라는?"
]
const answer = ["9명", "방학동", "시험지", "칠레"]
const h3 = document.querySelector("h3");
const input = document.querySelector("input");
const form = document.querySelector("form");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");
const body = document.querySelector("body");
const div = document.createElement("div");

let save = "";
let i = 1;
h3.innerHTML= i + ". " + quiz[i-1];


nextBtn.addEventListener("click", ()=>{
    div.innerHTML="";
    input.value="";
    if(i<quiz.length){ //1~4
        i++; 
        h3.innerHTML= i + ". " + quiz[i-1];
    }
})
backBtn.addEventListener("click", ()=>{
    div.innerHTML="";
    input.value="";
    if(i != 1){
        if(i<quiz.length){ //1~4
            i--;
            h3.innerHTML= i + ". " + quiz[i-1];
        }
    }

} )

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    save = input.value;
    input.value="";
    if(save == ""){
        div.innerHTML = "정답을 입력해주세요";
        body.appendChild(div);
    } else {
        div.innerHTML="";
            if(save == answer[i-1]){
                div.innerHTML = "정답입니다!!";
            }else{
                div.innerHTML = "오답입니다!!";
            }
        body.appendChild(div);
    }
})


