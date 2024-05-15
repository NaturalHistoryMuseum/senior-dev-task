import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Dialog, Transition } from "@headlessui/react";
import { useLocalStorage } from "usehooks-ts";

import {
  fallbackImage,
  fallbackImageAltText,
} from "@/constants/fallback-data/image";
import { IEvent } from "@/types/events-api/ticketed-and-non-ticketed-events";
import HeartIcon from "@/components/base/icons/Heart";
import { Button } from "@/components/base/button";
import SavedEventsBar from "./components/saved-events-bar";

/**
 * This hook creates two components for saving and viewing saved events resepectively.
 * They are contained within a single hook so they can share the necessary logic for saving to local storage.
 * @returns Two components: SaveButton and SavedEventList
 */
export const useSavedEvents = () => {
  const [savedEvents, setSavedEvents] = useLocalStorage<IEvent[]>(
    "savedEvents",
    []
  );

  const toggleSavedEvent = (event: IEvent) => {
    // If the event is already saved, remove it from the saved events array
    const eventIsSaved = savedEvents.find(
      (savedEvent) => savedEvent.id === event.id
    );
    if (eventIsSaved) {
      const newSavedEvents = savedEvents.filter(
        (savedEvent) => savedEvent.id !== event.id
      );
      setSavedEvents(newSavedEvents);
      return;
    }
    // If the event is not already saved, add it to the saved events array
    setSavedEvents((prev: IEvent[]) => [...prev, { ...event }]);
  };

  const SaveButton = ({ event }: { event: IEvent }) => {
    const [eventIsSaved, setEventIsSaved] = useState(false);
    useEffect(() => {
      const eventIsSaved = savedEvents.find(
        (savedEvent) => savedEvent.id === event.id
      );
      if (eventIsSaved) {
        setEventIsSaved(true);
      }
    }, [savedEvents]);

    return (
      <button
        className="absolute top-[0] right-[0] bg-white border-none z-5 pt-3xs px-3xs"
        onClick={() => toggleSavedEvent(event)}
      >
        <HeartIcon
          height="30"
          width="40"
          fill={eventIsSaved ? "var(--color-grey-900)" : "none"}
          fillOnly={eventIsSaved}
        />
      </button>
    );
  };

  const SavedEventListComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((prevState) => !prevState);

    return (
      <>
        <SavedEventsBar
          toggleOpen={toggleOpen}
          isOpen={isOpen}
          savedEvents={savedEvents}
          className="fixed bottom-[0px] left-[0] right-[0]"
        />
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            onClose={() => setIsOpen(false)}
            data-theme="night-blue"
            className="fixed bottom-[0px] left-[0] right-[0] z-10 overflow-y-scroll max-h-[75vh] md:max-h-[60vh] "
          >
            <SavedEventsBar
              toggleOpen={toggleOpen}
              isOpen={isOpen}
              savedEvents={savedEvents}
            />
            <ul className="flow pb-l px-s wrapper">
              {savedEvents.map((event) => {
                return (
                  <li
                    key={event.id}
                    className="grid md:grid-cols-[1fr_1fr] gap-s"
                  >
                    <div className="relative max-h-[200px]">
                      <img
                        src={
                          event?.copy?.imagePath?._path || fallbackImage._path
                        }
                        alt={
                          event?.copy?.imagePath?._path
                            ? event.copy.imageAltText || ""
                            : fallbackImageAltText
                        }
                        className="object-cover w-full h-[100%]"
                      />
                    </div>
                    <div className="flow flow-space-2xs">
                      <h3 className="font-display">{event.name}</h3>

                      <p>{event.copy?.price}</p>
                      {event.copy?.link && (
                        <Button
                          as="a"
                          link={event.copy?.link}
                          buttonText="Book now"
                          theme="secondary-dark"
                          textAlign="left"
                          className="w-full"
                        />
                      )}
                      <button
                        onClick={() => toggleSavedEvent(event)}
                        className="text-white border-none bg-[transparent] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Dialog>
        </Transition>
      </>
    );
  };
  return {
    SaveButton,
    // Component is wrapped in `dynamic` to prevent a NextJS Hydration error
    SavedEventList: dynamic(() => Promise.resolve(SavedEventListComponent), {
      ssr: false,
    }),
  };
};
