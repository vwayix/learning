const 생성하기 = document.querySelector('#생성하기');
const 컨테이너 = document.querySelector('.컨테이너');
const 수정컨테이너 = document.querySelector('.수정컨테이너');
const 등록 = document.querySelector('#등록');
const 수정완료 = document.querySelector('#수정완료');

const 제목 = document.querySelector('#제목');
const 내용 = document.querySelector('#내용');
const 수정제목 = document.querySelector('#수정제목');
const 수정내용 = document.querySelector('#수정내용');
const ul = document.querySelector('ul');
let todos = [];

생성하기.addEventListener('click', ()=>{
    생성하기.style.display = 'none';
    컨테이너.style.display = 'block';
    제목.value = '';
    내용.value = '';
});

등록.addEventListener('click', ()=>{
    생성하기.style.display = 'block';
    컨테이너.style.display = 'none';

    const todo = {
        id: Date.now(),
        title: 제목.value,
        text: 내용.value,
    };

    todos.push(todo);
    addItem(todo);
    save();
})
const addItem = (todo)=>{
    if(todo.title !=='' && todo.text !==''){
        const li = document.createElement('li');
        const span = document.createElement('span');
        const 수정 = document.createElement('button');
        const 삭제 = document.createElement('button');

        span.innerHTML = todo.title;
        수정.innerHTML = '수정';
        수정.addEventListener('click', (event)=>{
            const target = event.target.parentElement;

            생성하기.style.display = 'none';
            ul.style.display = 'none';
            수정컨테이너.style.display = 'block';

            수정제목.value = target.todo.title;
            수정내용.value = target.todo.text;
        
            수정완료.addEventListener('click', ()=>{
                span.innerHTML = 수정내용.value;
                
            });
        });
        삭제.innerHTML = '삭제';
        삭제.addEventListener('click', (event)=>{
            const target = event.target.parentElement;
            todos = todos.filter((todo) => todo.id != target.id);
            save();
            target.remove();
        })

        li.appendChild(span);
        li.appendChild(수정);
        li.appendChild(삭제);
        ul.appendChild(li);

        li.id = todo.id;
    }
}
const save = () => {
    localStorage.setItem('todos', JSON.stringify(todos)); //해석필요
}
const init = () => {
    const userTodos = JSON.parse(localStorage.getItem('todos'));
    if (userTodos) {
        userTodos.forEach((todo) => {
            addItem(todo);
        });
        todos = userTodos;
    }
}
init();

