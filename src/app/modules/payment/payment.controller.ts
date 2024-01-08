import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { paymentService } from "./payment.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const paymentIntent:RequestHandler = catchAsync(async (req, res) => {
    const { price } = req.body;
    const result = await paymentService.createCharge(price);
    console.log(result, 'resultppp');
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment Intent successfully',
        data: result,
      });
})

const createPayment:RequestHandler = catchAsync(async (req, res) => {
    const paymentData = req.body;
    const result = await paymentService.createPayment(paymentData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment Intent successfully',
        data: result,
      });
})


export const paymentController = {
    paymentIntent,
    createPayment
}