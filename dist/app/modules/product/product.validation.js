"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
        quantity: zod_1.z.number({
            required_error: 'quantity is required',
        }),
    }),
});
exports.ProductValidation = {
    createProductZodSchema
};
