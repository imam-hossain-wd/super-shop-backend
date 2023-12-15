import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IUser } from './auth.interface';
import { authService } from './auth.service';
import config from '../../../config';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await authService.insertIntoDB(user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  });
});

const logInUser: RequestHandler = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await authService.logInUser(user);
  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);
  res.status(200).json({
    success:true,
    statusCode:200,
    message:"user logged in successfully",
    data: {
      accessToken: others.accessToken
    }
  })
});

export const authController = {
  createUser,
  logInUser
};
