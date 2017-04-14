$(document).ready(function() {

console.log('at doc ready');

	$('.readless a').hide();
	$('.readmore').click(articleOpen);
	$('.readless').click(articleClose);
	$('.learnmore').click(learnMoreOpen);


	// article read more and read less
	function articleOpen() {
		$('#show-this-on-click').slideDown();
		$('.readmore a').hide();
		$('.readless a').show();
	}
	function articleClose() {
		$('#show-this-on-click').slideUp();
		$('.readless a').hide();
		$('.readmore a').show();
	}

	// side column learnmore
	function learnMoreOpen() {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
		}
});
