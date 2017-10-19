

$(document).ready(function() {

  // $.ajax({
  //   method: 'GET',
  //   url: 'http://localhost:3000/api/restaurants',
  //   dataType: 'json',
  //   data: '',
  //   success: onSuccess,
  //   error: onError
  //   });
  // });
  // function onSuccess(data) {
  //   restaurantId = data[i]._id;
  //   console.log(data);
  // };

  $("#addFood").on('click', function(e) {
    e.preventDefault();
    var signFood = {  name: $('#name').val(),
                      weight: $('#weight').val(),
                      datePrepared: $('#datePrepared').val(),
                    };
    var restaurantId = $('form').attr("data-rest-id");
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/api/restaurants/${restaurantId}/food`,
      data: signFood,
      success: onSuccess,
      error: onError
    });
    function onSuccess(signfood) {
      console.log('ya casi');
    };

    function onError(json) {
      $('#errorText').append('that food already exist, type something different you dummy!');
      console.log('ya dummy' + json);
    };
  });
});

