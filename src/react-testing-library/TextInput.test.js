import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import TextInput from "./TextInput.js";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<TextInput />);
});

it("captures changes", done => {
  function handleChange(evt) {
    expect(evt.target.value).toEqual("whamo");
    done();
  }
  const { getByPlaceholderText } = render(
    <TextInput onChange={handleChange} placeholder="Change Me" />
  );
  const node = getByPlaceholderText("Change Me");
  fireEvent.change(node, { target: { value: "whamo" } });
});
