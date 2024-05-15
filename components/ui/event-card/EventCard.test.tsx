import React from "react";
import { render } from "@testing-library/react";
import { EventCard } from ".";
import { eventCardDefault } from "data/test_content/event-card";
describe("EventCard Component", () => {
  it("renders the EventCard correctly", () => {
    const { getByRole, getByText } = render(
      <EventCard {...eventCardDefault} />
    );

    const eventCard = getByRole("article");

    expect(eventCard).toBeInTheDocument();

    const eventCardTitle = getByRole("heading", {
      name: eventCardDefault?.copy?.eventName,
    });

    expect(eventCardTitle).toBeInTheDocument();

    const membersPrice = getByText(
      `Members price: ${eventCardDefault.copy?.membersPrice}`
    );
    expect(membersPrice).toBeInTheDocument();
  });

  it("renders the EventCard correctly with no members price", () => {
    const { getByRole, queryByText } = render(
      <EventCard
        {...eventCardDefault}
        copy={{ ...eventCardDefault.copy, membersPrice: undefined }}
      />
    );

    const eventCard = getByRole("article");

    expect(eventCard).toBeInTheDocument();

    const eventCardTitle = getByRole("heading", {
      name: eventCardDefault?.copy?.eventName,
    });

    expect(eventCardTitle).toBeInTheDocument();

    expect(
      queryByText(`Members price: ${eventCardDefault.copy?.membersPrice}`)
    ).toBeNull();
  });

  it("renders the Events API 'name' property if the Copy API 'display_name' property is undefined", () => {
    const { getByRole } = render(
      <EventCard
        {...eventCardDefault}
        copy={{ ...eventCardDefault.copy, eventName: undefined }}
      />
    );

    const eventCard = getByRole("article");

    expect(eventCard).toBeInTheDocument();

    const eventCardTitle = getByRole("heading", {
      name: eventCardDefault?.name,
    });

    expect(eventCardTitle).toBeInTheDocument();
  });
});
