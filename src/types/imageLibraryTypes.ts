import { IPhoto } from './universalTypes';

export interface IPhotoQueryParams {
  _page?: number;
  _limit?: number;
}

export interface IPhotosQueryResponse {
  data: IPhoto[];
  totalCount: number;
}
