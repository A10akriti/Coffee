
const mongoose = require ('mongoose');

const bookingSchema = new mongoose.Schema ({
    name: {
        type:'String' , required: true
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