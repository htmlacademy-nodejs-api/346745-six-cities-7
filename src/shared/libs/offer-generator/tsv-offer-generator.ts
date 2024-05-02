import dayjs from 'dayjs';
import { TMockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem, generateRandomCoords, getRandomBoolean } from '../../helpers/index.js';
import { Amenities, City, HouseType } from '../../types/offer-type.enum.js';
import { UserType } from '../../types/user-type.enum.js';
import { IOfferGenerator } from './index.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const MIN_RATING = 0;
const MAX_RATING = 5;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements IOfferGenerator {
  constructor(private readonly mockData: TMockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem(Object.values(City));
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const previewPath = getRandomItem<string>(this.mockData.previewPaths);
    const imageHouses = getRandomItem<string>(this.mockData.imageHouses);
    const premium = getRandomBoolean();
    const favorites = getRandomBoolean();
    const houseType = getRandomItem(Object.values(HouseType));
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const room = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const guests = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const amenities = getRandomItem(Object.values(Amenities));
    const name = getRandomItem(this.mockData.users);
    const email = getRandomItem(this.mockData.emails);
    const avatar = getRandomItem(this.mockData.avatars);
    const password = getRandomItem(this.mockData.passwords);
    const userType = getRandomItem(Object.values(UserType));
    const latitude = generateRandomCoords(MIN_RATING, MAX_RATING);
    const longitude = generateRandomCoords(MIN_RATING, MAX_RATING);
    const coordinates = {latitude, longitude};

    return [
      title,
      description,
      postDate,
      city,
      previewPath,
      imageHouses,
      premium,
      favorites,
      rating,
      houseType,
      room,
      guests,
      price,
      amenities,
      name,
      email,
      avatar,
      password,
      userType,
      coordinates.latitude,
      coordinates.longitude
    ].join('\t');
  }
}
