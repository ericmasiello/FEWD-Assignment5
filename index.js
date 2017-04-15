$(document).ready(function() {
	console.log('if i cant even get this right i dont know why im trying');


	$('a').click(function(event) {
		console.log('maybe if i get here ill feel a lil better');
		event.preventDefault();
	});

	$('#posts .readmore a').click(function(){
		console.log('what about here?');
		$('.post p').removeClass('hide');
		$('.readmore a').hide();
		$('#show-this-on-click').slideDown('p');
		$('.readless a').show();		
	});
	
	$('.readless a').click(function(){
		console.log('getting there');
		$('#show-this-on-click').slideUp('p');
		$('.readless a').hide();
		$('.readmore a').show();

	});

	$('#sidebar a').click(function(){
		console.log('omg');
		$('#learnmoretext').show();
		$('#sidebar a').hide();

	});




});