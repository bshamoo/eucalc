import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Import Bootstrap Layout
import Container from "react-bootstrap/Container";
//Import Components
import Header from "./components/Header";
import NumberPad from "./components/NumberPad";
import FunctionPad from "./components/FunctionPad";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid className="mx-2">
        <NumberPad />
        <hr className="my-3 mx-1"></hr>
        <FunctionPad />
      </Container>
    </div>
  );
}

export default App;
