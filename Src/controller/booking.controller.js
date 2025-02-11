const bookingSrv = require("../services/booking.service");

class BookingController {
  
  createBooking = async (req, res, next) => {
    try {
      let data = req.body;
      let validateBooking = await bookingSrv.bookingvalidation(data);
      let response = await bookingSrv.createBooking(validateBooking);

      res.json({
        data: response,
        msg: "Booking created successfully",
      });
    } catch (error) {
      console.log("Booking create error", error);
      next({
        data: "",
        msg: error,
      });
    }
  };

  getAllBookings = async (req, res, next) => {
    try {
      let response = await bookingSrv.getAllBookings();
      res.json({
        data: response,
        code: 200,
        msg: "All bookings fetched",
        meta: null,
      });
    } catch (error) {
      next({
        msg: error,
      });
    }
  };

  getBookingById = async (req, res, next) => {
    try {
      let id = req.params.id;
      let response = await bookingSrv.getBookingById(id);
      res.json({
        data: response,
        msg: "Booking fetched successfully",
      });
    } catch (error) {
      next({
        msg: error,
      });
    }
  };

  updateBooking = async (req, res, next) => {
    try {
      let data = req.body;
      let id = req.params.id;
      let bookingDetails = await bookingSrv.getBookingById(id);

      if (data.dateAndtime) {
        bookingDetails.dateAndtime = data.dateAndtime;
      }
      if (data.message) {
        bookingDetails.message = data.message;
      }

      let validateBooking = await bookingSrv.bookingValidation(bookingDetails);
      let response = await bookingSrv.updateBooking(id, validateBooking);

      res.json({
        data: response,
        msg: "Booking updated successfully",
        code: 200,
        meta: null,
      });
    } catch (error) {
      next({
        data: null,
        msg: error,
      });
    }
  };

  deleteBooking = async (req, res, next) => {
    try {
      let response = await bookingSrv.deleteBooking(req.params.id);
      res.json({
        data: response,
        msg: "Booking deleted successfully",
        code: 200,
        meta: null,
      });
    } catch (error) {
      next({
        data: null,
        msg: error,
      });
    }
  };
}

const bookingCtrl = new BookingController();
module.exports = bookingCtrl;
