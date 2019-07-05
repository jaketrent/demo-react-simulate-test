import React from "react";

import "./App.css";
import Button from "./Button.js";
import TextInput from "./TextInput.js";

function App() {
  const [clicked, setClicked] = React.useState(false);
  function handleClick(evt) {
    setClicked(true);
  }

  const [changed, setChanged] = React.useState("");
  function handleChange(evt) {
    setChanged(evt.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleClick}>Click Me</Button>
        <pre>Clicked: {clicked ? "true" : "false"}</pre>
        <TextInput onChange={handleChange} />
        <pre>Change: {changed}</pre>
      </header>
    </div>
  );
}

export default App;
