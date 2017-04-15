$(document).ready(function() { 


	//Hide 'Read More' text and 'Learn More' text initially
 	 $('#show-this-on-click', '#learnmoretext').hide ();

 	// setup the click handlers for 'Read more' and 'Learn More'
 	 $('#readMore').click('#show-this-on-click');
  	 $('#learnMore').click('#lxearnmoretext');

  	function readMore (event) {
            //Show Blog Post Content on 'Read More' click, Display Blog Post Content sliding down on click, and display 'Read Less' text on 'Read More' Click
            event.preventDefault();
            $('#posts .readmore').hide();
            $('#show-this-on-click').slideDown();
            $('#posts .readLess').show();
    }

    function readLess (event) {
    	 	//Hide Blog Post Content and 'Read Less' text on 'Read Less' click, Hide Blog Post Content sliding up on 'read less' click, and reinstate 'Read More' text on 'Read Less' Click 
            event.preventDefault();
            $('#posts .readmore').show();
            $('#show-this-on-click').slideUp();
            $('#posts .readless').hide();
    }

    function learnMore (event) {
            //On sidebar, hide 'Learn More' text and display additional text on 'Learn More' click
            event.preventDefault();
            $('#learnmoretext').slideDown();
            $('#sidebar .learnmore').hide();
    }


     //Execute the '.readMore' function and show Blog Post Content when user clicks 'Read More'
     $('#posts .readmore').click(readMore);

     //Execute the '.readLess' function (which hides Blog Post Content) when user clicks 'Read Less'
     $('.readless').click(readLess);

     //Execute the '.learnMore' function on the sidebar when user clicks 'Learn More'
     $('#sidebar .learnmore').click(learnMore);
         
    });
