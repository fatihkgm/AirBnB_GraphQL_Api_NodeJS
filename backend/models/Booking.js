const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    
    booking_date: {
        type: String,
        required: true
    },
    
    booking_start:{
      type: String,
      required: [true, 'Enter start date'],
    },

    booking_end: {
      type: String,
      required: [true, 'Enter start date'],
    },user_id:{
      type: String,
      trim: true,
      lowercase: true
    }

    
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