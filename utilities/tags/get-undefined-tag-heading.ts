/**
 * To be used as a fallback when a tag heading is not defined in constants/tags.
 * @param tag an AEM tag string, e.g. nhm:whats-on/events
 * @returns converts the tag into a heading, e.g. nhm:whats-on/events -> Events
 */
export const getUndefinedTagHeading = (tag: string) => {
  if (!tag?.includes("/")) return tag;
  return tag
    .split("/")
    [tag.split("/").length - 1].split("")
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join("")
    .replace(/-/g, " ");
};
