import { z } from 'zod';

const createReviewZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: 'userName is required',
    }),
    productName: z.string({
      required_error: 'productName is required',
    }),
    EmailName: z.string({
      required_error: 'userEmail is required',
    }),
    userId: z.string({
      required_error: 'userId is required',
    }),
    comment: z.string({
      required_error: 'comment is required',
    })
  }),
});

export const reviewZodSchema = {
    createReviewZodSchema
}