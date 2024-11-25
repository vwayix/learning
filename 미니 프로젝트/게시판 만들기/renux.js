const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const init = () => { //해석필요
    const userTodos = JSON.parse(localStorage.getItem('todos'));
    if (userTodos) {
        userTodos.forEach((todo) => {
            addItem(todo);
        });
        todos = userTodos;
    }
}
init();

form.addEventListener('submit', function handler(event) {
    event.preventDefault();
    const todo = {
        id: Date.now(),
        text: input.value,
    };
    todos.push(todo);
    addItem(todo);
    save();
    input.value = "";
});
let todos = [];
const addItem = (todo) => { //생성
    if (todo.text !== "") {
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        span.innerText = todo.text;
        button.innerHTML = "삭제";

        button.addEventListener('click', function delItem(event) { //누른요소 삭제
            const target = event.target.parentElement;
            todos = todos.filter((todo) => todo.id != target.id); //해석필요
            save();
            target.remove();
        })

        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
        li.id = todo.id;
    }
}
const save = () => {
    localStorage.setItem('todos', JSON.stringify(todos)); //해석필요
}