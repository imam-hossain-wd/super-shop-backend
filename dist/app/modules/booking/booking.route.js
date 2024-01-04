"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_validation_1 = require("./booking.validation");
const router = (0, express_1.Router)();
router.post('/create', (0, validateRequest_1.default)(booking_validation_1.bookingZodSchema.createBookingZodSchema), booking_controller_1.BookingController.createBooking);
router.get('/', booking_controller_1.BookingController.getBookings);
router.get('/:id', booking_controller_1.BookingController.getSingleBooking);
router.patch('/:id', booking_controller_1.BookingController.updateBooking);
router.delete('/:id', booking_controller_1.BookingController.deleteBooking);
exports.BookingRoutes = router;
