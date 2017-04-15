$(document).ready(function(){

console.log('I got here');



$('.readless hide').click(collapseText);
$('.readmore').click(expandText);

console.log('I got here');

function expandText(){
	$('.readmore').show();

}

function collapseText(){
	$('.readless hide').hide();

}
});