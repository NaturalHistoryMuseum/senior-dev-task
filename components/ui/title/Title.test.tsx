import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Title } from ".";

const defaultTitle = {
  heading: "What's on",
  primaryButtonText: "Find out about school bookings",
  primaryButtonLink: "/",
  secondaryButtonText: "Booking for a group visit",
  secondaryButtonLink: "/",
};
describe("Title Component", () => {
  it("renders the Title correctly", () => {
    const { getByRole } = render(<Title {...defaultTitle} />);

    const heading = getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(defaultTitle.heading);
  });
});
