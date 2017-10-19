//const RestaurantSchema = require('../../models/restaurant')
$(document).ready(function() {

  $("#addRest").on('click', function(e) {
/// maybe signrest = RestaurantSchema
    e.preventDefault();
    var signRest = {  name: $('#name').val(),
                      address: $('#address').val(),
                      //foodLeft: $('#foodLeft').val(),
                      phoneNum: $('#phoneNum').val(),
                      email: $('#email').val(),
                  };
    $.ajax({
      method: 'POST',
      url: '/api/restaurants',
      data: signRest,
      success: onSuccess,
      error: onError
    });
  });
});

function onSuccess(signRest) {
	console.log(signRest);
  $(signRest).val('');
  //api.restaurants.push(signRest);
  //render();
};

function onError(json) {
  $('#errorText').append('that restaurant already exist, type something different you dummy!');
	console.log('ya dummy');
};
