const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    
    date: {
        type: Date,
        required: true
    },
    

    // book:{
    //     type:Schema.Types.ObjectId,
    //     ref: 'User'
    //   },
    // date: {
    //     type: Date,
    //     required: true
    //   },
    // creator: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'User'
    //   },
    

});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;