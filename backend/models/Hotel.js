const mongoose = require('mongoose');



const HotelSchema = new mongoose.Schema({
  hotel_name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0.0,
    //min: [1000, 'Too less Salary'],
    //max: 12000,
    validate(value) {
      if (value < 0.0){
         throw new Error("Please enter acceptable price ");
      }
    }
  },
  email: {
    type: String,
    required: true,
    //index: true, //Optional if unique is defined
    unique: true,
    trim: true,
    uppercase: true,
    //minlength:10,
    //maxlength: 50,
    //Custom validation
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  user_id: {
    type: String,
    required: [true],
  },
  created: { 
    type: Date,
    default: Date.now,
    alias: 'createdAt'
  },
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;