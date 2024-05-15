import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/base/button";
import { dateRanges } from "@/utilities/date-ranges";

import { format } from "date-fns";
import Close from "@/components/base/icons/Close";

import { Calendar } from "@/components/ui/filter/calendar";
import { Tags } from "@/components/ui/filter/tags";
import { Tabs } from "@/components/ui/tabs";
import { ILoadEventsParams } from "@/utilities/useEvents";
import { getTagData } from "@/utilities/tags/get-tag-data";
import ChevronIcon from "@/components/base/icons/Chevron";
import { DEFAULT_DATE_FORMAT } from "@/utilities/date-ranges";

export interface IFilters {
  date: Date;
  tags: string[];
  onlyFreeEvents: boolean;
}

const defaultFilters: IFilters = {
  date: new Date(),
  tags: [],
  onlyFreeEvents: false,
};
interface ITimeFilter {
  loadEvents: ({ fromDate, toDate, tags }: ILoadEventsParams) => void;
  tags: string[] | null;
}

const formatDate = (date: Date) => format(date, DEFAULT_DATE_FORMAT);
const formatTags = (tags: string[]) =>
  tags.map((tag) => getTagData(tag)?.heading).join(", ");

export const Filter = ({ loadEvents, tags }: ITimeFilter) => {
  const filterRef = useRef<HTMLDivElement>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [isOffScreen, setIsOffScreen] = useState(false);
  const [showFilterPill, setShowfilterPill] = useState(false);
  const [filters, setFilters] = useState<IFilters>(defaultFilters);
  const [activeFilters, setActiveFilters] = useState<IFilters>(defaultFilters);

  const findEvents = () => {
    setShowfilterPill(true);
    setActiveFilters(filters);
    loadEvents({
      ...dateRanges.custom(filters.date, filters.date),
      tags: filters.tags,
      onlyFreeEvents: filters.onlyFreeEvents,
    });
  };

  const clearFilters = () => {
    setShowfilterPill(false);
    setFilters({
      date: new Date(),
      tags: [],
      onlyFreeEvents: false,
    });
    setActiveFilters(defaultFilters);
    loadEvents({
      ...dateRanges.custom(new Date(), new Date()),
      tags: [],
      onlyFreeEvents: false,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const headerVisible =
        document.documentElement.dataset?.headerVisible === "true";
      setHeaderVisible(!!headerVisible);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsOffScreen(false);
        } else {
          setIsOffScreen(true);
        }
      },
      {
        rootMargin: "0px 0px 100% 0px",
        threshold: 1,
      }
    );
    if (!filterRef.current) return;
    observer.observe(filterRef.current);

    return () => {
      if (filterRef.current) {
        observer.unobserve(filterRef.current);
        window.removeEventListener("scroll", () => {});
      }
    };
  }, [filterRef]);
  return (
    <>
      <a
        href="#filter"
        style={{
          transition: "transform .1s ease-in-out",
          transform: headerVisible ? `translateY(var(--ngc-header-height)` : "",
        }}
        className={`${
          isOffScreen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-[transform] fixed top-[0] left-[0] p-xs bg-lime-green-600 z-10 w-[100%] max-w-[100%] border-l-[0] border-r-[0] border-t-[0] border-b-2 border-solid border-grey-900`}
        aria-hidden={!isOffScreen}
      >
        <div className="wrapper repel">
          Filters
          <ChevronIcon direction="down" />
        </div>
      </a>
      <div className="flow">
        <section
          ref={filterRef}
          id="filter"
          className="flow p-s bg-lime-green-600"
        >
          <h3>When are you visiting the Museum?</h3>
          <Tabs
            tabs={[
              {
                id: "calendar",
                heading: `Calendar (${formatDate(activeFilters.date)})`,
                content: <Calendar setFilters={setFilters} filters={filters} />,
              },
              {
                id: "tags",
                heading: `What are you looking for? ${
                  activeFilters.tags.length
                    ? "(" + formatTags(activeFilters.tags) + ")"
                    : ""
                }`,
                content: (
                  <Tags tags={tags} filters={filters} setFilters={setFilters} />
                ),
              },
            ]}
          />

          <div className="flex gap-xs">
            <button
              className="bg-[transparent] border-none text-red-error underline"
              onClick={clearFilters}
            >
              Clear selection
            </button>
            <Button
              className="flex-[1] max-w-[100%] justify-center"
              buttonText="Search"
              ariaLabel="Search"
              as="button"
              onClick={findEvents}
              hideChevron
            />
          </div>
        </section>

        <FilterPill
          showFilterPill={showFilterPill}
          activeFilters={activeFilters}
          clearFilters={() => clearFilters()}
        />
      </div>
    </>
  );
};

interface IFilterPill {
  showFilterPill: boolean;
  activeFilters: IFilters;
  clearFilters: () => void;
}
const FilterPill = ({
  showFilterPill,
  activeFilters,
  clearFilters,
}: IFilterPill) => {
  if (!showFilterPill) return null;
  return (
    <div>
      <span className="bg-orange rounded-[16px] inline-flex items-center gap-xs px-s py-2xs border-none">
        {[formatTags(activeFilters.tags), formatDate(activeFilters.date)]
          .filter(Boolean)
          .join(", ")}{" "}
        <button
          className="bg-[transparent] border-none flex items-center"
          onClick={clearFilters}
        >
          <Close />
        </button>
      </span>
    </div>
  );
};
