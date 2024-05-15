import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Tabs } from ".";

describe("Tabs Component", () => {
  const tabs = [
    {
      id: "tab1",
      heading: "Tab 1",
      content: "Tab 1 Content",
    },
    {
      id: "tab2",
      heading: "Tab 2",
      content: "Tab 2 Content",
    },
  ];

  it("should render the tabs and content", () => {
    const { getByText } = render(<Tabs tabs={tabs} />);

    // Check if the tab buttons are rendered
    tabs.forEach((tab) => {
      const tabButton = getByText(tab.heading);
      expect(tabButton).toBeInTheDocument();
    });

    // Check if the content is initially hidden
    tabs.forEach((tab) => {
      const content = getByText(tab.content);
      expect(content).toHaveAttribute("aria-hidden", "true");
    });
  });

  it("should toggle tab content when a tab is clicked", () => {
    const { getByText } = render(<Tabs tabs={tabs} />);

    // Click on the first tab
    fireEvent.click(getByText(tabs[0].heading));

    // Check if the content of the first tab is visible and others are hidden
    expect(getByText(tabs[0].content)).toHaveAttribute("aria-hidden", "false");
    expect(getByText(tabs[1].content)).toHaveAttribute("aria-hidden", "true");

    // Click on the second tab
    fireEvent.click(getByText(tabs[1].heading));

    // Check if the content of the second tab is visible and others are hidden
    expect(getByText(tabs[0].content)).toHaveAttribute("aria-hidden", "true");
    expect(getByText(tabs[1].content)).toHaveAttribute("aria-hidden", "false");
  });
});
