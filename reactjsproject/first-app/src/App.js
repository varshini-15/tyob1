// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>

      <ComponentA />

      {/* on importing use it */}
    </div>
  );
}

export default App;

// Parent compo - App
// Child compo - ComponentA
