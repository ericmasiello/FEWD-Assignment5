  function readMore(event) {
    event.preventDefault();
  }

  function readMore () {
    console.log('Read More');
    $('#show-this-on-click').slideDown();
    $('.readless').show();
    $('.readmore').hide();
  }

  function readLess () {
    console.log('Read Less');
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
  }

  function learnMore () {
    console.log('Learn More');
    $('.learnmore').hide();
    $('#learnmoretext').slideDown ();

}

   $('.readmore').click(readMore);
   $('.readless').click(readLess);
   $('.learnmore').click(learnMore);