//REQUIRE MONGOOSE CONST
const mongoose = require("mongoose");

//SCHEMA HANDLER
const Schema = mongoose.Schema;
const foodModels = require('./food');

//RESTAURANT SCHEMA
const RestaurantSchema = new Schema ({
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
  foodLeft: [{
    type: Schema.Types.ObjectId,
    ref: 'Food'
  }],
  phoneNum: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

//RESTAURANT MODEL EXPORT
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  Restaurant: Restaurant
}
