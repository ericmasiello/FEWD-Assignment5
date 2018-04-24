/* global $ */

function slideDown(event) {
	event.preventDefault();
	$('.readless').slideDown();
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
}

function slideUp(event) {
	event.preventDefault();
	$('.readless').slideUp();
	$('#show-this-on-click').hide();
	$('.readmore').show();
}

function slideDown1(event) {
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
}

$('.readmore').click(slideDown);
$('.readless').click(slideUp);
$('.learnmore').click(slideDown1);
