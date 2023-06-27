const todoFormElement = document.getElementById("todo-form");
const todoInputElement = document.getElementById("todo-input");
const todoListElement = document.getElementById("todo-list");

todoFormElement.onsubmit = function (event) {
  event.preventDefault();

  const todoInputValue = todoInputElement.value;
  const listValue = document.createElement("li");
  const listText = document.createTextNode(todoInputValue);

  listValue.appendChild(listText);
  todoListElement.appendChild(listValue);
};
