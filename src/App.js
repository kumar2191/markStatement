import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const getInitialState = () => {
    const value = "maths";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const [mark, setMark] = useState(0);
  const [science, setScience] = useState(0);
  const [lan, setLan] = useState(0);
  const [total, setTotal] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const val = () => {
    var mark = parseInt(document.getElementById("mark").value);
    if (value === "maths") {
      setMark(mark);
    } else if (value === "science") {
      setScience(mark);
    } else if (value === "language") {
      setLan(mark);
    }
    // setTotal(science + lan + setMark);
  };

  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input type="text" id="name" />
        </label>
        <br />
        <br />
        <label>
          class:
          <input type="text" />
        </label>
        <br />
        <br />
        <label>sub:</label>
        <select value={value} onChange={handleChange}>
          <option value="maths">maths</option>
          <option value="science">science</option>
          <option value="language">language</option>
        </select>
        <label>
          mark:
          <input type="number" id="mark" />
        </label>
        <br />
        <br />
        <button type="button" onClick={val}>
          submit
        </button>
        <h1>total:{science + lan + mark}</h1>
        <h1>Welcome !!!</h1>
        <h1>Your maths mark:{mark}</h1>
        <h1>Your science mark:{science}</h1>
        <h1>Your lanuage mark:{lan}</h1>
        <p>{`You selected ${value}`}</p>
      </form>
    </div>
  );
}
