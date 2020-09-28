//import React, { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Import Components
import Header from "./components/Header";
//import NumberDisplay from "./components/NumberDisplay";
import NumberPad from "./components/NumberPad";
import FunctionPad from "./components/FunctionPad";
import FunctionDisplay from "./components/FunctionDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <NumberPad />
      <FunctionPad />
      <FunctionDisplay />
    </div>
  );
}

export default App;
