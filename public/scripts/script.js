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
		$('#main').append('<div class = "name">Restaurant: '+data[i].name+'</div><br>');
		$('#main').append('<div class = "address">Address: '+data[i].address+'</div><br>');
		$('#main').append('<div class = "foodLeft">Available Food: '+data[i].foodLeft+'</div><br>');
		$('#main').append('<div class = "phoneNum">Phone: '+data[i].phoneNum+'</div><br>');
		$('#main').append('<div class = "email">Email: '+data[i].email+'</div><br><br><br>');
	};
};

function onError(data) {		
	console.log('ya dummy');
};