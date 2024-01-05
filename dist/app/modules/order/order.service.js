"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const order_model_1 = require("./order.model");
const createOrder = (OrderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(OrderData);
    return result;
});
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
const getSingleOrder = (OrderId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findById(OrderId);
    console.log(result);
    return result;
});
const updateOrder = (OrderId, updatedOrderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findByIdAndUpdate(OrderId, updatedOrderData, { new: true });
    return result;
});
const deleteOrder = (OrderId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findByIdAndDelete(OrderId);
    return result;
});
exports.OrderService = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
};
