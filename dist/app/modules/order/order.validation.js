"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderZodSchema = void 0;
const zod_1 = require("zod");
const createOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookingName: zod_1.z.string({
            required_error: 'bookingName is required',
        }),
        userName: zod_1.z.string({
            required_error: 'userName is required',
        }),
        userEmail: zod_1.z.string({
            required_error: 'userEmail is required',
        }),
        userId: zod_1.z.string({
            required_error: 'userId is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
    }),
});
exports.OrderZodSchema = {
    createOrderZodSchema
};
