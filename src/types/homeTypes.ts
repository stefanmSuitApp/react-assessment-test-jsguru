import { IComment, IPost, IUser } from './universalTypes';

export interface IPostQueryParams {
  _page?: number;
  userIds?: number[] | null;
}

export interface IPostQueryResponse extends IPost {}

export interface IDisplayPost extends IPost {
  author: string;
}

export interface IUserQueryResponse
  extends Omit<
    IUser,
    'username' | 'email' | 'address' | 'phone' | 'website' | 'company'
  > {}

export interface ICommentQueryResponse extends IComment {}
