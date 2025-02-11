
const mongoose = require ('mongoose');

const bookingSchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref : 'User' , required: true
    }, 
    dateAndtime: {
        type: Date,
        required: true
    }, 
    message: {
        type : String, 
        default: ''
    }

});
const BookingModel = mongoose.model ("booking" , bookingSchema);
module.exports = BookingModel;