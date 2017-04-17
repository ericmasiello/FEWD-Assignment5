

$(document).ready(function() {
	
        // console.log('I got here!');

$('.readmore').click(function(event) {
  // Do this first!
  event.preventDefault();

  // Then do your thing...
});


$(".readmore").click(function(){


 	$(".hide").slideDown();

 	$(".readmore").hide();

	
});

$('.readless').click(function(event) {
  // Do this first!
  event.preventDefault();

  // Then do your thing...
});

$(".readless").click(function(){

     $("#show-this-on-click").slideUp();

     $(".readless").hide();

     $(".readmore").show();

  });

$('.learnmore').click(function(event) {
  // Do this first!
  event.preventDefault();


});



$(".learnmore").click(function(){

     $("#learnmoretext").slideDown();

     $(".learnmore").hide();
    

  });


	/* put all your code here */
	// this is the end of the document ready function
});

