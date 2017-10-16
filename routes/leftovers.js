const db = require("../models/food");


function getFoodList (req, res){
  db.Food.find({}, function(err, foodData){
    if (err) {
      console.log('error retreiving food info from the db', err);
      res.status(500).send('internal server error');
    } else{
      res.json(rest);
    }
  });
};

function getOneFood(req, res){
  db.Food.findOne({_id: req.params.id}, function(err, restFoodDataId){
    if (err) {
      console.log('Error retrieving foodid from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(restFoodDataId);
    }
  });
};

function createFoodItem (req, res){
  const newFood = db.Food({
   //food schema
  });

  newFood.save(function(err, data) {
    if (err) {
      console.log('Error saving food to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      json(data);
    }
  });

};

function updateFoodItem (req, res){
  var foodId = req.params.id;
  Food.findOneAndUpdate({_id: foodId}, updateFood, function(err, updatedFood){
    res.json(updatedFood);
  })
  res.send("This is the update food page");
};


function removeFood (req, res){
  var foodId = req.params.id;
  Food.findOneAndRemove({_id: foodId}, function(err, deleteFood){
    res.json(deleteFood);
  res.send("This is the delete food homepage");

  });
};

module.exports = {
  getFoodList: getFoodList,
  getOneFood: getOneFood,
  createFoodItem: createFoodItem,
  updateFoodItem: updateFoodItem,
  removeFood: removeFood
}
