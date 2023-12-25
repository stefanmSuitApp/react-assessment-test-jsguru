import { IUserQueryResponse } from '../types/homeTypes';
import { IUser } from '../types/universalTypes';

export const mapUserApiResponseToQueryResponse = ({
  id,
  name,
}: IUser): IUserQueryResponse => {
  return {
    id,
    name,
  };
};
