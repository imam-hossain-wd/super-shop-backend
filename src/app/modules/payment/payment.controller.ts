import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { paymentService } from "./payment.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const payment:RequestHandler = catchAsync(async (req, res) => {
    const { amount, source } = req.body;
    const result = await paymentService.createCharge(amount, source);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment successfully',
        data: result,
      });
})

export const paymentController = {
    payment
}