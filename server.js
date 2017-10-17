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

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//APP ROUTES
const restRoutes = require("./routes/restaurants");
const foodRoutes = require("./routes/foods");

app.get("/", function(req,res) {
	res.render('index', {});
});

app.get("/restaurants", function(req,res) {
	res.render('restaurants', {});
});

app.get("/api/restaurants", restRoutes.getRestaurantList);
app.get("/api/restaurants/:restId", restRoutes.getRestaurantListId);
app.post("/api/restaurants", restRoutes.createRestaurantList);
app.put("/api/restaurants/:restId", restRoutes.updateRestaurantList);
app.delete("/api/restaurants/:restId", restRoutes.removeRestaurantList);


app.get("/api/food", foodRoutes.getFoodList);
app.get("/api/restaurants/:restId/food/:foodId", foodRoutes.getFoodItem);
app.post("/api/restaurants/:restId/food", foodRoutes.createFoodItem);
app.put("/api/restaurants/:restId/food/:foodId", foodRoutes.updateFoodItem);
app.delete("/api/restaurants/food/:foodId", foodRoutes.removeFood);



//CONNECTION TO PORT
app.listen(port, function(){
  console.log(`Leftovers server up and running on port ${port}`);
});
