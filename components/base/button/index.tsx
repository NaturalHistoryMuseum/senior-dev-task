import Link from "next/link";
import styles from "./Button.module.css";
import Chevron from "@/icons/Chevron";
import ExternalLink from "@/icons/ExternalLink";

type CommonProps = {
  chevronDirection?: "right" | "left" | "up" | "down";
  className?: string;
  theme?: "primary" | "light" | "grey" | "secondary-dark" | "secondary-light";
  hideChevron?: boolean;
  buttonText: string;
  textAlign?: "left" | "center" | "right";
};

type IButton =
  // If the button is a link, use these props
  | ({
      as: "a";
      link: string;
      openLinkInNewTab?: boolean;
    } & CommonProps)
  // If the button is a button, use these props
  | ({
      as: "button";
      onClick?: () => void;
      type?: "button" | "submit";
      ariaLabel: string;
    } & CommonProps);

export const Button = ({
  theme = "primary",
  className,
  chevronDirection = "right",
  hideChevron,
  buttonText,
  textAlign = "center",
  ...props
}: IButton): JSX.Element => {
  if (props.as === "button") {
    const { onClick, type, ariaLabel } = props;
    return (
      <button
        onClick={onClick}
        className={`px-s py-xs ${styles.button} ${className}`}
        data-theme={theme}
        data-text-align={textAlign}
        type={type}
        aria-label={ariaLabel}
      >
        {buttonText}
        {!hideChevron && <Chevron direction={chevronDirection} />}
      </button>
    );
  }
  if (props.as === "a" && props.link && buttonText) {
    const { link, openLinkInNewTab = false } = props;
    return (
      // The wrapping div is required to ensure buttons are displayed on their own row
      <div>
        <Link href={link} passHref>
          <a
            target={openLinkInNewTab ? "_blank" : ""}
            className={`px-s py-xs w-full ${styles.button} ${className}`}
            data-theme={theme}
            data-text-align={textAlign}
          >
            {buttonText}
            {openLinkInNewTab ? (
              <ExternalLink />
            ) : (
              <Chevron direction={chevronDirection} />
            )}
          </a>
        </Link>
      </div>
    );
  }
  return <></>;
};
