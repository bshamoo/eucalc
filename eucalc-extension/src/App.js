import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Import Components
import Header from "./components/Header";
import Display from "./components/Display";
import InputPad from "./components/InputPad";

function App() {
  //JavaScript
  return (
    <div className="App">
      <Header />
      <Display />
      <InputPad />
    </div>
  );
}

export default App;
