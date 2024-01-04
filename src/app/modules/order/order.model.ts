import { Schema, model } from 'mongoose';
import { IOrder } from './order.interfece';


const orderSchema = new Schema<IOrder>(
  {
   
    orderName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>('Order', orderSchema);