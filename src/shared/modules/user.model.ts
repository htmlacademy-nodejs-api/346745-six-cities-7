import {Schema, Document, model} from 'mongoose';
import {TUser} from '../types/index.js';

export interface UserDocument extends TUser, Document {
  createdAt: Date,
  updatedAt: Date,
}

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
    required: true,
  },
  avatarPath: {
    minlength: [5, 'Min length for avatar path is 5'],
  },
  name: {
    required: true,
    minlength: [1, 'Min length for name is 1'],
    maxLength: 15
  },
  password: {
    required: true,
    minlength: [6, 'Min length for password is 6'],
    maxLength: 12
  },
  userType: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export const UserModel = model<UserDocument>('User', userSchema);
