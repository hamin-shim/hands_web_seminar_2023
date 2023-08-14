import { useState } from "react";
import "./App.scss";
function App() {
  const [mode, setMode] = useState(null);
  const colors = ["red", "green", "blue"];
  const [logs, setLogs] = useState([]);
  const Counter = () => {
    const [cnt, setCnt] = useState(0);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>counter</h1>
        <div className="counterContainer" style={{ display: "flex" }}>
          <button className="mminus" onClick={() => setCnt(cnt - 10)}>
            &lt;&lt;
          </button>
          <button className="minWus" onClick={() => setCnt(cnt - 1)}>
            -
          </button>
          <div
            className="count"
            style={{ fontSize: "20px", fontWeight: "bolder" }}
          >
            {cnt}
          </div>
          <button className="plus" onClick={() => setCnt(cnt + 1)}>
            +
          </button>
          <button className="pplus" onClick={() => setCnt(cnt + 10)}>
            &gt;&gt;
          </button>
        </div>
      </div>
    );
  };
  const Calculator = () => {
    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [Ans, setAns] = useState("");
    return (
      <div>
        <form>
          num 1:
          <input
            name="A"
            placeholder="Input 1"
            onChange={(e) => setA(Number(e.target.value))}
          />
          num 2:
          <input
            name="B"
            placeholder="Input 2"
            onBlur={(e) => setB(Number(e.target.value))}
          />
        </form>
        <div>
          <button
            onClick={() => {
              setLogs([`${A}+${B}=${A + B}`, ...logs]);
              setAns(A + B);
              console.log(logs);
              console.log(Ans);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setLogs([`${A}-${B}=${A - B}`, ...logs]);
              setAns(A - B);
              console.log(Ans);
              console.log(logs);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setAns(A * B);
              setLogs([`${A}*${B}=${A * B}`, ...logs]);
              console.log(logs);
              console.log(Ans);
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              setLogs([`${A}/${B}=${A / B}`, ...logs]);
              setAns(A / B);
              console.log(Ans);
              console.log(logs);
            }}
          >
            /
          </button>
        </div>
        <div className="ans">Ans: {Ans}</div>
        <div className="logs">
          <p>logs</p>
          {/* {logs.map((element, i) => {
            return <div key={i}>{element}</div>;
          })} */}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">React is All You Need!</header>
      <div>
        <select onChange={(e) => setMode(e.target.value)}>
          <option value={null}>====</option>
          <option value={0}>counter</option>
          <option value={1}>calculator</option>
          <option value={2}>calender</option>
        </select>
      </div>
      <div
        className="mainContent"
        style={{
          margin: "20px auto",
          padding: "30px 0",
          width: "800px",
          border: `1px dashed ${colors[mode]}`,
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {mode == 0 ? <Counter /> : null}
        {mode == 1 ? <Calculator /> : null}
        {mode == 2 ? <Calculator /> : null}
      </div>
    </div>
  );
}

export default App;
