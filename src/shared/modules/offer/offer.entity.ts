import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref
} from '@typegoose/typegoose';
import { UserEntity } from '../user/index.js';
import { Amenities, City, HouseType } from '../../types/offer-type.enum.js';
import {TCoordinates} from '../../types/offer.type.js';
// import { TCoordinates } from '../../types/offer.type.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {
}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    minlength: [10, ''],
    maxlength: [200, '']
  })
  public title!: string;

  @prop({
    trim: true,
    required: true,
    minlength: [20, ''],
    maxlength: [1024, '']
  })
  public description!: string;

  @prop()
  public postDate!: Date;

  @prop({
    required: true,
    enum: () => City,
  })

  public city!: City;

  @prop()
  public previewPath!: string;

  @prop()
  public imageHouse!: string;

  @prop()
  public premium!: boolean;

  @prop()
  public favorites!: boolean;

  @prop({
    required: true,
    min: 1,
    max: 5
  })
  public rating!: number;

  @prop({
    type: () => String,
    enum: HouseType
  })

  public typeHouse!: HouseType;

  @prop({
    required: true,
    min: 1,
    max: 8
  })
  public room!: number;

  @prop({
    required: true,
    min: 1,
    max: 10
  })
  public guests!: number;

  @prop({
    required: true,
    min: 100,
    max: 100000
  })
  public price!: number;

  @prop({
    type: () => String,
    enum: Amenities
  })
  public amenities!: Amenities;

  @prop({default: 0})
  public commentCount!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop()
  public coordinates!: TCoordinates;

  @prop({ default: 0 })
  public ratingSum!: number;

  @prop({ default: 0 })
  public ratingCount!: number;
}

export const OfferModel = getModelForClass(OfferEntity);
