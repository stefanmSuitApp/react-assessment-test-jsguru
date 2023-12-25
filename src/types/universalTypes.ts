import { AxiosHeaders } from 'axios';

export interface IPageProps {
  pageLabel: string;
}

export interface INavItem {
  name: string;
  path: string;
}

export interface IApiResponse<T> {
  data: T;
  status: number;
  headers: Partial<AxiosHeaders>;
}

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface IPhoto {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export interface ISpinnerProps {
  $size: number;
  $color: string;
  $borderSize: number;
  $speed: number;
}
