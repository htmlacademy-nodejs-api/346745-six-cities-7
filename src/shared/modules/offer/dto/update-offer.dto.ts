import { Amenities, City, HouseType } from '../../../types/offer-type.enum.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsMongoId, IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';
import { TCoordinates } from '../../../types/offer.type.js';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title: string;

  @IsOptional()
  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description: string;

  @IsOptional()
  @IsDateString({}, { message: CreateOfferValidationMessage.postDate.invalidFormat })
  public postDate: Date;

  @IsOptional()
  @IsEnum(City, { message: CreateOfferValidationMessage.city.invalid })
  public city: City;

  @IsOptional()
  @MaxLength(256, { message: CreateOfferValidationMessage.previewPath.maxLength })
  public previewPath: string;

  // @IsArray({ message: CreateOfferValidationMessage.imageHouse.invalid })
  // @ValidateNested({ each: true })
  public imageHouse: string[];

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.premium.invalid})
  public premium: boolean;

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.favorites.invalid})
  public favorites: boolean;

  @IsOptional()
  @Min(1, { message: CreateOfferValidationMessage.rating.minValue })
  @Max(5, { message: CreateOfferValidationMessage.rating.maxValue })
  public rating: number;

  @IsOptional()
  @IsEnum(HouseType, { message: CreateOfferValidationMessage.typeHouse.invalid })
  public typeHouse: HouseType;

  @IsOptional()
  @IsInt({ message: CreateOfferValidationMessage.room.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.room.minValue })
  @Max(8, { message: CreateOfferValidationMessage.room.maxValue })
  public room: number;


  @IsOptional()
  @IsInt({ message: CreateOfferValidationMessage.guests.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.guests.minValue })
  @Max(10, { message: CreateOfferValidationMessage.guests.maxValue })
  public guests: number;

  @IsOptional()
  @IsInt({ message: CreateOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(100000, { message: CreateOfferValidationMessage.price.maxValue })
  public price: number;

  // @IsArray({ message: CreateOfferValidationMessage.amenities.invalidFormat })
  public amenities: Amenities;

  @IsOptional()
  @IsMongoId({ message: CreateOfferValidationMessage.userId.invalidId })
  public userId: string;

  public coordinates: TCoordinates;
}
