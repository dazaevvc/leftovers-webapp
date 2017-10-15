const db = require("../models/restaurant");

function getLeftoverList (req, res){
  res.send("This is the homepage");
};

function getLeftoverListId (req, res){
  res.send("This is the single ID page");
};

function createLeftoverList (req, res){
  res.send("This is the create page");
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
