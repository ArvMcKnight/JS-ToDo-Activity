let todoList = document.querySelector("#todos");
let todoList1 = document.querySelector("#todos1");
let todoInput = document.querySelector("#todo");
let todoTimeInput = document.querySelector("#todoTime");
let addTodoBtn = document.querySelector("#addTodo");



document.addEventListener("DOMContentLoaded", function () {

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function updateTodoList() {
        todoList.innerHTML = "";
        todos.forEach(todo => {
            let todoItem = document.createElement("li");
            todoItem.textContent = todo.title;
            todoList.appendChild(todoItem);
        });
    }
    

    function updateTodoList1() {
        todoList1.innerHTML = "";
        todos.forEach(todo => {
            let todoItem1 = document.createElement("li");
            todoItem1.textContent = "  -  " + new Date(todo.time).toLocaleString();
            todoList1.appendChild(todoItem1)
        })
    }

    console.log(todos)

    updateTodoList();
    updateTodoList1();

    addTodoBtn.addEventListener("click", function () {
        let todoTitle = todoInput.value;
        let todoTime = todoTimeInput.value;

        if (todoTitle !== "" && todoTime !== "") {
            let newTodo = {
                title: todoTitle,
                time: todoTime
            };
            todos.push(newTodo);

            localStorage.setItem("todos", JSON.stringify(todos));

            updateTodoList();
            updateTodoList1();

            todoInput.value = "";
            todoTimeInput.value = "";
        }
    });
});