import React, { FC } from "react"
import { NHMDesktopFooter } from "@/components/base/icons/logos/NHMDesktopFooter";
import { NHMMobileFooter } from "@/components/base/icons/logos/NHMMobileFooter";

const FooterLink: FC<{ href: string; children?: React.ReactNode }> = ({
  children,
  href,
}) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white no-underline hover:text-white focus-visible:outline-lime-green-500 focus-visible:no-underline"
      >
        {children}
      </a>
    </li>
  )
}

export const Footer: FC = () => {

  return (
    <footer
      className="bg-night-blue-900 text-white font-text text-step-0 leading-[140%]"
      data-gtm-component="Footer"
    >
      <section className="px-s-m py-xl-3xl max-w-page mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-l-2xl mr-3xl max-w-full w-full md:w-auto flex">
            <a
              href="https://www.nhm.ac.uk"
              className="focus-visible:outline-lime-green-500"
            >
              <span className="sr-only">Natural History Museum logo</span>
              <NHMMobileFooter
                classNames="block w-full md:hidden"
                aria-hidden="true"
              />
              <NHMDesktopFooter
                classNames="hidden md:block"
                aria-hidden="true"
              />
            </a>
          </div>
          <div>
            <ul className="flex flex-col flex-wrap md:flex-row gap-xs md:gap-x-l md:gap-y-s">
              <FooterLink href="https://www.nhm.ac.uk/contact-us.html">
                Contact us
              </FooterLink>
              <FooterLink href="https://www.nhm.ac.uk/about-us/privacy-notice.html">
                Privacy notice
              </FooterLink>
              <FooterLink href="https://www.nhm.ac.uk/about-us/ticketing-terms-and-conditions-of-sale.html">
                Terms &amp; conditions
              </FooterLink>
              <FooterLink href="https://www.nhm.ac.uk/content/dam/nhmwww/about-us/governance/policies-and-procedures/modern-slavery-statement.pdf">
                Human Slavery Statement
              </FooterLink>
              <FooterLink href="https://www.nhm.ac.uk/about-us/website-accessibility-statement.html">
                Website Accessibility Statement
              </FooterLink>
            </ul>
          </div>
        </div>

        <span className="block mt-l-2xl">
          &copy; The Trustees of The Natural History Museum, London
        </span>
      </section>
    </footer>
  );
};
