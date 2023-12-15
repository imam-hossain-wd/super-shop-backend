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


//before saving user password hashing

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


  //check user exit function
  userSchema.statics.isUserExist = async function (
    email: string
  ): Promise<IUser | null> {
    return await User.findOne(
      { email },
      { _id: 1, password: 1, role: 1, email: 1 }
    );
  };


  // check  password match function

  userSchema.statics.isPasswordMatched = async function (
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(givenPassword, savedPassword);
  };
  


export const User = model<IUser>('User', userSchema);
