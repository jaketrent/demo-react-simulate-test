import React from "react";

import "./App.css";
import Button from "./react-testing-library/Button.js";
import TextInput from "./react-testing-library/TextInput.js";

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
    <div>
      <h2>react-testing-library</h2>
      <Button onClick={handleClick}>Click Me</Button>
      <pre>Clicked: {clicked ? "true" : "false"}</pre>
      <TextInput onChange={handleChange} />
      <pre>Change: {changed}</pre>
    </div>
  );
}

export default App;
