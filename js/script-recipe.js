$(document).ready( function(){
	console.log("Página Lista");
	$(".icon-arrow-left-alt").show();
	$(".icon-menu").hide();

	$( ".js-show-recipe" ).click(function() {
		$('.page').removeClass('make');
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');
  	});

  	$( ".js-show-make" ).click(function() {
		$('.page').addClass('make');
		$('.js-show-make').addClass('active');
		$('.js-show-recipe').removeClass('active');
  	});

  	$(".icon-arrow-left-alt").click(function() {
  		window.location.replace(location);
		window.location = 'index.html';
  	});
});

