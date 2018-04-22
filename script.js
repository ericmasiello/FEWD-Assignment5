

$(document).ready(function(){

  function blogIsBlog(event) {
    event.preventDefault();
  }

  function showReadMoreText () {
    console.log('show hidden paragraph');
    $('#show-this-on-click').slideDown();
    $('.readless').show();
    $('.readmore').hide();
  }

  function showLessMoreText () {
    console.log('hide shown paragraph');
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
  }

  function showLearnMore () {
    console.log('show learn more');
    $('.learnmore').hide();
    $('#learnmoretext').slideDown ();

  }

  $('#blog').click(blogIsBlog);
  $('.readmore').click(showReadMoreText);
  $('.readless').click(showLessMoreText);
  $('.learnmore').click(showLearnMore);

});