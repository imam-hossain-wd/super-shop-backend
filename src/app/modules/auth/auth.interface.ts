/* eslint-disable no-unused-vars */

import { Model } from "mongoose";


export type IUser = {
    _id?:string;
    password: string;
    name: string;
    email: string;
    role?:string
};

export type ILogInUser = {
    email:string;
    password:string
}
export type ILoginUserResponse = {
    accessToken: string;
    refreshToken?: string;
};

export type IRefreshTokenResponse = {
    accessToken: string;
  };
  
  

export type UserModel = {isUserExist( email: string ): Promise<Pick<IUser, '_id' | 'password' | 'email'| 'role' >>;
isPasswordMatched(
  givenPassword: string,
  savedPassword: string
): Promise<boolean>;
} & Model<IUser>;