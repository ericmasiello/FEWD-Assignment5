/* global $ */

$(document).ready(function () {
  $('a').click(function (event) {
    event.preventDefault();
  });
});

// Events
$('.readmore').click(showMore);
$('.readless').click(showLess);
$('.learnmore').click(learnMore);


// Functions
function showMore() {
  $('.readmore').addClass('hide');
  $('#show-this-on-click').slideDown();
  $('.readless').removeClass('hide');
}

function showLess() {
  $('.readmore').removeClass('hide');
  $('#show-this-on-click').slideUp();
  $('.readless').addClass('hide');
}

function learnMore() {
  $('.learnmore').addClass('hide');
  $('#learnmoretext').slideDown();
}