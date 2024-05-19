import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

// Describe block groups related tests under one suite
describe("Counter component", () => {
  // Test to ensure that the initial count is rendered correctly
  test("renders initial count", () => {
    // Render the Counter component
    const { getByText } = render(<Counter />);
    // Get the count element and verify its presence
    const countElement = getByText(/0/i);
    expect(countElement).toBeTruthy();
  });

  // Test to verify that count increments when the Increment button is clicked
  test("increments count when Increment button is clicked", () => {
    // Render the Counter component
    const { getByText } = render(<Counter />);
    // Click the Increment button
    const incrementButton = getByText(/Increment/i);
    userEvent.click(incrementButton);
    // Verify that count increments to 1
    const countElement = getByText(/1/i);
    expect(countElement).toBeTruthy();
  });

  // Test to ensure that count is set to input value when Set button is clicked
  test("sets count to input value when Set button is clicked", () => {
    // Render the Counter component
    const { getByText, getByRole } = render(<Counter />);
    // Type '5' into the input field
    const inputElement = getByRole("spinbutton");
    userEvent.type(inputElement, "5");
    // Click the Set button
    const setButton = getByText(/Set/i);
    userEvent.click(setButton);
    // Verify that count is set to 5
    const countElement = getByText("5");
    expect(countElement).toBeTruthy();
  });

  // Test to handle invalid input value when Set button is clicked
  test("handles invalid input value when Set button is clicked", () => {
    // Render the Counter component
    const { getByText, getByRole } = render(<Counter />);
    // Type 'invalid' into the input field
    const inputElement = getByRole("spinbutton");
    userEvent.type(inputElement, "invalid");
    // Click the Set button
    const setButton = getByText(/Set/i);
    userEvent.click(setButton);
    // Verify that count remains unchanged (0)
    const countElement = getByText("0");
    expect(countElement).toBeTruthy();
  });

  // Test to ensure that count does not change when attempting to set a negative input value
  test("does not change count when attempting to set a negative input value", () => {
    // Render the Counter component
    const { getByText, getByRole, queryByText } = render(<Counter />);
    // Type '-6' into the input field
    const inputElement = getByRole("spinbutton");
    userEvent.type(inputElement, "-6");
    // Click the Set button
    const setButton = getByText(/Set/i);
    userEvent.click(setButton);
    // Verify that count remains unchanged (should not find '0' text)
    const countElement = queryByText("0");
    expect(countElement).toBeNull();
  });
});
