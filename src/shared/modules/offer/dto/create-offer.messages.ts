export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  postDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  city: {
    invalid: 'type must be once of list cities',
  },
  previewPath: {
    invalidFormat: 'image is required',
    maxLength: 'too long for field image. Maximum length is 256'
  },
  imageHouse: {
    invalid: 'Too short for field «imageHouse»',
  },
  premium: {
    invalid: 'premium must be boolean',
  },
  favorites: {
    invalid: 'favorites must be boolean',
  },
  rating: {
    invalidFormat: 'Rating must be an integer',
    minValue: 'Minimum price is 1',
    maxValue: 'Maximum price is 5',
  },
  typeHouse: {
    invalid: 'type must be Apartment, House, Room or Hotel',
  },
  room: {
    invalidFormat: 'Room must be an integer',
    minValue: 'Minimum price is 1',
    maxValue: 'Maximum price is 8',
  },
  guests: {
    invalidFormat: 'Guests must be an integer',
    minValue: 'Minimum price is 1',
    maxValue: 'Maximum price is 10',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  amenities: {
    invalidFormat: 'Field amenities must be an array',
  },
  userId: {
    invalidId: 'userId field must be a valid id',
  },
  coordinates: {
    invalidId: 'coordinates field must be a number',
  }
} as const;
