//REQUIRE DEPENDENCIES
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");


//CONNECTION TO DB
require("dotenv").config();

mongoose.connection.openURI(process.env.DB_CONN, function(err, conn){
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

app.get("/", restRoutes.getLeftoverList);
app.get("/id:", restRoutes.getLeftoverListId);
app.post("/", restRoutes.createLeftoverList);
app.put("/id:", restRoutes.updateLeftoverList);
app.remove("/", restRoutes.removeLeftoverList);


app.get("/", restRoutes.getFoodList);
app.get("/id:", restRoutes.getOneFood);
app.post("/", restRoutes.createFoodItem);
app.put("/id:", restRoutes.updateFoodItem);
app.remove("/", restRoutes.removeFood);



//CONNECTION TO PORT
app.listen(port, function(){
  console.log(`Leftovers server up and running on port ${port}`);
});
