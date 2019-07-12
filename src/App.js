import React from "react";

import "./App.css";
import ReactTestUtils from "./ReactTestUtils.js";
import ReactTestingLibrary from "./ReactTestingLibrary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactTestUtils />
        <ReactTestingLibrary />
      </header>
    </div>
  );
}

export default App;
