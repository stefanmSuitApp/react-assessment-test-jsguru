import i18next from 'i18next';

import { useQuery } from '@tanstack/react-query';

import { setupAxios } from '../../../libs/axios/setupAxios';
import { IApiResponse } from '../../../types/universalTypes';
import { ICommentQueryResponse } from '../../../types/homeTypes';

const getCommentsWithPostId = async (
  id: number | undefined,
): Promise<ICommentQueryResponse[]> => {
  let response: IApiResponse<ICommentQueryResponse[]>;

  const { t } = i18next;

  try {
    response = await setupAxios({
      method: 'get',
      url: `posts/${id}/comments`,
    });
  } catch (error) {
    throw new Error(t('errors.somethingWentWrong'));
  }

  return response.data;
};

const useGetCommentsWithPostIdQuery = (id: number | undefined) => {
  return useQuery({
    queryKey: [`comments${id}`],
    queryFn: () => getCommentsWithPostId(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export default useGetCommentsWithPostIdQuery;
