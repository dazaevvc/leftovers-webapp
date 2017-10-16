//REQUIRE MONGOOSE CONST
const mongoose = require("mongoose");

//SCHEMA HANDLER
const Schema = mongoose.Schema;

//RESTAURANT SCHEMA
const FoodSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  datePrepared: {
    type: Date,
    required: true
  }
})

//RESTAURANT MODEL EXPORT
const Food = mongoose.model("Food", FoodSchema);

module.exports = {
  Food: Food
}
