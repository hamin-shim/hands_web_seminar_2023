import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
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
    oldToDos = oldToDos.filter((todo, idx) => idx != id);
    setToDos(oldToDos);
  };
  const onTrashClick = (event) => {
    const element = event.target.parentNode;
    const ok = window.confirm(`Delete <${element.innerText.slice(0, -3)}>?`);
    if (ok) {
      deleteTodo(element.id);
    }
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
