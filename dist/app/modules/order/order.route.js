"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const order_validation_1 = require("./order.validation");
const router = (0, express_1.Router)();
router.post('/create', (0, validateRequest_1.default)(order_validation_1.OrderZodSchema.createOrderZodSchema), order_controller_1.OrderController.createOrder);
router.get('/', order_controller_1.OrderController.getOrders);
router.get('/:id', order_controller_1.OrderController.getSingleOrder);
router.patch('/:id', order_controller_1.OrderController.updateOrder);
router.delete('/:id', order_controller_1.OrderController.deleteOrder);
exports.OrderRoutes = router;
