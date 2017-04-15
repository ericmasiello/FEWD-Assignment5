$(document).ready(function(){

console.log('I got here');



$('.readless.hide').click(collapseText);
$('.readmore').click(expandText);


console.log('I got here');


function expandText(){
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless.hide').show();
	event.preventDefault();

}

function collapseText(){
	$('#show-this-on-click').slideUp();
	$('.readmore').show();
	$('.readless.hide').hide();
	event.preventDefault();

console.log('I got here');
}

$('.learnmore').click(Expandlearntext);

function Expandlearntext(){
	$('#learnmoretext').show();
	$('.learnmore').hide();
	event.preventDefault();

}

});