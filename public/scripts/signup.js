$(document).ready(function() {

  $("#restForm").on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/restaurants',
      data: $(this).serialize(),
      success: onSuccess,
      error: onError
    });
  });
});

function onSuccess(json) {
	console.log(json);
  $('#restForm input').val('');
  restaurants.push(json);
  render();
};

function onError(data) {
	console.log('ya dummy');
};
