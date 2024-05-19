import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders", () => {
    render(<Application />);

    /** getByRole */

    // Finding elements by their role
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeDefined(); // Expecting the page heading to be defined

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeDefined(); // Expecting the section heading to be defined

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeDefined(); // Expecting the name input element to be defined

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeDefined(); // Expecting the bio input element to be defined

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeDefined(); // Expecting the job location select element to be defined

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeDefined(); // Expecting the terms checkbox element to be defined

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeDefined(); // Expecting the submit button element to be defined

    /** getByLabelText */

    // Finding elements by their associated label text
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeDefined(); // Expecting the name input element with associated label text to be defined

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeDefined(); // Expecting the terms checkbox element with associated label text to be defined

    /** getByPlaceholderText */

    // Finding elements by their placeholder text
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeDefined(); // Expecting the name input element with placeholder text to be defined

    /** getByText */

    // Finding elements by their visible text content
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeDefined(); // Expecting the paragraph element with specific text content to be defined

    /** getByDisplayValue */

    // Finding elements by their displayed value
    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeDefined(); // Expecting the name input element with specific displayed value to be defined

    /** getByAltText */

    // Finding elements by their alt text (for images)
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeDefined(); // Expecting the image element with specific alt text to be defined

    /** getByTitle */

    // Finding elements by their title attribute
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeDefined(); // Expecting the element with specific title attribute to be defined

    /** getByTestId */

    // Finding elements by their data-testid attribute
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeDefined(); // Expecting the element with specific data-testid attribute to be defined
  });
});
