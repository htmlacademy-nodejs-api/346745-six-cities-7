import { readFileSync } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import { TOffer, TUser } from '../../types/index.js';
import { Amenities, City, HouseType } from '../../types/offer-type.enum.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  private validateRawData(): void {
    if (! this.rawData) {
      throw new Error('File was not read');
    }
  }

  private parseRawDataToOffers(): TOffer[] {
    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => this.parseLineToOffer(line));
  }

  private parseLineToOffer(line: string): TOffer {
    const [
      title,
      description,
      createdDate,
      city,
      previewPath,
      imageHouse,
      premium,
      favorites,
      rating,
      typeHouse,
      room,
      guests,
      price,
      amenities,
      name,
      email,
      avatarPath,
      password,
      userType,
      latitude,
      longitude
    ] = line.split('\t');

    return {
      title,
      description,
      postDate: new Date(createdDate),
      city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
      previewPath,
      imageHouse,
      premium: premium === 'false',
      favorites: favorites === 'false',
      rating: this.parsePrice(rating),
      typeHouse: typeHouse as HouseType,
      room: this.parsePrice(room),
      guests: this.parsePrice(guests),
      price: this.parsePrice(price),
      amenities: amenities as Amenities,
      user: this.parseUser(name, email, avatarPath, password, userType),
      coordinates: {latitude: this.parsePrice(latitude), longitude: this.parsePrice(longitude)}
    };
  }

  private parsePrice(priceString: string): number {
    return Number.parseInt(priceString, 10);
  }

  private parseUser(name: string, email: string, avatarPath: string, password: string, userType: string): TUser {
    return { name, email, avatarPath, password, userType };
  }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): TOffer[] {
    this.validateRawData();
    return this.parseRawDataToOffers();
  }
}
