"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingService = void 0;
const booking_model_1 = require("./booking.model");
const createBooking = (BookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.create(BookingData);
    return result;
});
const getbookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find();
    return result;
});
const getSinglebooking = (BookingId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findById(BookingId);
    console.log(result);
    return result;
});
const updateBooking = (BookingId, updatedBookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findByIdAndUpdate(BookingId, updatedBookingData, { new: true });
    return result;
});
const deleteBooking = (BookingId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findByIdAndDelete(BookingId);
    return result;
});
exports.bookingService = {
    createBooking,
    getbookings,
    getSinglebooking,
    updateBooking,
    deleteBooking,
};
