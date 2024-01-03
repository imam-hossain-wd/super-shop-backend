import { Router } from "express";
import { BookingController } from "./booking.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookingZodSchema } from "./booking.validation";


const router = Router();

router.post('/create',
validateRequest(bookingZodSchema.createBookingZodSchema),
BookingController.createBooking);
router.get('/', BookingController.getBookings);
router.get('/:id', BookingController.getSingleBooking);
router.patch('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.deleteBooking);


export const BookingRoutes = router;