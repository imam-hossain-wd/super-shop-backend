import { z } from 'zod';

const createBookingZodSchema = z.object({
  body: z.object({
    bookingName: z.string({
      required_error: 'bookingName is required',
    }),
    userName: z.string({
      required_error: 'userName is required',
    }),
    userEmail: z.string({
      required_error: 'userEmail is required',
    }),
    userId: z.string({
      required_error: 'userId is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
  }),
});

export const bookingZodSchema = {
    createBookingZodSchema
}