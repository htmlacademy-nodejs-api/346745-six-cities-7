import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import {Amenities, City, HouseType} from '../../../types/offer-type.enum.js';
import {TCoordinates} from '../../../types/offer.type.js';

export class OfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public postDate: string;

  @Expose()
  public city: City;

  @Expose()
  public previewPath: string;

  @Expose()
  public imageHouse: string;

  @Expose()
  public premium: boolean;

  @Expose()
  public favorites: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public typeHouse: HouseType;

  @Expose()
  public room: number;

  @Expose()
  public guests: number;

  @Expose()
  public price: number;

  @Expose()
  public amenities: Amenities;

  @Expose()
  public commentCount: number;

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public user: UserRdo;

  @Expose()
  public coordinates: TCoordinates;

}
