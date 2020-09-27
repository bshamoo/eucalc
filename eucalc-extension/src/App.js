import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Import Components
import Header from "./components/Header";
import NumberDisplay from "./components/NumberDisplay";
import NumberPad from "./components/NumberPad";
import FunctionPad from "./components/FunctionPad";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />
      <NumberDisplay />
      <NumberPad />
      <FunctionPad setToggle={setToggle} toggle={toggle} />
      <h2 className={toggle ? "active" : ""}>React</h2>
      <button onClick={toggler}>Click</button>
    </div>
  );
}

export default App;
