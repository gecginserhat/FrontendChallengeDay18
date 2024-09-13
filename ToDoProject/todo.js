//select all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // all event listeners
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
    
}

function clearAllTodos(e) {
    if(confirm("Are you sure you want to?")){
        //todoList.innerHTML = "";//slow version

        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
    localStorage.removeItem("todos");
    //clear all todos on UI

    }
}


function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            // cant find

            listItem.setAttribute("style", "display : none !important");
        }
        else {
            listItem.setAttribute("style", "display : block");
        }
});

}
// delete todos
function deleteTodo(e) {
    if(e.target.classList.contains("fa-remove")) {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo successfully deleted...");
    }
}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo, index){
        if(todo === deletetodo) {
            todos.splice(index, 1); //delete array index
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}



//Adding todos in localstorage back to the UI section
function loadAllTodosToUI (){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    if(newTodo === "") {
        showAlert("danger", "Please add todo...");

    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);

        showAlert("success", "Todo is successfully added");
    }

    e.preventDefault();
}


function getTodosFromStorage(){ //take all todos in storage
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type,message){
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    //setTimeOut
    setTimeout(function(){
        alert.remove();
    }, 1000);
}


function addTodoToUI(newTodo){//Will add the string value to the UI as a list item
    //creating list ıtem
    const listItem = document.createElement("li");

    //creating link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";
    
    
    //adding text node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Add list item to todo list
    todoList.appendChild(listItem);
    todoInput.value = "";
}

