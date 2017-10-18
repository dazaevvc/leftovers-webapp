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
  console.log(data[0].name);
	// for (var i = 0; i < data.data.children.length ; i++) {
	// 	$('#main').append('<div class = "title"><a href="'+data.data.children[i].data.url+'">' +data.data.children[i].data.title+'</a>"</div>');
	// 	$('#main').append('<div class = "images"> <img src=\''+data.data.children[i].data.thumbnail+'\'></div>');
	// 	$('#main').append('<div class = "author">post by '+data.data.children[i].data.author+'</div><br><br>');
	// };
  $(data).each(function(i){
    $('.restName').append(`${data[i].name}`);
    $('.restAddress').append(`${data[i].address}`);
    $('.foodAvailable').append(`${data[i].foodLeft[i]}`);
    $('.phoneNumber').append(`${data[i].phoneNum}`);
    $('.email').append(`${data[i].email}`);
  });
};

function onError(data) {
	console.log('ya dummy');
	// for (var i = 0; i < data.data.children.length ; i++) {
	// 	$('#main').append('<div class = "title"><a href="'+data.data.children[i].data.url+'">' +data.data.children[i].data.title+'</a>"</div>');
	// 	$('#main').append('<div class = "images"> <img src=\''+data.data.children[i].data.thumbnail+'\'></div>');
	// 	$('#main').append('<div class = "author">post by '+data.data.children[i].data.author+'</div><br><br>');
	// };
};
