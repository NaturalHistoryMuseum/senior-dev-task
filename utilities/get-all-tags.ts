import { ICopySummaryList } from "@/types/copy-api/event-copy";

/**
 * Takes the data from the Copy API and returns an array of all the tags that are used
 * @param copy the data from the Copy API
 * @returns an array of all the tags that are used
 */
export const getAllTags = (copy: ICopySummaryList) => {
  const events = copy.eventList.items;
  const tags: string[] = [];

  events.forEach((event) => {
    if (!event.primaryTags) return;

    event.primaryTags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  return tags;
};
