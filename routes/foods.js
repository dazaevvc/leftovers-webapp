const db = require("../models/food");
const db2 = require("../models/restaurant");

function getFoodList (req, res){
  db.Food.find({}, function(err, foodData){
    if (err) {
      console.log('error retreiving food info from the db', err);
      res.status(500).send('internal server error');
    } else{
      res.json(foodData);
    }
  });
};

function getFoodItem(req, res){
  db.Food.findOne({_id: req.params.id}, function(err, restFoodDataId){
    if (err) {
      console.log('Error retrieving foodId from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(restFoodDataId);
    }
  });
};

function createFoodItem (req, res){
  const newFood = db.Food({
   name: req.body.name,
   weight: req.body.weight,
   datePrepared: req.body.datePrepared
  });

  newFood.save(function(err, data) {
    if (err) {
      console.log('Error saving food to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
  var restaurant = new db2.Restaurant();
  restaurant.foodLeft.push(newFood);
};

function updateFoodItem (req, res){
  var foodId = req.params.id;
  var updateFoodItem = {
   name: req.body.name,
   weight: req.body.weight,
   datePrepared: req.body.datePrepared
 };

  db.Food.findOneAndUpdate({_id: foodId}, updateFoodItem, function(err, data){
    if (err) {
      console.log("Error updating food", err);
    } else {
      res.status(201).json(data);
    }
  })
};


function removeFood (req, res){
  var foodId = req.params.id;
  db.Food.findOneAndRemove({_id: foodId}, function(err, deleteFood){
  });
};

module.exports = {
  getFoodList: getFoodList,
  getFoodItem: getFoodItem,
  createFoodItem: createFoodItem,
  updateFoodItem: updateFoodItem,
  removeFood: removeFood
}
