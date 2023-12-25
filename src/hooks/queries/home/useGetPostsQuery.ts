import i18next from 'i18next';

import { useInfiniteQuery } from '@tanstack/react-query';

import { setupAxios } from '../../../libs/axios/setupAxios';
import { IApiResponse, IPost } from '../../../types/universalTypes';
import { IPostQueryResponse, IPostQueryParams } from '../../../types/homeTypes';

const getPosts = async ({
  userIds,
  _page,
}: IPostQueryParams): Promise<IPostQueryResponse[]> => {
  let response: IApiResponse<IPost[]>;
  const { t } = i18next;

  try {
    response = await setupAxios({
      method: 'get',
      url: 'posts',
      params: {
        userId: userIds,
        _page,
      },
    });
  } catch (error) {
    throw new Error(t('errors.somethingWentWrong'));
  }

  return response?.data;
};

const useGetPostsQuery = ({ _page, userIds }: IPostQueryParams) => {
  return useInfiniteQuery({
    queryKey: ['posts', { _page, userIds }],
    queryFn: ({ pageParam: _page }) => getPosts({ _page, userIds }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialPageParam: 0,
  });
};

export default useGetPostsQuery;
