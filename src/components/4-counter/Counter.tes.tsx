import { render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", async () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeTruthy();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeTruthy();

    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toBeTruthy();

    const setButton = screen.getByRole("button", { name: "Set" });
    expect(setButton).toBeTruthy();
  });

  test("renders a count of 0", async () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement.textContent).toBe("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement.textContent).toBe("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement.textContent).toBe("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    userEvent.clear(amountInput);
    userEvent.type(amountInput, "10");
    expect(amountInput.getAttribute("value")).toBe("10");

    const setButton = screen.getByRole("button", { name: "Set" });
    userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement.textContent).toBe("10");
  });

  test("elements are focused in the right order", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    // Check initial focus
    expect(document.activeElement).toEqual(incrementButton);

    // Tab to the next element
    userEvent.tab();
    expect(document.activeElement).toEqual(amountInput);

    // Tab to the next element
    userEvent.tab();
    expect(document.activeElement).toEqual(setButton);
  });
});
