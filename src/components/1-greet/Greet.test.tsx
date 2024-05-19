import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  // Test to ensure that the component renders correctly
  test("renders correctly", () => {
    // Render the Greet component
    render(<Greet />);
    // Find the text element containing "Hello Guest"
    const textElement = screen.getByText("Hello Guest");
    // Check if the text element is present in the document
    expect(textElement).toBeTruthy(); // Using toBeTruthy instead of toBeVisible
  });

  // Test to ensure that the component renders the provided name
  test("renders a name", () => {
    // Render the Greet component with a name prop
    render(<Greet name="Thoriq" />);
    // Find the text element containing "Hello Thoriq"
    const textElement = screen.getByText("Hello Thoriq");
    // Check if the text element is present in the document
    expect(textElement).toBeTruthy(); // Using toBeTruthy instead of toBeInTheDocument
  });
});
