import httpStatus from "http-status";
import { ILogInUser, ILoginUserResponse, IRefreshTokenResponse, IUser } from "./auth.interface";
import { User } from "./auth.model";
import ApiError from "../../../errors/ApiError";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { Secret } from "jsonwebtoken";


const insertIntoDB = async (user: IUser): Promise<IUser | null> => {
    const createdUser = await User.create(user);
    return createdUser;
  };

const logInUser = async(userData: ILogInUser):Promise<ILoginUserResponse> => {

    const isUserExist = await User.isUserExist(userData.email) 
    if (!isUserExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'user is not found');
    }

    if (
        isUserExist.password &&
        !(await User.isPasswordMatched(userData.password, isUserExist.password))
      ) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
      }

      const {_id, role}= isUserExist;

      const accessToken = jwtHelpers.createToken(
        { _id, role},
        config.jwt.secret as Secret,
        config.jwt.expires_in as string
      );
    
      const refreshToken = jwtHelpers.createToken(
        { _id, role },
        config.jwt.refresh_secret as Secret,
        config.jwt.refresh_expires_in as string
      );
    
      return {
        accessToken,
        refreshToken,
      };  
}

const refreshToken = async (token: string):Promise<IRefreshTokenResponse> => {
    let verifiedToken = null;
    try {
      verifiedToken = jwtHelpers.verifyToken(
        token,
        config.jwt.refresh_secret as Secret
      );
    } catch (err) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
    }
    const { _id } = verifiedToken;
    
    const isUserExist = await User.findOne({ _id})
    if (!isUserExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
    }
  
    const newAccessToken = jwtHelpers.createToken(
      {
        id: isUserExist._id,
        role: isUserExist.role,
      },
      config.jwt.secret as Secret,
      config.jwt.expires_in as string
    );
  
    return {
      accessToken: newAccessToken,
    };
  };

  export const authService = {
    insertIntoDB,
    logInUser,
    refreshToken
  }