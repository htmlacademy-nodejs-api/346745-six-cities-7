import {UserType} from '../../../types/user-type.enum.js';

export type TokenPayload = {
  email: string;
  name: string;
  userType: UserType
  id: string;
};
