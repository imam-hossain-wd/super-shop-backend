import { z } from 'zod';

const createPaymentZodSchema = z.object({
  body: z.object({
    price: z.string({
      required_error: 'price is required',
    })
  }),
});

export const paymentZodSchema = {
    createPaymentZodSchema
}