import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Layout from "@/components/ui/layout";
import { Filter } from "@/components/ui/filter";
import { EventCard } from "@/components/ui/event-card";
import { IEvent } from "@/types/events-api/ticketed-and-non-ticketed-events";
import { useEvents } from "@/utilities/useEvents";
import { useSavedEvents } from "@/components/hooks/use-saved-events";
import { DEFAULT_DATE_RANGE } from "@/utilities/date-ranges";
import { FetchEventsDataResponse } from "./api/fetch-events-data";

interface IHome {
  /** Events that have been merged with the copy, ready to rendered */
  eventsFromServer: IEvent[] | null;
  /** Any errors from either the Events API or Copy API in `getServerSideProps` */
  errors: string[];
  /** Array of each unique event tag applied via the copy API */
  tags: string[] | null;
}

const Home = ({
  eventsFromServer,
  errors,
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    loadEvents,
    loading,
    error: clientError,
    data,
    timePeriodHeading,
  } = useEvents({
    eventsFromServer,
  });

  const { SavedEventList } = useSavedEvents();

  return (
    <Layout>
      <div>
        {errors.length === 0 && !clientError ? (
          <></>
        ) : (
          <div
            style={{
              backgroundColor: "#F7A70B1A",
            }}
            className="p-s"
          >
            Uh oh! Something’s gone wrong with our page, so we can’t load our
            events right now. But don’t worry, you can still see what’s on and
            book tickets for our events on our{" "}
            <a
              className="font-bold underline"
              href={process.env.NEXT_PUBLIC_TICKETING_URL}
            >
              ticketing page
            </a>
            .
          </div>
        )}

        <Filter loadEvents={loadEvents} tags={tags} />
      </div>
      {errors.length === 0 && !clientError && (
        <>
          <h3>
            On {timePeriodHeading}{" "}
            <span className="ml-2xs font-displayLight">
              {data.length} events
            </span>
          </h3>
          <ul className="flow">
            {loading ? (
              <p>Loading...</p>
            ) : (
              data &&
              data.length > 0 &&
              data.map((event) => (
                <li
                  key={event.id}
                  className="border-[0] border-b-[2px] border-solid pb-s"
                >
                  <EventCard {...event} />
                </li>
              ))
            )}
          </ul>
        </>
      )}
      <SavedEventList />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<IHome> = async () => {
  const { fromDate, toDate } = DEFAULT_DATE_RANGE;
  let data: FetchEventsDataResponse | null = null;

  try {
    const reqUrl = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_BASE_PATH}/api/fetch-events-data?fromDate=${fromDate}&toDate=${toDate}`;
    const res = await fetch(reqUrl);
    data = await res.json();

    if (!data) throw new Error("Error fetching events data");
  } catch (error) {
    return {
      props: {
        eventsFromServer: null,
        tags: [],
        errors: ["Error fetching events data"],
      },
    };
  }

  return {
    props: {
      eventsFromServer: data.events,
      tags: data.tags,
      errors: [],
    },
  };
};

export default Home;
