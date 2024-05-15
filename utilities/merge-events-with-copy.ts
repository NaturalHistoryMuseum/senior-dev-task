import {
  ITicketedAndNonTicketedEvents,
  IEvent,
} from "@/types/events-api/ticketed-and-non-ticketed-events";
import { ICopyImage, ICopySummaryList } from "@/types/copy-api/event-copy";
import { fallbackImage } from "@/constants/fallback-data/image";

interface IOptions {
  showAllEvents?: boolean;
}
/**
 * Adds the relevent fields from the Copy API to its corresponding event in the Events
 * Removes any events that do not have associated copy
 * @param allEvents Data from the Events API
 * @param copy Data from the Copy API
 * @returns {IEvent[]} Events data with the relevant fields from the Copy API
 */
export const mergeEventsWithCopy = (
  allEvents: ITicketedAndNonTicketedEvents,
  copy: ICopySummaryList,
  options: IOptions = {}
): IEvent[] => {
  const events = allEvents.eventApiAllEvents;
  const eventsCopy = copy.eventList.items;

  const { ticketedEvents, nonTicketedEvents } = events;

  return [...ticketedEvents, ...nonTicketedEvents]
    .map((event) => {
      let result = event;

      /** Find an object in the copy data that is for the current event.
       * If there is no matching copy, the event is removed from the list
       */
      const matchingCopy = eventsCopy.find((copy) =>
        copy._path?.toLowerCase().includes(event.id.toLowerCase())
      );

      if (!options.showAllEvents && !matchingCopy) {
        return false;
      }

      result = {
        ...result,
        copy: { ...matchingCopy } || {},
      };
      /*
       * The Copy API content includes '__typename' but we need to keep the __typename from Events API to test against later so we declare it so here */
      result =
        result.__typename === "TicketedEvent"
          ? {
              ...result,
              __typename: "TicketedEvent",
            }
          : {
              ...result,
              __typename: "NonTicketedEvent",
            };

      return result;
    })
    .filter(Boolean) as IEvent[];
};
