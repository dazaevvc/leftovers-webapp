//REQUIRE DEPENDENCIES
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");

//APP SETUP
const app = express();
const port = 3000;

//APP ROUTES
const restRoutes = require("./routes/restaurants");

app.get("/", restRoutes.getLeftoverList);



//CONNECTION TO PORT
app.listen(port, function(){
  console.log(`Leftovers server up and running on port ${port}`);
});
