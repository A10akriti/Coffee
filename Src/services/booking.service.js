const BookingModel = require("../model/bookingModel");
const Joi = require ('joi')

class BookingService {
    bookingvalidation = async(data) => { //method which takes data as argument
        try {
            let rules = Joi.object({ //used to define validation schema for objects
            name: Joi.string().required(),
             dateAndtime: Joi.date().required(),
             email: Joi.string().required(),
             phoneNumber: Joi.string().required(),
             message: Joi.string().optional()
            });

            let response = await rules.validateAsync(data);
            return response;
        } catch (exception) {
            throw exception;
            
        }
    }

    createBooking = async(data) => {
        try {
            let response = new BookingModel(data);
            return await response.save();
        } catch (exception) {
            throw exception;
            
        }
    };

    getAllBooking = async (data) => {
        try {
            let response = await BookingModel.find();
            return response;
            
        } catch (exception) {
            throw exception
        }
    };

    getBookingById = async (id) => {
        try {
            let response = await BookingModel.findById();
            return response;
            
        } catch (exception) {
            throw exception
        }
    };
    updateBooking = async (id,data) => {
        try {
            let response = await BookingModel.findByIdAndUpdate (id,data, {
                new: true //returns updated docs not the original
            });
        } catch (exception) {
            throw exception;       
        }
    }
    deleteBooking = async (id) =>{
        try {
            let response = await BookingModel.findByIdAndDelete (id);
        } catch (exception) {
            throw exception;
            
        }
    };
}

const bookingSrv = new BookingService();
module.exports = bookingSrv;