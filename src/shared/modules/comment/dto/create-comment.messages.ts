export const CreateCommentMessages = {
  text: {
    invalidFormat: 'text is required',
    lengthField: 'min length is 5, max is 2024'
  },
  date: {
    invalidFormat: 'offerId field must be a valid id'
  },
  rating: {
    invalidFormat: 'Rating must be an integer',
    minValue: 'Minimum price is 1',
    maxValue: 'Maximum price is 5',
  },
  offerId: {
    invalidFormat: 'offerId field must be a valid id'
  },
  userId: {
    invalidFormat: 'userId field must be a valid id'
  },
} as const;
