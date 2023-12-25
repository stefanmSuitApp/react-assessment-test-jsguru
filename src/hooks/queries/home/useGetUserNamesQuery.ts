import i18next from 'i18next';

import { useQuery } from '@tanstack/react-query';

import { setupAxios } from '../../../libs/axios/setupAxios';
import { IUserQueryResponse } from '../../../types/homeTypes';
import { mapUserApiResponseToQueryResponse } from '../../../utils/dataMappers';
import { IApiResponse, IUser } from '../../../types/universalTypes';

const getUserNames = async (): Promise<IUserQueryResponse[]> => {
  let response: IApiResponse<IUser[]>;

  const { t } = i18next;

  try {
    response = await setupAxios({
      method: 'get',
      url: 'users',
    });
  } catch (error) {
    throw new Error(t('errors.somethingWentWrong'));
  }

  const transformedResponseData = response?.data.map((user) =>
    mapUserApiResponseToQueryResponse(user),
  );

  return transformedResponseData;
};

const useGetUserNamesQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUserNames(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetUserNamesQuery;
