$(document).ready(function(){

$("a").click(function(event){
    event.preventDefault();
});

	$('.readmore').click(showMore);
	$('.readless').click(showLess);
	

	function showMore(){
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').show();

	}

	function showLess(){
		$('#show-this-on-click').hide();
		$('.readless').hide();
		$('.readmore').show();

	}

	$('.learnmore').click(learnMore);


	function learnMore(){
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}





})