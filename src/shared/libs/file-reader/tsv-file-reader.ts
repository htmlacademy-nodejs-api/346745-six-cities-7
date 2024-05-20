import EventEmitter from 'node:events';
import { createReadStream } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import { TOffer, TUser } from '../../types/index.js';
import { Amenities, City, HouseType } from '../../types/offer-type.enum.js';

export class TSVFileReader extends EventEmitter implements FileReader {
  private CHUNK_SIZE = 16384; // 16KB

  constructor(
    private readonly filename: string
  ) {
    super();
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
      premium: this.parseBoolean(premium),
      favorites: this.parseBoolean(favorites),
      rating: this.parsePrice(rating),
      typeHouse: HouseType[typeHouse as 'Apartment' | 'House' | 'Room' | 'Hotel'],
      room: this.parsePrice(room),
      guests: this.parsePrice(guests),
      price: this.parsePrice(price),
      amenities: Amenities[amenities as 'Breakfast' | 'AirConditioning' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge'],
      user: this.parseUser(name, email, avatarPath, password, userType),
      coordinates: {latitude: Number(latitude), longitude: Number(longitude)}
    };
  }

  private parsePrice(priceString: string): number {
    return Number.parseInt(priceString, 10);
  }

  private parseBoolean(value: string): boolean {
    return value === 'true';
  }

  private parseUser(name: string, email: string, avatarPath: string, password: string, userType: string): TUser {
    return { name, email, avatarPath, password, userType };
  }

  public async read(): Promise<void> {
    const readStream = createReadStream(this.filename, {
      highWaterMark: this.CHUNK_SIZE,
      encoding: 'utf-8',
    });

    let remainingData = '';
    let nextLinePosition = -1;
    let importedRowCount = 0;

    for await (const chunk of readStream) {
      remainingData += chunk.toString();

      while ((nextLinePosition = remainingData.indexOf('\n')) >= 0) {
        const completeRow = remainingData.slice(0, nextLinePosition + 1);
        remainingData = remainingData.slice(++nextLinePosition);
        importedRowCount++;

        const parsedOffer = this.parseLineToOffer(completeRow);
        await new Promise((resolve) => {
          this.emit('line', parsedOffer, resolve);
        });
      }
    }
    this.emit('end', importedRowCount);
  }
}
