/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser } from './auth.interface';



const userSchema = new Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
      unique: true,

    },
    name: {
        type: String,
        required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
