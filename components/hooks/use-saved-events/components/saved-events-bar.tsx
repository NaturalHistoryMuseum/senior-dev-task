import HeartIcon from "@/components/base/icons/Heart";
import ChevronIcon from "@/components/base/icons/Chevron";
import { IEvent } from "@/types/events-api/ticketed-and-non-ticketed-events";

interface ISavedEventsBar {
  toggleOpen: () => void;
  isOpen: boolean;
  savedEvents: IEvent[];
  className?: string;
}

/**
 * Saved Events Bar
 * This is the bar that persists on the page that the user can click to show the events they have saved.
 * @returns
 */
const SavedEventsBar = ({
  toggleOpen,
  isOpen,
  savedEvents,
  className,
}: ISavedEventsBar) => {
  return (
    <header
      data-theme="night-blue"
      className={`z-10 w-full max-w-[100%] py-xs ${className}`}
    >
      <button
        className="text-white wrapper repel border-none bg-[transparent] w-full"
        onClick={(e) => {
          toggleOpen();
        }}
        aria-expanded={isOpen}
        aria-label={
          isOpen ? "Close saved events panel" : "Open saved events panel"
        }
      >
        <div className="cluster" data-cluster-align-center>
          <HeartIcon width="25" height="22" fillOnly={!!savedEvents.length} />
          <span className="text-step-0 font-semibold">
            Saved Events ( {savedEvents.length} )
          </span>
        </div>

        {!!savedEvents.length && (
          <span className="pointer-events-none">
            {!isOpen ? <ChevronIcon direction="down" /> : "Close"}
          </span>
        )}
      </button>
    </header>
  );
};

export default SavedEventsBar;
