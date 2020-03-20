import React from "react";
import "@testing-library/react";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait
} from "@testing-library/dom";

function getExampleDOM() {
  // This is just a raw example of setting up some DOM
  // that we can interact with. Swap this with your UI
  // framework of choice 😉
  const div = document.createElement("div");
  div.innerHTML = `
      <label for="username">Username</label>
      <input id="username" />
      <button>Print Username</button>
    `;
  const button = div.querySelector("button");
  const input = div.querySelector("input");
  button.addEventListener("click", () => {
    // let's pretend this is making a server request, so it's async
    // (you'd want to mock this imaginary request in your unit tests)...
    setTimeout(() => {
      const printedUsernameContainer = document.createElement("div");
      printedUsernameContainer.innerHTML = `
          <div data-testid="printed-username">${input.value}</div>
        `;
      div.appendChild(printedUsernameContainer);
    }, Math.floor(Math.random() * 200));
  });
  return div;
}

describe("sample tests for the app", () => {
  test("sample test1", () => {
    expect("APP TESTING").toBe("APP TESTING");
  });

  test("sample test2", () => {
    expect(1 + 1).toBe(2);
  });

  test("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test("examples of some things", async () => {
    const famousWomanInHistory = "Ada Lovelace";
    const container = getExampleDOM();

    // Get form elements by their label text.
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const input = getByLabelText(container, "Username");
    input.value = famousWomanInHistory;

    // Get elements by their text, just like a real user does.
    getByText(container, "Print Username").click();

    await wait(() =>
      expect(queryByTestId(container, "printed-username")).toBeTruthy()
    );

    // jest snapshots work great with regular DOM nodes!
    expect(container).toMatchSnapshot();
  });
});
