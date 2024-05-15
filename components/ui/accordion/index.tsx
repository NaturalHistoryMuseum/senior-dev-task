import ChevronIcon from "@/components/base/icons/Chevron";
import { useRef, useState } from "react";
import styles from "./Accordion.module.css";
interface IAccordion {
  title: string;
  children: React.ReactNode;
}
export const Accordion = ({ title, children }: IAccordion) => {
  return (
    <details className={`flow ${styles.accordion}`}>
      <summary className="cluster gutter-m p-s cursor-[pointer]">
        <ChevronIcon className="accordion-icon" direction="down" />
        {title}
      </summary>
      {children}
    </details>
  );
};
