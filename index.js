$(document).ready(function(){
	
	$('.readmore').click(showMeMore);
	$('.readless').click(showMeLess);
	$('.learnmore').click(learnMore);

	
	function showMeMore(){
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
		$('.readmore').hide();
	}


	function showMeLess(){
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readless').hide();
		$('.readmore').show();
		
	}

	function learnMore(){
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}
	
});