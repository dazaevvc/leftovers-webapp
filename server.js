//REQUIRE DEPENDENCIES
console.log("starting server");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");


//CONNECTION TO DB
require("dotenv").config();

mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, function(err, conn){
  if (err) {
    console.log("ERROR MY DUDE", err);
  } else {
    console.log("CONNECTED TO MONGO DB", );
  }
});

//APP SETUP
const app = express();
const port = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//APP ROUTES
const restRoutes = require("./routes/restaurants");
const foodRoutes = require("./routes/foods");

app.get("/restaurants", restRoutes.getRestaurantList);
app.get("/restaurants/:restId", restRoutes.getRestaurantListId);
app.post("/restaurants", restRoutes.createRestaurantList);
app.put("/restaurants/:restId", restRoutes.updateRestaurantList);
app.delete("/restaurants/:restId", restRoutes.removeRestaurantList);


app.get("/food", foodRoutes.getFoodList);
app.get("/restaurants/:restId/food/:foodId", foodRoutes.getFoodItem);
app.post("/restaurants/:restId/food", foodRoutes.createFoodItem);
app.put("/restaurants/:restId/food/:foodId", foodRoutes.updateFoodItem);
app.delete("/restaurants/food/:foodId", foodRoutes.removeFood);



//CONNECTION TO PORT
app.listen(port, function(){
  console.log(`Leftovers server up and running on port ${port}`);
});
