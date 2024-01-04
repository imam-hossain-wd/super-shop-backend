import { RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OrderService } from "./order.service";
import { IOrder } from "./order.interfece";


const createOrder: RequestHandler = catchAsync(async (req, res) => {
    const Order = req.body;
    const result = await OrderService.createOrder(Order);
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  });

const getOrders: RequestHandler = catchAsync(async (req, res) => {
    const result = await OrderService.getOrders();
    const message = result?.length === 0 ? "This user does not have any Order" : 'Order Retrived successfully!';
    sendResponse<IOrder[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const getSingleOrder: RequestHandler = catchAsync(async (req, res) => {
    const OrderId = req.params.id
    const result = await OrderService.getSingleOrder(OrderId);
    const message = result === null ? "This user does not have any Order" : 'Single Order Retrived successfully!';
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const updateOrder: RequestHandler = catchAsync(async (req, res) => {
    const OrderId = req.params.id;
    const updatedOrderData = req.body;
    const result = await OrderService.updateOrder(OrderId,updatedOrderData);
    const message = result === null ? "This user does not have any Order" : 'Order Updated successfully!';
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

const deleteOrder: RequestHandler = catchAsync(async (req, res) => {
    const OrderId = req.params.id;
    const result = await OrderService.deleteOrder(OrderId);
    console.log(result," controller dd");
    const message = result === null ? "This user does not have any Order" : 'Order deleted successfully!';
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message,
      data: result,
    });
  });

  export const OrderController = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
  }