import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";

import TextInput from "./TextInput.js";

let div;

beforeEach(() => {
  div = document.createElement("div");
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  ReactDOM.render(<TextInput />, div);
});

it("captures changes", done => {
  const ref = React.createRef();
  function handleChange(evt) {
    expect(evt.target.value).toEqual("whamo");
    done();
  }
  ReactDOM.render(<TextInput onChange={handleChange} ref={ref} />, div);
  ReactTestUtils.Simulate.change(ref.current, { target: { value: "whamo" } });
});
