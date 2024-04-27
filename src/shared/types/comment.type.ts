import {User} from './user.type.js';

export interface IComment {
  text: string;
  publicationDate?: Date;
  rating: number;
  author: User;
}
