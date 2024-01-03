import { Schema, model } from 'mongoose';
import { IBooking } from './booking.interfece';


const bookingSchema = new Schema<IBooking>(
  {
   
    bookingName: {
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

export const Booking = model<IBooking>('Booking', bookingSchema);