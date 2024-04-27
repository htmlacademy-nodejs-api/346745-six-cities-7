import { TUser } from './user.type.js';
import { Amenities, City, HouseType } from './offer-type.enum.js';

export type TCoordinates = {
  latitude: number;
  longitude: number;
};


export type TOffer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  previewPath: string;
  imageHouse: string;
  premium: boolean;
  favorites: boolean;
  rating: number;
  typeHouse: HouseType;
  room: number;
  guests: number;
  price: number;
  amenities: Amenities;
  user: TUser;
  coordinates: TCoordinates;
}
