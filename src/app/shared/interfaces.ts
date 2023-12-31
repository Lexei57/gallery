export interface Urls {
  raw: string
  full: string
  regular: string
  thumb: string
  small: string
  small_s3: string
}

export interface IImage  {
  id: string
  urls: Urls
  description: string
  cover_photo: IImage
}

export interface IImageListResponse {
  results: IImage[];
}

export interface IImageDetailResponse {
  id: string;
  description: string | null;
  tags: ({ title: string } & Iterable<any>) | undefined | null;
  likes: number;
  urls: Urls;
  user: {
    name: string
  };
}
