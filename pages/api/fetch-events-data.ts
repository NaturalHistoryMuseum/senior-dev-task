import {
  IEvent,
  ITicketedAndNonTicketedEvents,
} from "@/types/events-api/ticketed-and-non-ticketed-events";
import { mergeEventsWithCopy } from "utilities/merge-events-with-copy";
import { ICopySummaryList } from "@/types/copy-api/event-copy";
import type { NextApiRequest, NextApiResponse } from "next";

import eventsData from "./responses/events.json";
import copyData from "./responses/copy.json";

export interface FetchEventsDataResponse {
  events: IEvent[] | null;
  tags: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FetchEventsDataResponse>
) {
  const { query } = req;

  // TODO: Add date range filtering
  const { fromDate, toDate } = query;

  let events: ITicketedAndNonTicketedEvents | null = null;

  // TODO: Add error handling
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData.data);
    }, 1000);
  }).then((result: any) => {
    events = result;
  });

  let copy: ICopySummaryList | null = null;
  let tags: FetchEventsDataResponse["tags"] = [];

  // TODO: Add error handling
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(copyData.data);
    }, 1000);
  }).then((result: any) => {
    copy = result;
  });

  const showAllEvents = query.showAllEvents === "true";
  console.log({ showAllEvents });

  const eventsMergedWithCopy =
    (events &&
      copy &&
      mergeEventsWithCopy(events, copy, {
        showAllEvents,
      })) ||
    null;

  res.status(200).json({ events: eventsMergedWithCopy, tags });
}
