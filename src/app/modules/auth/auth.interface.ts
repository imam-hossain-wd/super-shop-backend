
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