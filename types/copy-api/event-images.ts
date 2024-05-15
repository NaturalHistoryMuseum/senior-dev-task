export interface ICopyImages {
  imageList: {
    items: ICopyImage[];
  };
}

export interface ICopyImage {
  image?: {
    _path: string;
    _publishUrl: string;
    width: number;
    height: number;
    __typename: "ImageRef";
  };
  image_alt: string;
  _path: string;
  __typename: "ImageModel";
}
