$(document).ready(function() {
console.log('it works');


$('.readmore, .readless, .learnmore').click(function(event){
        event.preventDefault();
    });

$('.readmore').click(showmore);


$('.readless').click(showless);


$('.learnmore').click(sidebar);



function showmore() {
	$('.readmore').hide();
	$('#show-this-on-click').show();
	$('.readless').slideDown();
}


function showless() {
	$('.readmore').show();
	$('#show-this-on-click').hide();
	$('.readless').slideUp();
}

function sidebar() {
	$('.learnmore').hide();
	$('#learnmoretext').slideDown();
}

});