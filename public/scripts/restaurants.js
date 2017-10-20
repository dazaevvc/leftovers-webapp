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
		$('#main').append('<div class = "name keys"><br>'+data[i].name+'</div>');
		$('#main').append('<div class = "address keys">'+data[i].address+'</div>');
		$('#main').append('<div class = "phoneNum keys">'+data[i].phoneNum+'</div>');
		$('#main').append('<div class = "email keys">'+data[i].email+'</div>');
		$('#main').append('<div class = "foodHeader keys">Food Available: <br></div>');

			for (var x = 1; x < data[i].foodLeft.length ; x++) {
				$('#main').append('<div class = "foodLeft">'+data[i].foodLeft[x].weight+' of '+data[i].foodLeft[x].name+' prepared on '+data[i].foodLeft[x].datePrepared+'</div>');
		};
		var restUrlId = data[i]._id;
		$('#main').append(`<button class="foodButton" type="submit"><a data-id="${restUrlId}" href="/restaurants/${restUrlId}/food">Add Food</a></button><br><br><br>`);


	};
};

function onError(data) {
	console.log('ya dummy');
};
