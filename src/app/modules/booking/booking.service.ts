import { IBooking } from "./booking.interfece";
import { Booking } from "./booking.model";


const createBooking = async (BookingData:IBooking) : Promise<IBooking> => {
    const result = await Booking.create(BookingData);
    return result
}

const getbookings = async () : Promise<IBooking[] | null> => {
    const result = await Booking.find();
    return result
}
const getSinglebooking = async (BookingId:string) : Promise<IBooking | null> => {
    const result = await Booking.findById(BookingId);
    console.log(result);
    return result
}

const updateBooking = async (BookingId:string, updatedBookingData:Partial<IBooking>) : Promise<IBooking | null> => {
 
    const result = await Booking.findByIdAndUpdate(BookingId, updatedBookingData, { new: true });
    return result;
}

const deleteBooking = async (BookingId:string) => {
    const result = await Booking.findByIdAndDelete(BookingId);
    return result
}





export const bookingService = {
    createBooking,
    getbookings,
    getSinglebooking,
    updateBooking,
    deleteBooking,
}