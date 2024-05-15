import { format, add, setDay } from "date-fns";

const GRAPHQL_DATE_FORMAT = "yyyy-MM-dd";

export const DEFAULT_DATE_FORMAT = "d MMMM";

export interface IDateRange {
  heading: string;
  fromDate: string;
  toDate: string | null;
}

interface IDateRanges {
  today: IDateRange;
  /** Pass the same value for fromDate and toDate, toDate is currently unused */
  custom: (fromDate: Date, toDate: Date) => IDateRange;
}
export const dateRanges: IDateRanges = {
  today: {
    heading: "Today",
    fromDate: format(new Date(), GRAPHQL_DATE_FORMAT),
    toDate: format(add(new Date(), { years: 1 }), GRAPHQL_DATE_FORMAT),
  },
  custom: (fromDate, toDate) => {
    return {
      heading: format(fromDate, DEFAULT_DATE_FORMAT),
      fromDate: format(fromDate, GRAPHQL_DATE_FORMAT),
      /** If we decide to implement date-range functionality a second date parameters will be used to select the end date. */
      // toDate: format(toDate, GRAPHQL_DATE_FORMAT),
      toDate: format(fromDate, GRAPHQL_DATE_FORMAT),
    };
  },
};

export const DEFAULT_DATE_RANGE = dateRanges.today;
