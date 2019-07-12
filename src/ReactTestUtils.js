import React from "react";

import "./App.css";
import Button from "./react-test-utils/Button.js";
import TextInput from "./react-test-utils/TextInput.js";

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
      <Button onClick={handleClick}>Click Me</Button>
      <pre>Clicked: {clicked ? "true" : "false"}</pre>
      <TextInput onChange={handleChange} />
      <pre>Change: {changed}</pre>
    </div>
  );
}

export default App;
