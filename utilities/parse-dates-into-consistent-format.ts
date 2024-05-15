import {
  INonTicketedDate,
  ITicketedDate,
} from "@/types/events-api/ticketed-and-non-ticketed-events";

/**
 * CURRENTLY UNUSED, MAY BE REMOVED AFTER PRODUCTION RELEASE
 * @param dates Dates from ticketed and non-ticketed events are in different formats so we need to normalise them
 * @returns the dates in a consistent format
 */
const parseDatesIntoConsistentFormat = (
  dates: ITicketedDate[] | INonTicketedDate[]
) => {
  if (!dates) return null;
  return dates.map((date) => {
    return {
      ...date,
      available: typeof date.available === "boolean" ? date.available : true,
      date: date.__typename === "TicketedDate" ? date.date : date.startDate,
      times:
        date.__typename === "TicketedDate"
          ? date.ticketedTimes
          : date.nonTicketedTimes,
    };
  });
};

export default parseDatesIntoConsistentFormat;
