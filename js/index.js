$(document).ready(function() {

  $('.readmore,.readless,.learnmore').click(function(event) {
  // Do this first!
  event.preventDefault();

  // hide all the extra text initially
  $('.hide').hide();

  // click on either link to show text
  $('.readmore').click(showOnClick);
  $('.learnmore').click(learnMoreText);

  // click to hide readmore
  $('.readless').click(hideOnClick);

  // show readmore
  function showOnClick() {
    $('.readmore').hide();
    $('#show-this-on-click').slideDown();
    $('.readless').show();
  }

  // hide readless
  function hideOnClick() {
    $('.readless').hide ();
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
}
   // show learnmore
  function learnMoreText() {
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
  }
});
});
