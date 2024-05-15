import { isWeekend, isToday, isTomorrow, format, isPast } from "date-fns";
const today = format(new Date(), "yyyy-MM-dd");

export interface ITestTicketedEvent {
  id: string;
  name: string;
  available: boolean;
  price: number | "free";
  membersPrice?: number;
  primaryTags?: string[];
  secondaryTags?: string[];
  ticketedDates: {
    available: boolean;
    date: string;
    ticketedTimes:
      | {
          startTime: string;
          endTime: string;
        }[]
      | null;
  }[];
  featured?: boolean;
}
interface ITestData {
  data: {
    ticketingAndNonTicketingEvents: {
      ticketedEvents: ITestTicketedEvent[];
      nonTicketedEvents: {
        id: string;
        name: string;
        eventType: "Visitor";
        location: "Hintze Hall" | "South Kensington";
        nonTicketedDates: {
          startDate: string;
        }[];
      }[];
    };
  };
}

const ONE_DAY = 86400000;
const generateDates = (
  startDate: string,
  endDate: string,
  options?: {
    weekendOnly?: boolean;
    notOnToday?: boolean;
    tomorrowOnly?: boolean;
    onlyDay?: number;
    times?: { startTime: string; endTime: string }[];
  }
) => {
  const dates = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  for (let i = start.getTime(); i <= end.getTime(); i += ONE_DAY) {
    if (!isPast(new Date(i + ONE_DAY))) {
      let available = true;

      if (options?.weekendOnly && !isWeekend(new Date(i))) available = false;

      if (options?.notOnToday && isToday(new Date(i))) available = false;

      if (options?.tomorrowOnly && !isTomorrow(new Date(i))) available = false;

      if (options?.onlyDay && new Date(i).getDay() !== options.onlyDay)
        available = false;

      dates.push({
        available,
        date: format(new Date(i), "yyyy-MM-dd"),
        ticketedTimes: options?.times ? options.times : null,
      });
    }
  }
  return dates;
};

const testData: ITestData = {
  data: {
    ticketingAndNonTicketingEvents: {
      ticketedEvents: [
        {
          id: "TITAN-ADM",
          name: "Titanosaur: Life as the Biggest Dinosaur",
          available: true,
          price: 19,
          membersPrice: 10,
          featured: true,
          ticketedDates: generateDates("2023-05-24", "2023-07-24", {
            times: [
              {
                startTime: "10:00",
                endTime: "17:00",
              },
            ],
          }),
        },
        {
          id: "WPY-ADM",
          name: "Wildlife Photographer of the Year",
          available: true,
          price: 19,
          membersPrice: 10,
          featured: true,
          ticketedDates: generateDates("2023-05-24", "2023-07-24"),
        },
        {
          id: "JJB",
          name: "John James Audubon and his Birds of America",
          available: true,
          price: "free",
          featured: true,
          ticketedDates: generateDates("2023-05-24", "2023-07-24"),
        },
        {
          id: "PSR",
          name: "The Polar Silk Road",
          available: true,
          price: "free",
          ticketedDates: generateDates("2023-05-21", "2023-07-24", {
            tomorrowOnly: true,
            times: [
              {
                startTime: "10:00",
                endTime: "17:50",
              },
            ],
          }),
        },
        {
          id: "TITACC-VIS",
          name: "Accessible Morning Visits to Titanosaur: Life as the Biggest Dinosaur",
          available: true,
          price: 12.95,
          membersPrice: 10,
          primaryTags: ["All ages"],
          secondaryTags: [
            "BSL translate",
            "Braille options",
            "Quiet spaces",
            "Large print",
          ],
          ticketedDates: generateDates("2023-05-24", "2023-06-24", {
            weekendOnly: true,
          }),
        },
        {
          id: "WILD-ESC",
          name: "The wild escape",
          available: true,
          price: 30,
          membersPrice: 20,
          primaryTags: ["All ages"],
          ticketedDates: generateDates("2023-05-23", "2023-06-02", {}),
        },
        {
          id: "FAM-FUN",
          name: "Family Fun: Be a Palaeontologist",
          available: true,
          price: 30,
          membersPrice: 20,
          primaryTags: ["Family friendly"],
          secondaryTags: ["Drop-in"],
          ticketedDates: generateDates("2023-05-25", "2023-10-02", {
            notOnToday: true,
          }),
        },
        {
          id: "WM-SCI",
          name: "Women in Science Tour",
          available: true,
          price: 30,
          membersPrice: 27,
          primaryTags: ["Family friendly", "Booking required"],
          ticketedDates: generateDates("2023-05-01", "2023-11-08", {
            times: [
              {
                startTime: "10:00",
                endTime: "10:30",
              },
              {
                startTime: "11:00",
                endTime: "11:30",
              },
              {
                startTime: "12:00",
                endTime: "12:30",
              },
            ],
          }),
        },
        {
          id: "EXBR",
          name: "Great Exhibition Road Festival",
          available: true,
          price: "free",
          primaryTags: ["Family friendly"],
          ticketedDates: generateDates("2023-06-16", "2023-09-18"),
        },
        {
          id: "WM-SCISPA",
          name: "Women in Science Tour: Space",
          available: true,
          price: 30,
          membersPrice: 27,
          primaryTags: ["Family friendly", "Booking required"],
          ticketedDates: generateDates("2023-05-01", "2023-10-25"),
        },
        {
          id: "SIL-DISC",
          name: "Silent Disco",
          available: true,
          price: 30,
          membersPrice: 27,
          primaryTags: ["18+ recommended"],
          ticketedDates: generateDates("2023-05-01", "2024-12-08", {
            onlyDay: 5,
            times: [
              {
                startTime: "22:00",
                endTime: "01:00",
              },
            ],
          }),
        },
      ],
      nonTicketedEvents: [
        {
          id: "SK-ADM",
          name: "SouthKensington Admission",
          eventType: "Visitor",
          location: "Hintze Hall",
          nonTicketedDates: [
            {
              startDate: "2023-03-31",
            },
          ],
        },
        {
          id: "TIT-DSG",
          name: "Tianosours for Grown-ups",
          eventType: "Visitor",
          location: "South Kensington",
          nonTicketedDates: [
            {
              startDate: "2023-10-16",
            },
          ],
        },
      ],
    },
  },
};

export default testData;
