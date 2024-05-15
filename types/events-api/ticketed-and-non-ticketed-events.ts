import { ICopySummary } from "@/types/copy-api/event-copy";
import { ICopyImage } from "@/types/copy-api/event-images";

/** Data as returned from the Events API */
export interface ITicketedAndNonTicketedEvents {
  eventApiAllEvents: {
    nonTicketedEvents: INonTicketedEvent[];
    ticketedEvents: ITicketedEvent[];
  };
}

export interface ITicketedDate {
  available: true;
  date: string;
  ticketedTimes?: {
    endTime: string;
    startTime: string;
    __typename: string;
  }[];
  __typename: "TicketedDate";
}
export interface ITicketedEvent extends ICopySummary {
  available: boolean;
  description: string;
  free: boolean;
  id: string;
  location: "South Kensington" | "Tring";
  name: string;
  ticketedDates: ITicketedDate[];
  __typename: "TicketedEvent";
  copy: ICopySummary;
}

export interface INonTicketedDate {
  available: boolean;
  startDate: string;
  nonTicketedTimes?: {
    startTime: string;
    __typename: string;
  }[];
  __typename: "NonTicketedDate";
}

export interface INonTicketedEvent {
  description: string;
  eventType: "School" | "Science" | "Tring" | "Visitor";
  id: string;
  location: "South Kensington" | "Tring";
  name: string;
  nonTicketedDates: INonTicketedDate[];
  __typename: "NonTicketedEvent";
  copy: ICopySummary;
}

/** Data that is returned to the frontend, Events API data with Copy API data added to each event */
export type IEvent = ITicketedEvent | INonTicketedEvent;
