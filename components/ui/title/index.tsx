import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/images/title.jpeg";

export type ITitle = {
  /** the main title that has a large H1 heading */
  heading: string;
  /** the description that sits on the right of the block  */
  text?: string;
};

export const Title = ({ heading, text }: ITitle) => {
  return (
    <div data-theme="off-white">
      <div className="max-w-page mx-auto px-s-m py-l-2xl">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-12 md:col-span-8 md:mr-xl">
              <h1 className="text-step-5 font-headline font-bold leading-none">
                {heading}
              </h1>
            </div>
            {text && (
              <div className="col-span-12 md:col-span-4 mt-s-m md:mt-0">
                <p
                  className="text-step-1 md:border-l-2 md:border-l-grey-400 md:pl-s-m"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Image priority src={backgroundImage} alt="" layout="responsive" />
    </div>
  );
};
