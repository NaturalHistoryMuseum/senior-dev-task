import React from "react";
import { IEvent } from "@/types/events-api/ticketed-and-non-ticketed-events";
import { Button } from "@/components/base/button";
import { getTagData } from "@/utilities/tags/get-tag-data";
import { useSavedEvents } from "@/components/hooks/use-saved-events";
import {
  fallbackImage,
  fallbackImageAltText,
} from "@/constants/fallback-data/image";

export const EventCard = ({
  id,
  name,
  copy,
  description,
  ...props
}: IEvent) => {
  const { SaveButton } = useSavedEvents();

  return (
    <div className="flow flow-space-xs" id={id}>
      <article className="relative grid md:grid-cols-[2fr_2fr_2fr] gap-s">
        <SaveButton
          event={{
            id,
            name,
            copy,
            description,
            ...props,
          }}
        />
        {/* Padding right makes space for the save button */}
        <div className="flow pr-[50px] md:pr-[0]">
          <h2 className="text-step-1 font-headline font-semibold">
            {copy?.eventName || name}
          </h2>
          <div
            className="hidden md:block"
            dangerouslySetInnerHTML={{
              __html: copy?.text?.html || description,
            }}
          />
        </div>

        <div className="flex md:justify-between items-center gap-xs">
          <div className="flow">
            <p className="font-bold">{copy?.price}</p>
            {copy?.membersPrice && (
              <p className="bg-lilac font-bold p-2xs rounded-s inline-block">
                Members price: {copy?.membersPrice}
              </p>
            )}
          </div>
          <div>
            {copy?.primaryTags
              ?.map((tag) => getTagData(tag)?.heading)
              .join(", ")}
          </div>
        </div>

        <div className="relative bg-grey-900 min-h-[200px]">
          <img
            src={copy?.imagePath?._path || fallbackImage._path}
            alt={
              copy?.imagePath?._path
                ? copy.imageAltText || ""
                : fallbackImageAltText
            }
            className="object-cover w-full h-[100%]"
          />
        </div>
      </article>
      <div>
        {copy?.link && (
          <Button
            as="a"
            link={copy?.link}
            buttonText="Book now"
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};
