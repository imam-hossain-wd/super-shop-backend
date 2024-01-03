import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { bookingService } from "./booking.service";
import sendResponse from "../../../shared/sendResponse";
import { IBooking } from "./booking.interfece";
import httpStatus from "http-status";


const createBooking: RequestHandler = catchAsync(async (req, res) => {
    const booking = req.body;
    const result = await bookingService.createBooking(booking);
    sendResponse<IBooking>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking created successfully!',
      data: result,
    });
  });

const getBookings: RequestHandler = catchAsync(async (req, res) => {
    const result = await bookingService.getbookings();
    console.log(result, 'all bokings');
    const message = result?.length === 0 ? "This user does not have any booking" : 'Booking Retrived successfully!';
    sendResponse<IBooking[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const getSingleBooking: RequestHandler = catchAsync(async (req, res) => {
    const bookingId = req.params.id
    const result = await bookingService.getSinglebooking(bookingId);
    const message = result === null ? "This user does not have any booking" : 'Single Booking Retrived successfully!';
    sendResponse<IBooking>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const updateBooking: RequestHandler = catchAsync(async (req, res) => {
    const bookingId = req.params.id;
    const updatedBookingData = req.body;
    const result = await bookingService.updateBooking(bookingId,updatedBookingData);
    const message = result === null ? "This user does not have any booking" : 'Booking Updated successfully!';
    sendResponse<IBooking>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const deleteBooking: RequestHandler = catchAsync(async (req, res) => {
    const bookingId = req.params.id;
    const result = await bookingService.deleteBooking(bookingId);
    console.log(result," controller dd");
    const message = result === null ? "This user does not have any booking" : 'Booking deleted successfully!';
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

  export const BookingController = {
    createBooking,
    getBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking
  }