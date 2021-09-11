import React from "react";
import Header from "./Header";
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

it("renders the header, with searchBox", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe("POKEMONS");
  expect(container.querySelector("input").placeholder).toBe(
    "Search by name or ability..."
  );
});
