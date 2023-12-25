import i18next from 'i18next';

import { useQuery } from '@tanstack/react-query';

import { setupAxios } from '../../../libs/axios/setupAxios';
import { IPostQueryResponse } from '../../../types/homeTypes';
import { IApiResponse, IPost } from '../../../types/universalTypes';

const getPostWithPostId = async (
  id: number | null,
): Promise<IPostQueryResponse> => {
  let response: IApiResponse<IPost>;

  const { t } = i18next;

  try {
    response = await setupAxios({
      method: 'get',
      url: `posts/${id}`,
    });
  } catch (error) {
    throw new Error(t('errors.somethingWentWrong'));
  }

  return response.data;
};

const useGetPostWithPostIdQuery = (id: number | null) => {
  return useQuery({
    queryKey: [`post${id}`],
    queryFn: () => getPostWithPostId(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export default useGetPostWithPostIdQuery;
