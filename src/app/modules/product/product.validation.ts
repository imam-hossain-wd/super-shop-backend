import { z } from 'zod';


 const createProductZodSchema = z.object({
    body: z.object({
      name: z.string({
        required_error: 'name is required',
      }),
      description: z.string({
        required_error: 'description is required',
      }),
      price: z.number({
        required_error: 'price is required',
      }),
      quantity: z.number({
        required_error: 'quantity is required',
      }),
    }),
  });
export const ProductValidation= {
    createProductZodSchema
}