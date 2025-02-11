const bookingCtrl = require("../Src/controller/booking.controller");

const BookingRoutes = require("express").Router();

BookingRoutes.post("/createbooking", bookingCtrl.createBooking);
BookingRoutes.get("/getallbookings", bookingCtrl.getAllBookings);
BookingRoutes.get("/getbooking/:id", bookingCtrl.getBookingById);
BookingRoutes.put("/updatebooking/:id", bookingCtrl.updateBooking);
BookingRoutes.delete("/deletebooking/:id", bookingCtrl.deleteBooking);

module.exports = BookingRoutes;
