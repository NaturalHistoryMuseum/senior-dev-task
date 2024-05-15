import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Page header", () => {
  it("renders on the page", async () => {
    render(<Header />);
    const header = await screen.findByRole("banner");
    expect(header).toBeInTheDocument();
  })
})
