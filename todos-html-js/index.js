const todoFormElement = document.getElementById("todo-form");
const todoInputElement = document.getElementById("todo-input");
const todoListElement = document.getElementById("todo-list");
const clearCompletedTask = document.getElementById("delete-completed-task");

todoFormElement.onsubmit = function (event) {
  event.preventDefault();

  const todoInputValue = todoInputElement.value;
  const listValue = document.createElement("li");
  const listText = document.createTextNode(todoInputValue);
  const checkBoxValue = document.createElement("input");

  checkBoxValue.type = "checkbox";
  listValue.appendChild(checkBoxValue);
  listValue.appendChild(listText);
  todoListElement.appendChild(listValue);

  const deleteButton = document.createElement("button");

  deleteButton.classList.add("delete");
  deleteButton.innerText = "Delete";
  listValue.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    todoListElement.removeChild(listValue);
  });

  clearCompletedTask.addEventListener("click", () => {
    checkBoxValue.checked
      ? todoListElement.removeChild(listValue)
      : todoListElement;
  });
};
