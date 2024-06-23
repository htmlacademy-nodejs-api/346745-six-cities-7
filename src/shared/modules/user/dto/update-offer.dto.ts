import {UserType} from '../../../types/user-type.enum.js';

export class UpdateUserDto {
  public avatarPath?: string;
  public name?: string;
  public userType?: UserType;
}
