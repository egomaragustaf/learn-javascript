let todos = [
  { id: 1, text: "a", isCompleted: false },
  { id: 2, text: "b", isCompleted: true },
];

const todoFormElement = document.getElementById("todo-form");
const todoTextElement = document.getElementById("todo-text");
const todosElement = document.getElementById("todos");
const clearCompletedTodosElement = document.getElementById(
  "clear-completed-todos"
);

todoFormElement.addEventListener("submit", submitTodo);
clearCompletedTodosElement.addEventListener("submit", clearCompletedTodos);

function renderTodos() {
  todosElement.innerHTML = "";

  todos.forEach((todo) => {
    const todoElement = document.createElement("li");
    todoElement.innerHTML = `
      <form onsubmit="completeTodoById(event)">
        <input type="hidden" name="todo-id" value="${todo.id}" />
        <input type="checkbox" name="todo-checked" ${
          todo.isCompleted && "checked"
        } />
      </form>
      <span>${todo.text}</span>
      <form onsubmit="deleteTodoById(event)">
        <input type="hidden" name="todo-id" value="${todo.id}" />
        <button type="submit">Delete</button>
      </form>
      `;
    todosElement.appendChild(todoElement);
  });
}

function submitTodo(event) {
  event.preventDefault();

  const todoText = todoTextElement.value;
  if (String(todoText) === "") return null;

  const todoId = todos[todos.length - 1].id + 1; // get last todo id + 1

  const newTodo = {
    id: todoId,
    text: todoText,
    isCompleted: false,
  };

  todos = [...todos, newTodo];

  todoTextElement.value = "";

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
  todos = todos.filter((todo) => todo.isCompleted === false);
  renderTodos();
}

renderTodos();
