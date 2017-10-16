const db = require("../models/restaurant");

function getRestaurantList (req, res){
  db.Restaurant.find({}, function(err, restData) {
      if (err) {
        console.log('Error retrieving restaurants from DB.', err);
        res.status(500).send('Internal server error');
      } else {
        res.json(restData);
      }
    });
};

function getRestaurantListId (req, res){
  db.Restaurant.findOne({_id: req.params.id}, function(err, restDataId){
    if (err) {
      console.log('Error retrieving restaurants from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(restDataId);
    }
  });
};

function createRestaurantList (req, res){
  const newRestaurant = db.Restaurant({
    name: req.body.name,
    address: req.body.address,
    foodLeft: req.body.foodLeft,
    phoneNum: req.body.phoneNum,
    email: req.body.email
  });

  newRestaurant.save(function(err, data) {
    if (err) {
      console.log('Error saving restaurant to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      json(data);
    }
  });

};

function updateRestaurantList (req, res){
  var restaurantId = req.params.id;
  Retaurant.findOneAndUpdate({_id: restaurantId}, updateRetaurant, function(err, updatedRestaurant){
    res.json(updatedRestaurant);
  })
  res.send("This is the update page");
};

function removeRestaurantList (req, res){
  var restaurantId = req.params.id;
  Restaurant.findOneAndRemove({_id: restaurantId}, function(err, deleteRestaurant){
    res.json(deleteRestaurant);
  res.send("This is the delete homepage");

  });
};

module.exports = {
  getRestaurantList: getRestaurantList,
  getRestaurantListId: getRestaurantListId,
  createRestaurantList: createRestaurantList,
  updateRestaurantList: updateRestaurantList,
  removeRestaurantList: removeRestaurantList
}
