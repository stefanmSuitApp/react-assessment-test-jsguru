import {
  IDisplayPost,
  IPostQueryResponse,
  IUserQueryResponse,
} from '../../types/homeTypes';

export const mapPostsToPostsWithAuthors = (
  posts: IPostQueryResponse[] | undefined,
  users: IUserQueryResponse[] | undefined,
): IDisplayPost[] | IPostQueryResponse[] => {
  const usersMap: Record<number, string> = {};
  if (posts && posts.length > 0) {
    if (users && users.length > 0) {
      users.forEach((user) => {
        usersMap[user.id] = user.name;
      });
      const postsWithAuthors = posts.map((post) => ({
        ...post,
        author: usersMap[post.userId],
      }));

      return postsWithAuthors;
    }

    return posts;
  }

  return [];
};

export const mapPostToPostWithAuthor = (
  post: IPostQueryResponse | undefined,
  user: IUserQueryResponse | undefined,
): IDisplayPost | IPostQueryResponse | null => {
  if (post) {
    if (user) {
      const postWithAuthor = {
        ...post,
        author: user.name,
      };

      return postWithAuthor;
    }

    return post;
  }
  return null;
};

export const getUserIdWithAuthorName = (
  users: IUserQueryResponse[] | undefined,
  search: string,
): number[] | null => {
  if (users && users.length > 0 && search) {
    let userIds: number[] = [];
    for (const user of users) {
      if (user.name.toLowerCase().includes(search.toLowerCase())) {
        userIds.push(user.id);
      }
    }
    return userIds.length > 0 ? userIds : [-1];
  }

  return null;
};
