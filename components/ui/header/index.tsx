import React, { FC } from "react";
import NHMDesktop  from "@/components/base/icons/logos/NHMDesktop";
import NHMMobile from "@/components/base/icons/logos/NHMMobile";

export const Header: FC = () => {

  return (
    <header
      role="banner"
      className="w-full bg-night-blue-900 text-white border-b-[1px] border-white border-opacity-20"
      data-gtm-component="Header"
    >
      <div className="mx-auto py-xs px-s-m flex flex-col flex-wrap md:justify-start md:items-stretch md:flex-row divide-y-[1px] md:divide-y-0 md:divide-x-[1px] divide-white/30 max-w-page">
        <div className="max-w-full md:w-auto mb-0 md:mr-m flex">
          <a href="https://www.nhm.ac.uk" aria-label="Go to the NHM homepage">
            <span className="sr-only">Natural History Museum logo</span>
            <NHMDesktop aria-hidden="true" />
            <NHMMobile aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};
