import { IFilters } from "@/components/ui/filter";
import { TagFilterButton } from "@/components/base/tag-filter-button";
interface ITags {
  tags: string[] | null;
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}
export const Tags = ({ tags, filters, setFilters }: ITags) => {
  return (
    <ul className="cluster gutter-s">
      {tags?.map((tag) => {
        return (
          <li key={tag}>
            <TagFilterButton
              tag={tag}
              selected={filters.tags.includes(tag)}
              onClick={() =>
                setFilters((prevState) => ({
                  ...prevState,
                  tags: prevState.tags.includes(tag)
                    ? prevState.tags.filter((t) => t !== tag)
                    : [...prevState.tags, tag],
                }))
              }
            />
          </li>
        );
      })}
    </ul>
  );
};
