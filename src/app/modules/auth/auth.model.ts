/* eslint-disable @typescript-eslint/no-this-alias */
import  bcrypt  from 'bcrypt';
import { Schema, model } from 'mongoose';
import { IUser } from './auth.interface';
import config from '../../../config';



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

userSchema.pre('save', async function (next) {
    const user = this;
  
    if (user.isModified('password') || user.isNew) {
      user.password = await bcrypt.hash(
        user.password,
        Number(config.bycrypt_salt_rounds)
      );
    }
    next();
  });

export const User = model<IUser>('User', userSchema);
