$(document).ready(function() {

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
    $('#showonclick').slideDown();
    $('.readless').show();
  }

  // hide readless
  function hideOnClick() {
    $('.readless').slideUp ();
    $('#showonclick').slideUp();
    $('.readmore').show();
}
   // show learnmore
  function learnMoreText() {
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
  }

});
