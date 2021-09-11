import React from "react";
import Main from "./Main";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render pokemon data", () => {
  act(() => {
    render(<Main />, container);
  });

  expect(container.childElementCount).toBe(2);
});
