import { render, screen, act } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  beforeEach(() => {
    jest.useFakeTimers(); // Use fake timers before each test
  });

  afterEach(() => {
    jest.useRealTimers(); // Restore real timers after each test
  });

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeTruthy(); // Ensure the list element is rendered
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length); // Ensure the correct number of list items are rendered
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeTruthy(); // Ensure the Login button is rendered
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).toBeNull(); // Ensure the Start Learning button is not rendered
  });

  test("Start Learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    act(() => {
      jest.advanceTimersByTime(1002); // Advance timers by 1002 ms
    });
    const startLearningButton = await screen.findByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).toBeTruthy(); // Ensure the Start Learning button is eventually displayed
  });
});
