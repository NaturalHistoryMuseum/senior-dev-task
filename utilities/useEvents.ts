import { useState } from "react";
import { filterEventsByCopyAPIAttrs } from "./filter-by-copy-attrs";
import { IEvent } from "@/types/events-api/ticketed-and-non-ticketed-events";
import { DEFAULT_DATE_RANGE } from "@/utilities/date-ranges";

interface IUseEvents {
  eventsFromServer: IEvent[] | null;
}

export interface ILoadEventsParams {
  /** The time period heading, this is received from the `dateRanges` object {@see date-ranges.ts}   */
  heading: string;
  /** The start date, received from the `dateRanges` object {@see date-ranges.ts} */
  fromDate: string;
  /** toDate is currently unused and therefore always `null`. If we implement date-range functionality it will be used. */
  toDate: string | null;
  /** The tags to filter the events by */
  tags: string[];
  /** Whether to only show free events */
  onlyFreeEvents: boolean;
}

/**
 *
 * @param eventsFromServer the events data received from the server, i.e on initial load. This sets the initial collection of events.
 * @param copy the copy data received from the server, i.e on initial load. This is used to merge the copy data with the events data.
 * @returns {
 * `loadEvents`: function to load events from the server
 * `timePeriodHeading`: the heading for the time period of the events
 * `data`: the events data merged with the copy data
 * `loading`: boolean to indicate if the events are loading
 * `error`: any error received from the server
 * }
 */

export const useEvents = ({ eventsFromServer }: IUseEvents) => {
  const [events, setEvents] = useState<IEvent[]>(eventsFromServer || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  let [timePeriodHeading, setTimePeriodHeading] = useState(
    DEFAULT_DATE_RANGE.heading
  );

  const loadEvents = async ({
    fromDate,
    toDate,
    tags,
    onlyFreeEvents,
  }: ILoadEventsParams) => {
    console.log({ fromDate, toDate, tags, onlyFreeEvents });
    setLoading(true);
    try {
      const reqUrl = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_BASE_PATH}/api/fetch-events-data?fromDate=${fromDate}&toDate=${toDate}`;
      const res = await fetch(reqUrl);
      const data = await res.json();

      const filteredEvents = filterEventsByCopyAPIAttrs(data.events, {
        tags,
        onlyFreeEvents,
      });

      setEvents(filteredEvents);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(
        "Uh oh! Something's gone wrong with our page, so we can't load our events right now. But don't worry, you can still see what's on and book tickets for our events on our"
      );
    }
  };

  return {
    loadEvents,
    timePeriodHeading,
    data: events,
    loading,
    error,
  };
};
