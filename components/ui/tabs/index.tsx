import React, { useState } from "react";
import ChevronIcon from "@/components/base/icons/Chevron";
import createId from "@/utilities/create-id";
interface ITabs {
  tabs: {
    id: string;
    heading: string;
    content: React.ReactNode;
  }[];
}

export const Tabs = ({ tabs }: ITabs) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const isActiveTab = (id: string | null) => id && id === activeTab;

  const toggleActiveTab = (id: string) =>
    setActiveTab((prev) => (prev === id ? null : id));

  return (
    <div className="flow">
      <div
        className="grid md:grid-cols-[1fr_2fr_2fr] md:grid-rows-[auto_1fr] gap-xs items-center"
        role="tablist"
      >
        {tabs.map((tab) => {
          return (
            <React.Fragment key={tab.id}>
              <button
                role="tab"
                id={createId("tab", tab.id)}
                aria-controls={createId("panel", tab.id)}
                onClick={() => toggleActiveTab(tab.id)}
                className="bg-[transparent] border-b-2 border-grey-900 border-solid text-left inline-flex flex-[1] gap-xs items-center px-xs py-2xs min-w-[100%] h-[100%] text-grey-900"
              >
                <ChevronIcon direction={isActiveTab(tab.id) ? "up" : "down"} />
                {tab.heading}
              </button>
              <article
                className={`md:col-[1_/_-1] md:row-[2]
                                ${isActiveTab(tab.id) ? "block" : "hidden"}
                                `}
                aria-labelledby={createId("tab", tab.id)}
                role="tabpanel"
                id={createId("panel", tab.id)}
                aria-hidden={!isActiveTab(tab.id)}
                key={tab.id}
              >
                {tab.content}
              </article>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
