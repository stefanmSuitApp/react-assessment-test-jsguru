import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const URL_ROOT = `${import.meta.env.VITE_APP_BASE_URL}${
  import.meta.env.VITE_APP_BASE_PORT
    ? ':' + import.meta.env.VITE_APP_BASE_PORT
    : ''
}`;

export const api = axios.create({
  baseURL: URL_ROOT,
});

export const setupAxios = ({
  method,
  url,
  data,
  params,
  headers,
}: AxiosRequestConfig): Promise<AxiosResponse<any, any>> => {
  return api({
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(headers && headers),
    },
    data: data,
    params: params,
  });
};
