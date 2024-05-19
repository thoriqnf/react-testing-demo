import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

test("renders correctly", () => {
  // Render the CounterTwo component with count prop set to 0
  render(<CounterTwo count={0} />);
  // Find the text element containing "Counter Two"
  const textElement = screen.getByText("Counter Two");
  // Assert that the text element is present in the document
  expect(textElement).toBeTruthy(); // Using toBeTruthy instead of toBeInTheDocument
});

test("handlers are called", async () => {
  // Create mock functions for increment and decrement handlers
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  // Render the CounterTwo component with mock handlers and count prop set to 0
  render(
    <CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  );
  // Find the increment and decrement buttons
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });
  // Simulate click events on the increment and decrement buttons
  await userEvent.click(incrementButton);
  await userEvent.click(decrementButton);
  // Assert that the increment and decrement handlers were called exactly once each
  expect(incrementHandler).toHaveBeenCalledTimes(1);
  expect(decrementHandler).toHaveBeenCalledTimes(1);
});
