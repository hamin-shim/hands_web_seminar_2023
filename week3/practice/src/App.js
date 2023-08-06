import { useState } from "react";

function App() {
  const [cnt, setCnt] = useState(0);
  const helloString = "HELLOOO";
  const Hello = () => (
    <div className="hello" onClick={() => console.log("click hello")}>
      Hello!
      {helloString}
    </div>
  );
  const Counter = () => {
    return (
      <div className="counterContainer" style={{ display: "flex" }}>
        <button className="plus" onClick={() => setCnt(cnt + 1)}>
          +
        </button>
        <div className="count" style={{ margin: "0 10px" }}>
          {cnt}
        </div>
        <button className="minus" onClick={() => setCnt(cnt - 1)}>
          -
        </button>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Hello />
        <Counter />
      </div>
    </div>
  );
}

export default App;
