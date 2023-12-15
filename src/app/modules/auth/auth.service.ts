// import httpStatus from "http-status";
// import ApiError from "../../../errors/ApiError";
import { IUser } from "./auth.interface";
import { User } from "./auth.model";


const insertIntoDB = async (user: IUser): Promise<IUser | null> => {
    const createdUser = await User.create(user);
    return createdUser;
  };

// const logInUser = async(userdata: ILogInUser): Promise<IUser | null> => {
//     const {email, password}= userdata;

//     const isUserExit= await User.findOne({email:email});

//     if (!isUserExit) {
//       throw new ApiError(httpStatus.NOT_FOUND, 'user is not found');
//     }

//     if (password) {
//       password = await bcrypt.hash(data.password, Number(config.bcrypt_salt_rounds));
//     }
//     const result = await User.findOneAndUpdate({ _id:user._id }, data, {
//       new: true,
//     });
//     return result;
// }

  export const authService = {
    insertIntoDB
  }