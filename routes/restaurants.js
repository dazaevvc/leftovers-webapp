const db = require("../models/restaurant");

function getLeftoverList (req, res){
  db.Restaurant.find({}, function(err, data) {
      if (err) {
        console.log('Error retrieving restaurants from DB.', err);
        res.status(500).send('Internal server error');
      } else {
        res.json(data);
      }
    });
};

function getLeftoverListId (req, res){
  res.send("This is the single ID page");
};

function createLeftoverList (req, res){
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

function updateLeftoverList (req, res){
  res.send("This is the update page");
};

function removeLeftoverList (req, res){
  res.send("This is the delete homepage");
};

module.exports = {
  getLeftoverList: getLeftoverList,
  getLeftoverList: getLeftoverList,
  createLeftoverList: createLeftoverList,
  updateLeftoverList: updateLeftoverList,
  removeLeftoverList: removeLeftoverList
}
