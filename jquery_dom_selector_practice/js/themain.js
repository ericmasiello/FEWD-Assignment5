function readMore() {
  console.log('readmore');
  //$('#show-this-on-click').css('display','block');
  //$('#show-this-on-click').toggle("display");
  $('.readmore').hide();
  $('#show-this-on-click').slideDown(1500, function () {
    console.log('slide down');
    $('.readless').show();
  })
}

function readLess() {
  console.log('readless');
  $('.readless').hide();
  $('#show-this-on-click').slideUp(1500, function () {
    console.log('slide up');
    $('.readmore').show();
  });
}



$('.readmore').on('click', readMore);
$('.readless').on('click', readLess);

function learnMore() {
  console.log('learnmore');
  $('#learnmoretext').slideDown(1500, function () {
    console.log('slide down');
    $('#learnmoretext').show();
    $('.learnmore').hide();
  })

}
$('.learnmore').on('click', learnMore);