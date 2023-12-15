/* eslint-disable no-unused-vars */


export type IUser = {
    _id?:string;
    password: string;
    name: string;
    email: string;
};

export type ILogInUser = {
    email:string;
    password:string
}

// export type UserModel = {isUserExist( email: string ): Promise<Pick<IUser, '_id' | 'password' | 'email' >>;
// isPasswordMatched(
//   givenPassword: string,
//   savedPassword: string
// ): Promise<boolean>;
// } & Model<IUser>;