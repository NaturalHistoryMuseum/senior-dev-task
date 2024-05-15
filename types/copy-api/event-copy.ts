/** Single event copy summary as returned from the Copy API */
export interface ICopySummary {
  _path?: string;
  /** Event Title provided by the Copy API. If provided should overwrite the title from the Events API */
  eventName?: string;
  /** The event description provided by the Copy API. If provided should overwrite the title from the Events API */
  text?: {
    html: string;
    __typename: "MultiFormatString";
  };
  price?: string;
  membersPrice?: string;
  age18Only?: boolean;
  /** Link to the events event page */
  link?: string;
  /** List of tags applied to this event by content editors. Users can filter visible events by tags. */
  primaryTags?: string[] | null;
  imagePath?: ICopyImage | null;
  imageAltText?: string | null;
}

/** Single Image object as returned from the Copy API */
export interface ICopyImage {
  /** Height of the image */
  height: number;
  /** Width of the image */
  width: number;
  /** The relative path of the image. e.g. `/content/dam/nhm-events/GENAD-ADM/image.jpg`. Domain name must be prepended. */
  _path: string;
}

/**Data as returned from the Copy API**/
export interface ICopySummaryList {
  eventList: {
    items: ICopySummary[];
    __typename: "EventCardModelResults";
  };
}
