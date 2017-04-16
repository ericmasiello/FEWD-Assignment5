$(document).ready(function() {
	console.log('hey')

// expand readmore tab
	$('.readmore').click(function(event) {
		event.preventDefault();
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
	});

// retract readmore tab
	$('.readless').click(function(event) {
		event.preventDefault();
		$('.readmore').show(600);
		$('#show-this-on-click').slideUp();
		$('.readless').hide();
	});

// expand learnmore tab
	$('.learnmore').click(function(event) {
		event.preventDefault();
		$('.learnmore').hide();
		$('#learnmoretext').slideDown();
	});
});