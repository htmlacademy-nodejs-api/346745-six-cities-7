import { Amenities, City, HouseType } from '../../../types/offer-type.enum.js';
import {TCoordinates} from '../../../types/offer.type.js';
// import { TCoordinates } from '../../../types/offer.type.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: City;
  public previewPath: string;
  public imageHouse: string;
  public premium: boolean;
  public favorites: boolean;
  public rating: number;
  public typeHouse: HouseType;
  public room: number;
  public guests: number;
  public price: number;
  public amenities: Amenities;
  public userId: string;
  public coordinates: TCoordinates;
}
