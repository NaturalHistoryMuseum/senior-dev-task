import ReactCalendar from "react-calendar";
import { IFilters } from "@/components/ui/filter";
import ArrowIcon from "@/components/base/icons/Arrow";
interface ICalendar {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  filters: IFilters;
}
export const Calendar = ({ setFilters, filters }: ICalendar) => {
  return (
    <ReactCalendar
      onClickDay={(e) =>
        setFilters((prev) => ({
          ...prev,
          date: e,
        }))
      }
      value={filters.date}
      next2Label={null}
      nextLabel={<ArrowIcon direction="right" />}
      prevLabel={<ArrowIcon direction="left" />}
      prev2Label={null}
      minDetail="month"
      showNeighboringMonth={false}
    />
  );
};
