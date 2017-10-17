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
	// for (var i = 0; i < data.data.children.length ; i++) {
	// 	$('#main').append('<div class = "title"><a href="'+data.data.children[i].data.url+'">' +data.data.children[i].data.title+'</a>"</div>');
	// 	$('#main').append('<div class = "images"> <img src=\''+data.data.children[i].data.thumbnail+'\'></div>');
	// 	$('#main').append('<div class = "author">post by '+data.data.children[i].data.author+'</div><br><br>');
	// };
};

function onError(data) {		
	console.log('ya dummy');
	// for (var i = 0; i < data.data.children.length ; i++) {
	// 	$('#main').append('<div class = "title"><a href="'+data.data.children[i].data.url+'">' +data.data.children[i].data.title+'</a>"</div>');
	// 	$('#main').append('<div class = "images"> <img src=\''+data.data.children[i].data.thumbnail+'\'></div>');
	// 	$('#main').append('<div class = "author">post by '+data.data.children[i].data.author+'</div><br><br>');
	// };
};