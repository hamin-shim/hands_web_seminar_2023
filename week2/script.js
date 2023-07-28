function makeNewTodo(text) {
  const todoContaiiner = document.getElementsByClassName("todoContainer")[0];
  const newTodoBox = document.createElement("div");
  newTodoBox.className = "todo";

  const newTodoCheck = document.createElement("input");
  newTodoCheck.type = "checkbox";
  newTodoCheck.className = "checkbox";

  const newTodoText = document.createElement("div");
  newTodoText.className = "todoText";
  newTodoText.innerHTML = text;

  const trashIcon = document.createElement("div");
  trashIcon.className = "trash";
  trashIcon.innerHTML = "🗑️";

  newTodoBox.appendChild(newTodoCheck);
  newTodoBox.appendChild(newTodoText);
  newTodoBox.appendChild(trashIcon);

  todoContaiiner.prepend(newTodoBox);
}
makeNewTodo("1번째 할 일");
makeNewTodo("2번째 할 일");

const checkboxes = document.querySelectorAll("input.checkbox");
console.log(checkboxes);
function toggleTodo(e) {
  const toggledTodo = e.target.parentElement;
  console.log(toggledTodo);

  const toggleTodoText = toggledTodo.children[1];
  toggleTodoText.classList.toggle("done");
}
checkboxes.forEach((element) => element.addEventListener("change", toggleTodo));
const todoForm = document.getElementsByTagName("form")[0];
console.log(todoForm);
todoForm.addEventListener("submit", (e) => e.preventDefault());
const submitBtn = document.getElementById("submitBtn");
const inputTodo = document.getElementById("newTodoText");
console.log(inputTodo.innerHTML);
submitBtn.addEventListener("click", () => {
  const newTodoText = inputTodo.value;
  makeNewTodo(newTodoText);
  inputTodo.value = "";
});
console.log(submitBtn);
