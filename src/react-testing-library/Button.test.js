import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Button from "./Button.js";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Button />);
});

it("captures clicks", done => {
  function handleClick() {
    done();
  }
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  const node = getByText("Click Me");
  fireEvent.click(node);
});
