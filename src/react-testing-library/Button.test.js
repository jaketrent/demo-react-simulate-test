import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";

import Button from "./Button.js";

let div;

beforeEach(() => {
  div = document.createElement("div");
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  ReactDOM.render(<Button />, div);
});

it("captures clicks", done => {
  const ref = React.createRef();
  function handleClick() {
    done();
  }
  ReactDOM.render(<Button onClick={handleClick} ref={ref} />, div);
  ReactTestUtils.Simulate.click(ref.current);
});
