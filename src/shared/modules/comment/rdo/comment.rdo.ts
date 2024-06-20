import { Expose, Type } from 'class-transformer';

import { UserRdo } from '../../user/rdo/user.rdo.js';
import { OfferRdo } from '../../offer/index.js';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public text: string;

  @Expose({ name: 'createdAt'})
  public publicationDate: string;

  @Expose()
  public rating: number;

  @Expose({ name: 'offerId'})
  @Type(() => OfferRdo)
  public offerId: OfferRdo;

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public user: UserRdo;
}
