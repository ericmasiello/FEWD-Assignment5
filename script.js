$(document).ready(function(){
	
	console.log("get document ready");

	$(".readmore").click(slideDown);
	
	$(".readless").click(slideUp);

	$(".learnmore").click(showMore);

	function slideDown() {
		$("#show-this-on-click").show();
		$(".readmore").hide();
		$(".readless").show();
	}
	
	function slideUp() {
		$("#show-this-on-click").hide();
		$(".readless").hide();
		$(".readmore").show();
	}

	function showMore() {
		$("#learnmoretext").show();
		$(".learnmore").hide();
	}
});