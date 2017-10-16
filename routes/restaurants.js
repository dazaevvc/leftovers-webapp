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
