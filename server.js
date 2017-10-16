//REQUIRE DEPENDENCIES
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
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//APP ROUTES
const restRoutes = require("./routes/restaurants");
const foodRoutes = require("./routes/foods");

app.get("/restaurants", restRoutes.getRestaurantList);
app.get("/restaurants/:id", restRoutes.getRestaurantListId);
app.post("/restaurants", restRoutes.createRestaurantList);
app.put("/restaurants/:id", restRoutes.updateRestaurantList);
app.delete("/restaurants/:id", restRoutes.removeRestaurantList);


app.get("/restaurants/:id/food", foodRoutes.getFoodList);
app.get("/restaurants/:id/food/:id", foodRoutes.getFoodItem);
app.post("/restaurants/:id/food", foodRoutes.createFoodItem);
app.put("/restaurants/:id/food/:id", foodRoutes.updateFoodItem);
app.delete("/restaurants/food/:id", foodRoutes.removeFood);



//CONNECTION TO PORT
app.listen(port, function(){
  console.log(`Leftovers server up and running on port ${port}`);
});
