import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Import Components
import Header from "./components/Header";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";

function App() {
  //JavaScript
  return (
    <div className="App">
      <Header />
      <Display />
      <NumberPad />
    </div>
  );
}

export default App;
