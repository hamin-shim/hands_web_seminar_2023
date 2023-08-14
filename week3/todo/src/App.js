import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos").split(",");
    console.log(localTodos);
    setToDos(localTodos);
  }, []);
  useEffect(() => {
    console.log("todo changed");
    if (toDos.length !== 0) localStorage.setItem("todos", toDos);
  }, [toDos]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return alert("Empty todo!");
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const deleteTodo = (id) => {
    let oldToDos = toDos;
    oldToDos = oldToDos.filter((todo, idx) => idx !== id);
    setToDos(oldToDos);
  };
  const onTrashClick = (event) => {
    const element = event.target.parentNode;
    const ok = window.confirm(`Delete <${element.innerText.slice(0, -3)}>?`);
    if (ok) {
      deleteTodo(element.id);
    }
  };
  const onEditTodo = (event) => {
    const element = event.target.parentNode;
    const editTodo = window.prompt("Edit content:", "New todo");
    const newTodos = toDos.map((todo, idx) => {
      if (idx === Number(element.id)) todo = editTodo;
      return todo;
    });
    setToDos(newTodos);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index} id={index}>
            {item}
            <span className="edit" onClick={onEditTodo}>
              ✏️
            </span>
            <span className="trash" onClick={onTrashClick}>
              🗑️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
