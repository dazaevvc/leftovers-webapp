$(document).ready(function() {

	$.ajax({
		method: 'GET',
		url: 'http://localhost:3000/api/restaurants',
		dataType: 'json',
		data: '',
		success: onSuccess,
		error: onError
	});
});

function onSuccess(data) {
	console.log(data);
	for (var i = 0; i < data.length ; i++) {
		$('#main').append('<div class = "name"><br>'+data[i].name+'</div>');
		$('#main').append('<div class = "address">'+data[i].address+'</div>');
		$('#main').append('<div class = "phoneNum">'+data[i].phoneNum+'</div>');
		$('#main').append('<div class = "email">'+data[i].email+'</div>');
		$('#main').append('<div class = "foodHeader">Food Available: <br></div>');

		$('#main').append('<div class = "foodLeft">'+data[i].foodLeft[0].weight+' of '+data[i].foodLeft[0].name+' prepared on '+data[i].foodLeft[0].datePrepared+'</div>');
			for (var x = 1; x < data[i].foodLeft.length ; x++) {
				$('#main').append('<div class = "foodLeft">'+data[i].foodLeft[x].weight+' of '+data[i].foodLeft[x].name+' prepared on '+data[i].foodLeft[x].datePrepared+'</div>');
		};
		var restUrlId = data[i]._id;
		$('#main').append(`<button class="foodButton" type="submit"><a href="http://localhost:3000/restaurants/${restUrlId}/food">Add Food</a></button><br><br><br>`);


	};
};

function onError(data) {
	console.log('ya dummy');
};
