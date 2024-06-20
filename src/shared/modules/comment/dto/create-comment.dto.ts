import {CreateCommentMessages} from './create-comment.messages.js';
import {IsDateString, IsMongoId, IsString, Length, Max, Min} from 'class-validator';

export class CreateCommentDto {
  @IsString({message: CreateCommentMessages.text.invalidFormat})
  @Length(5, 1024, {message: 'min is 5, max is 1024 '})
  public text: string;

  @IsDateString({}, {message: CreateCommentMessages.date.invalidFormat})
  public publicationDate?: Date;


  @Min(1, { message: CreateCommentMessages.rating.minValue })
  @Max(5, { message: CreateCommentMessages.rating.maxValue })
  public rating: number;

  @IsMongoId({message: CreateCommentMessages.offerId.invalidFormat})
  public offerId: string;

  public userId: string;
}
