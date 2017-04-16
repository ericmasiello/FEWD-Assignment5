$(document).ready(function() {
  $('.readmore a').click(readMore);
  $('.readless a').click(readLess);
  $('.learnmore').click(learnMore);

  function readMore(event) {
    event.preventDefault();

    $('.readmore').hide();
    $('#show-this-on-click').slideDown();
    $('.readless').show();
  }

  function readLess(event) {
    event.preventDefault();

    $('.readless').hide();
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
  }

  function learnMore(event) {
    event.preventDefault();

    $('.learnmore').hide();
    $('#learnmoretext').slideDown();
  }
});