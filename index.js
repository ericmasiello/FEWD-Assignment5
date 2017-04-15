$(document).ready(function(){
	
	$('.readmore').click(showMeMore);
	$('.readless').click(showMeLess);
	$('.learnmore').click(learnMore);

	
	function showMeMore(){
		event.preventDefault();
		$('.readmore').hide();
		$('#show-this-on-click').slideDown(function(){
			$('.readless').show();
	});
		
		
	}


	function showMeLess(){
		event.preventDefault();
		$('.readless').hide();
		$('#show-this-on-click').slideUp(function(){
				$('.readmore').show();
			});
		
		
	}

	function learnMore(){
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}
	
});