import tags from "@/constants/tags";
import { getUndefinedTagHeading } from "./get-undefined-tag-heading";
import EventsIcon from "@/components/base/icons/tag-icons/Events";

/**
 *
 * @param tag an AEM tag string, e.g. nhm:whats-on/events
 * @returns An object from the tags constant containg a heading and an icon, or a default object if no match is found
 */
export const getTagData = (tag: string) => {
  const matchingTag = Object.entries(tags).find(([key, value]) =>
    tag?.includes(key)
  );
  return matchingTag
    ? matchingTag[1]
    : {
        heading: getUndefinedTagHeading(tag),
        icon: EventsIcon,
      };
};
