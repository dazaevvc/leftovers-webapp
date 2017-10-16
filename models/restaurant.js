//REQUIRE MONGOOSE CONST
const mongoose = require("mongoose");
//SCHEMA HANDLER
const Schema = mongoose.Schema;
//RESTAURANT SCHEMA
const restaurant = new Schema ({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  foodLeft:
    [String],
  phoneNum: {
    type: Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})
