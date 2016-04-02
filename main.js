$('.SantaLetters').on('click', '.menu', function(e) {
  var $body, position;
  $body = $('body');
  position = $(this).offset();
  $('.show-letter-1').css({
    clip: "rect(" + position.top + "px, " + ($(this).width() + position.left) + "px, " + ($(this).height() + position.top) + "px, " + position.left + "px )",
    display: 'block'
  });
  setInterval(function() {
    return $('.show-letter-1').css({
      clip: "rect(0px, 100vw, 100vh, 0px)"
    });
  }, 1500);
  return $('.show-letter-1').on('click', function() {
    return $(this).css({
      clip: 'initial',
      display: 'none'
    });
  });
});
