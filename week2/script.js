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
// makeNewTodo("1번째 할 일");
// makeNewTodo("2번째 할 일");

const checkboxes = document.querySelectorAll("input.checkbox");
function toggleTodo(e) {
  const toggledTodo = e.target.parentElement;
  console.log(toggledTodo);

  const toggleTodoText = toggledTodo.children[1];
  toggleTodoText.classList.toggle("done");
}
checkboxes.forEach((element) => element.addEventListener("change", toggleTodo));

const todoForm = document.getElementsByTagName("form")[0];
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = inputTodo.value;
  makeNewTodo(newTodoText);
  inputTodo.value = "";
});
const inputTodo = document.getElementById("newTodoText");

const trashIcons = document.querySelectorAll(".trash");
function deleteTodo(e) {
  const toggledTodo = e.target.parentElement;
  const toggleTodoText = toggledTodo.children[1].innerHTML;
  console.log(toggleTodoText);
  const ok = confirm("[" + toggleTodoText + "] 할 일을 삭제하시겠습니까?");
  if (ok) {
    const todoContainer = document.querySelector(".todoContainer");
    todoContainer.removeChild(toggledTodo);
    console.log(todoContainer.children.length);
    if (todoContainer.children.length == 1) {
      console.log("hi");
      const emptyNotice = document.querySelector(".emptyNotice");
      emptyNotice.classList.toggle("hide");
    }
  }
}
trashIcons.forEach((element) => element.addEventListener("click", deleteTodo));
