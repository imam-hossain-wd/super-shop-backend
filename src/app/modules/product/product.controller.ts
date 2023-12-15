import { RequestHandler } from 'express';
import { productService } from './product.service';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const getAllProducts: RequestHandler = catchAsync(async (_, res) => {
  const products = await productService.getAllProducts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:"Product Retrived successfully",
    data: products,
  });
});

const getProductById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:"Single Product Retrived successfully",
    data: product,
  });
});

const createProduct: RequestHandler = catchAsync(async (req, res) => {
  const product = req.body;
  const createdProduct = await productService.createProduct(product);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message:"Create Product successfully",
    data: createdProduct,
  });
});

const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await productService.updateProduct(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:"Update Product successfully",
    data: updatedProduct,
  });
});

const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
 const result =  await productService.deleteProduct(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:"Delete Product Successful",
    data: result
  });
});

export const productController = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
