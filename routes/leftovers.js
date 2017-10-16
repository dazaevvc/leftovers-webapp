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

