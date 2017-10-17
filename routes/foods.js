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
  db.Food.findOne({_id: req.params.foodId}, function(err, restFoodDataId){
    if (err) {
      console.log('Error retrieving foodId from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(restFoodDataId);
    }
  });
};

function createFoodItem (req, res){
  // retrieve restaurant
  db2.Restaurant.findOne({_id: req.params.restId}, function(err, restObject){
    // create new food
    const newFood = db.Food({
     name: req.body.name,
     weight: req.body.weight,
     datePrepared: req.body.datePrepared
    });
    // save new food
    newFood.save(function(err, savedFood) {
      if (err) {
        console.log('Error saving food to DB.', err);
      } else {
        console.log("Saved food");
        // update restaurant to include new food
        restObject.foodLeft.push(savedFood)
        restObject.save(function (err, data){
          if (err) {
            console.log("Messed up");
            res.status(501);
          } else {
            console.log("got it");
            res.json(savedFood)
          }
        });
      }
    })
  })
};

function updateFoodItem (req, res){
  var foodId = req.params.foodId;
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
  var foodId = req.params.foodId;
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


// db2.Restaurant.find({_id: req.params.restId})
// .populate('foodLeft')
// .exec(function(err, foodsLeft) {
//   if (err) {
//     console.log("sucks");;
//   } else {
//     db2.Restaurant.foodLeft.push(foodsLeft);
//   console.log('found and populated all foods: ', foodsLeft);
// }
// });
