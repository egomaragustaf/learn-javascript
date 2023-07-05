let todos = [];
let currentTodoId = 1;

const todoFormElement = document.getElementById("todo-form");
const todoTextElement = document.getElementById("todo-text");
const todosElement = document.getElementById("todos");
const clearCompletedTodosElement = document.getElementById(
  "clear-completed-todos"
);
const checkAllTodosElement = document.getElementById("check-all-todos");
const uncheckedTodosElement = document.getElementById("unchecked-todos");

todoFormElement.addEventListener("submit", submitTodo);
clearCompletedTodosElement.addEventListener("submit", clearCompletedTodos);
checkAllTodosElement.addEventListener("submit", checkAllTodos);

function renderTodos() {
  todosElement.innerHTML = "";

  todos.forEach((todo) => {
    const todoElement = document.createElement("li");
    todoElement.classList =
      "flex flex-row w-full justify-between items-center border-b-2";

    todoElement.innerHTML = `
      <form onsubmit="completeTodoById(event)">
        <input type="hidden" name="todo-id" value="${todo.id}" />
        <input 
          type="checkbox" 
          name="todo-checked" ${todo.isCompleted ? "checked" : ""}
          onchange="toggleCompletedTodo(this, ${todo.id})" 
        />
      </form>
      <span 
        class="${todo.isCompleted ? "completed" : ""},
        ${todo.isCompleted ? "line-through" : ""}">
        ${todo.text}
      </span>
      <form onsubmit="deleteTodoById(event)">
        <input type="hidden" name="todo-id" value="${todo.id}" />
        <button type="submit" class="bg-rose-500 hover:bg-rose-600 py-1 px-4 text-white rounded" >X</button>
      </form>
      `;
    todosElement.appendChild(todoElement);
  });
  console.log(todos);

  const uncheckedTodos = todos.filter((todo) => !todo.isCompleted);
  uncheckedTodosElement.textContent = "Todo(s) left: " + uncheckedTodos.length;
}

function submitTodo(event) {
  event.preventDefault();

  const todoText = todoTextElement.value;
  if (String(todoText) === "") return null;

  const todoId = currentTodoId++;

  const newTodo = {
    id: todoId,
    text: todoText,
    isCompleted: false,
  };

  todos = [...todos, newTodo];

  todoTextElement.value = "";

  renderTodos();
}

function toggleCompletedTodo(checkbox, todoId) {
  const isChecked = checkbox.checked;

  todos = todos.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, isCompleted: isChecked };
    }
    return todo;
  });

  renderTodos();
}

function deleteTodoById(event) {
  event.preventDefault();

  const formElement = event.target;
  const formData = new FormData(formElement);
  const todoId = Number(formData.get("todo-id"));

  todos = todos.filter((todo) => todo.id !== todoId);

  renderTodos();
}

function clearCompletedTodos(event) {
  event.preventDefault();
  todos = todos.filter((todo) => !todo.isCompleted);
  renderTodos();
}

function checkAllTodos(event) {
  event.preventDefault();

  const allCheckBoxValue = todos.every((todo) => todo.isCompleted);

  todos = todos.map((todo) => ({
    ...todo,
    isCompleted: !allCheckBoxValue,
  }));

  renderTodos();
}

renderTodos();
