const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
      hotel:{
        type:Schema.Types.ObjectId,
        ref: 'Hotel'
      },
      date: {
        type: Date,
        required: true
      },
      creator: {
          type: Schema.Types.ObjectId,
          ref: 'User'
      },
    },
      { timestamps: true }

);

module.exports = mongoose.model('Booking', bookingSchema);