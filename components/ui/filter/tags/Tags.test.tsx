import "@testing-library/jest-dom";
import React from "react";
import { Tags } from ".";
import { getTagData } from "@/utilities/tags/get-tag-data";
import { render, screen } from "@testing-library/react";
describe("Tags Component", () => {
  const tags: string[] = [
    "nhm/dinosaur",
    "nhm/exhibitions",
    "nhm/astronomy",
    "nhm/undefined",
    "NotATag",
    null,
  ] as string[];
  const filters = {
    date: new Date(),
    onlyFreeEvents: true,
    tags: [],
  };
  const setFilters = jest.fn();
  it("renders the tags correctly", () => {
    render(<Tags tags={tags} filters={filters} setFilters={setFilters} />);

    // Check if the component renders the tag names
    tags.forEach((tag) => {
      if (!tag) return; // Skip null tags
      expect(screen.getByText(getTagData(tag).heading)).toBeInTheDocument();
    });
  });
});
