import i18next from 'i18next';

import { useQuery } from '@tanstack/react-query';

import { setupAxios } from '../../../libs/axios/setupAxios';
import { IUserQueryResponse } from '../../../types/homeTypes';
import { IApiResponse, IUser } from '../../../types/universalTypes';
import { mapUserApiResponseToQueryResponse } from '../../../utils/dataMappers';

const getUserNameWithUserId = async (
  id: number | undefined,
): Promise<IUserQueryResponse> => {
  let response: IApiResponse<IUser>;

  const { t } = i18next;

  try {
    response = await setupAxios({
      method: 'get',
      url: `users/${id}`,
    });
  } catch (error) {
    throw new Error(t('errors.somethingWentWrong'));
  }

  const transformedResponseData = mapUserApiResponseToQueryResponse(
    response.data,
  );

  return transformedResponseData;
};

const useGetUserNameWithUserIdQuery = (id: number | undefined) => {
  return useQuery({
    queryKey: [`user${id}`],
    queryFn: () => getUserNameWithUserId(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export default useGetUserNameWithUserIdQuery;
