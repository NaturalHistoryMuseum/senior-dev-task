import React from "react";

import { getTagData } from "@/utilities/tags/get-tag-data";
import { getUndefinedTagHeading } from "@/utilities/tags/get-undefined-tag-heading";
interface ITagFilterButton {
  tag: string;
  selected: boolean;
  onClick: () => void;
}

export const TagFilterButton = ({
  tag,
  selected,
  onClick,
}: ITagFilterButton) => {
  const tagData = getTagData(tag);

  return (
    <button
      className="bg-[transparent] text-grey-900 border-none flex flex-col items-center p-0 flow flow-space-3xs"
      onClick={onClick}
    >
      <div
        className={`w-[54px] h-[54px] flex items-center justify-center rounded-[8px] ${
          selected ? " border-[4px]" : " border-[2px]"
        } border-solid border-grey-900`}
      >
        {tagData ? React.createElement(tagData.icon) : <></>}
      </div>
      <span className="text-[.75rem] text-center w-full block">
        {tagData ? tagData.heading : getUndefinedTagHeading(tag)}
      </span>
    </button>
  );
};
