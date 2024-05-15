import { IEvent } from "@/types/events-api/ticketed-and-non-ticketed-events";

/**
 * Takes the full list of available events and returns a filtered list based on the options provided
 * @param events Array of events
 * @param options optional properties to filter the events by
 * @returns A list of events filtered by the options provided
 */
export const filterEventsByCopyAPIAttrs = (
  events: IEvent[],
  options: { tags?: string[]; onlyFreeEvents?: boolean }
) => {
  let filteredEvents = events;
  const { tags = null, onlyFreeEvents = false } = options;

  if (tags && tags.length > 0) {
    filteredEvents = filteredEvents.filter((event) =>
      event.copy?.primaryTags?.some((tag) => tags.includes(tag))
    );
  }

  if (onlyFreeEvents) {
    filteredEvents = filteredEvents.filter((event) =>
      event.__typename === "TicketedEvent" ? event.free : true
    );
  }

  return filteredEvents;
};
