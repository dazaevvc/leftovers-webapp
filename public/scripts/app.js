var leftovers_endpoint = DB_CONN

$(document).ready(function() {
  console.log("Let's get coding!");


  $.ajax({

    method: 'GET',
    url: leftovers_endpoint,
    dataType: 'json',
    success: onSuccess,
    error: onError
  })
});

// function onSuccess(data){
//   console.log(data.foods);
//   console.log(data.data.foods);
//   $(data.data)foreach(function(i){

//   });
// };
