import { IEvent } from "@/types/events-api/ticketed-and-non-ticketed-events";
export const eventCardDefault: IEvent = {
  id: "TEXH-TTN",
  name: "Titanosaur: Life as the Biggest Dinosaur (includes Museum admission)",
  imagePath: {
    _path: "/content/dam/nhm-ticketing/texh-ttn/TEXH-TTN.jpg",
    width: 560,
    height: 300,
  },
  copy: {
    _path: "/content/dam/nhm-ticketing/texh-ttn/event--card",
    eventName:
      "(ID matching events API) Titanosaur: Life as the Biggest Dinosaur",
    price: "£6.50 - £16 per person, 31 March 2023 - 14 Jan 2024",
    membersPrice: "£5.55",
    text: {
      __typename: "MultiFormatString",
      html: "<p>Step into the world of the magnificent titanosaur Patagotitan mayorum - the largest known creature to have walked the Earth. Barely fitting in the nine-metre-high Waterhouse Gallery, the extraordinary creature will be surrounded by the story of how it survived and thrived. Lorem ipsum.</p>\n",
    },
    link: "https://www.nhm.ac.uk/visit/exhibitions/titanosaur.html",
    primaryTags: ["nhm:whats-on/dinosaurs", "nhm:whats-on/earthquakes"],
  },
  description:
    'You are booking tickets for the Wildlife Photographer of the Year exhibition. There are separate ticketing systems for <a href="https://www.nhm.ac.uk/visit/exhibitions/wildlife-photographer-of-the-year/select-your-membership.html">Member tickets</a> and <a href="https://www.nhm.ac.uk/visit/exhibitions/wildlife-photographer-of-the-year/select-your-organisation.html">Corporate Supporter tickets</a>.\r\n<br />\r\n<br />\r\nEntry to the Museum is included in your exhibition ticket.\r\n<br />\r\n<br />\r\nPlease select a date and time to visit. There is a maximum of six tickets per order. Please select a ticket for everyone in your group, including children of all ages.\r\n<br />\r\n<br />\r\nWith our doors closed for several months we&#39;ve lost vital income and are relying on donations to continue our important work. If you can, please consider donating to the Museum alongside your ticket. Donations will help us to continue welcoming visitors and inspiring the next generation of scientists. Please note that donations are non-refundable.',
  __typename: "TicketedEvent",
  location: "South Kensington",
  available: true,
  free: false,
  ticketedDates: [
    {
      __typename: "TicketedDate",
      date: "2023-10-24",
      available: true,
    },
  ],
};
