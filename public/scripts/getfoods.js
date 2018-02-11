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
     for (var x = 1; x < data[i].foodLeft.length ; x++) {
       $('#main').append('<div class = "foodLeft">'+data[i].foodLeft[x].weight+' of '+data[i].foodLeft[x].name+' prepared on Date '+data[i].foodLeft[x].datePrepared+'</div>');
    };

  };
}

  function onError(data) {
  console.log('ya dummy');
};
