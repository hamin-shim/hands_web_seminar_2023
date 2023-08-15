import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    console.log("get local storage");
    const TODOS = localStorage.getItem("todos");
    if (TODOS) setToDos(TODOS.split(","));
  }, []);
  useEffect(() => {
    if (toDos.length !== 0) {
      localStorage.setItem("todos", toDos);
    }
  }, [toDos]);
  const onInputChange = (event) => setText(event.target.value);
  const onFormSubmit = (event) => {
    event.preventDefault();
    // toDos.push(text);
    setToDos([text, ...toDos]);
    setText("");
  };
  const onTrashClick = (event) => {
    const element = event.target.parentNode;
    // window.confirm("정말 지울거니?");
    const newTodos = toDos.filter((todo, idx) => idx !== Number(element.id));
    setToDos(newTodos);
    if (newTodos.length == 0) localStorage.removeItem("todos");
  };
  const onEditTodo = (event) => {
    const id = Number(event.target.parentNode.id);
    const editText = window.prompt("Edit your Todo!");
    console.log(editText);
    console.log(toDos);

    const newTodos = toDos.map((todo, idx) => {
      if (idx === id) {
        todo = editText;
      }
      return todo;
    });
    setToDos(newTodos);
  };
  return (
    <div className="App">
      <div>My Todo!({toDos.length})</div>
      <form onSubmit={onFormSubmit}>
        <input onChange={onInputChange} type="text" value={text} />
        <input type="submit" value="add" />
      </form>
      <ul>
        {toDos.map((todo, idx) => (
          <li key={idx} id={idx} className="todo">
            {todo}
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
