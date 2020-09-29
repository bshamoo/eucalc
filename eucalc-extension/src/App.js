import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Import Components
import Header from "./components/Header";
import NumberPad from "./components/NumberPad";
import FunctionPad from "./components/FunctionPad";

function App() {
  return (
    <div className="App">
      <Header />
      <NumberPad />
      <FunctionPad />
    </div>
  );
}

export default App;
