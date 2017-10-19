$(document).ready(function() {

  $.ajax({
    method: 'GET',
    url: '/api/restaurants',
    dataType: 'json',
    data: '',
    success: onSuccess,
    error: onError
  });
});

function onSuccess(data) {
  console.log(data);
  for (var i = 0; i < data.length ; i++) {
    //$('#main').append('<div class = "name"><br>'+data[i].name+'</div>');
    $('#main').append('<div class = "foodLeft">'+data[i].foodLeft[0].weight+' of '+data[i].foodLeft[0].name+' prepared on '+data[i].foodLeft[0].datePrepared+'</div>');
     for (var x = 1; x < data[i].foodLeft.length ; x++) {
       $('#main').append('<div class = "foodLeft">'+data[i].foodLeft[x].weight+' of '+data[i].foodLeft[x].name+' prepared on '+data[i].foodLeft[x].datePrepared+'</div>');
    };

  };
}

  function onError(data) {
  console.log('ya dummy');
};

