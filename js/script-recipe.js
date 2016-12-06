$(document).ready( function(){
	console.log("Página Lista");
	$(".icon-arrow-left-alt").show();
	$(".icon-menu").hide();

	$( ".js-show-recipe" ).click(function() {
		$('.page').removeClass('make');
  	});

  	$( ".js-show-make" ).click(function() {
		$('.page').addClass('make');
  	});
});

