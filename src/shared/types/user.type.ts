import {UserType} from './user-type.enum.js';

export type TUser = {
  name: string;
  email: string;
  avatarPath: string;
  password: string;
  userType: UserType
}
