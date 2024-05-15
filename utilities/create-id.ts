/** Creates a predictable ID, prepend the first arg string to the second, replaces white space with hyphens and converts to lower case. */
const createId = (prepend: string, id: string) => {
  return `${prepend}-${id}`.replace(/\s+/g, "-").toLowerCase();
};

export default createId;
