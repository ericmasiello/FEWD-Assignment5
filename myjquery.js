$(document).ready(function() {
	
        // console.log('I got here!');



$(".readmore").click(function(){

 	$(".hide").slideDown("slow");

 	$(".readmore").hide();

 	$(".learnmore").stop().slideDown();


});

$(".readless").click(function(){

     $("#show-this-on-click").slideUp("slow");

     $(".readless").hide();

     $(".readmore").show();

  });









	/* put all your code here */
	// this is the end of the document ready function
});

