$(document).ready(function() {
	
        // console.log('I got here!');


$(".readmore").click(function(){

 	$(".hide").slideDown();

 	$(".readmore").hide();

	
});

$(".readless").click(function(){

     $("#show-this-on-click").slideUp();

     $(".readless").hide();

     $(".readmore").show();

  });

$(".learnmore").click(function(){

     $("#learnmoretext").slideDown();

    

  });


	/* put all your code here */
	// this is the end of the document ready function
});

