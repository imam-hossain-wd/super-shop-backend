"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.productController.getAllProducts);
router.get('/:id', product_controller_1.productController.getProductById);
router.post('/create', (0, validateRequest_1.default)(product_validation_1.ProductValidation.createProductZodSchema), product_controller_1.productController.createProduct);
router.patch('/:id', product_controller_1.productController.updateProduct);
router.delete('/:id', product_controller_1.productController.deleteProduct);
exports.ProductRoutes = router;
