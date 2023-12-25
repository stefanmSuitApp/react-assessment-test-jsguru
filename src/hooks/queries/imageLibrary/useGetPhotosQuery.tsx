import i18next from 'i18next';

import { useQuery } from '@tanstack/react-query';

import { setupAxios } from '../../../libs/axios/setupAxios';
import { IApiResponse, IPhoto } from '../../../types/universalTypes';
import {
  IPhotoQueryParams,
  IPhotosQueryResponse,
} from '../../../types/imageLibraryTypes';

const getPhotos = async ({
  _limit = 25,
  _page = 1,
}: IPhotoQueryParams): Promise<IPhotosQueryResponse> => {
  let response: IApiResponse<IPhoto[]>;

  const { t } = i18next;

  try {
    response = await setupAxios({
      method: 'get',
      url: 'photos',
      params: {
        _limit,
        _page,
      },
    });
  } catch (error) {
    throw new Error(t('errors.somethingWentWrong'));
  }

  return {
    data: response.data,
    totalCount: Number(response.headers['x-total-count']),
  };
};

const useGetPhotosQuery = (queryParams: IPhotoQueryParams) => {
  return useQuery({
    queryKey: ['photos', queryParams],
    queryFn: () => getPhotos(queryParams),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetPhotosQuery;
