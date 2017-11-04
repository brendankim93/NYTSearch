$(document).ready(function(){

//Global veriables


//functions

//click event
	$("#search").on("click", function(){
		

		var urlQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=6573bbac72a3489b88a30b91d90f805c"
		//var query = $("#inputFeild").value();
		//$("input:textbox").value();
		//console.log("possible search:" + query);
		$.ajax({
			url: urlQuery,
			method: "GET"
		})
		.done(function(response){
			console.log("response: ", response);
			var test = response.response.docs[0].snippet;
			$("#here").text(test);
		})

	});

});