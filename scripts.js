$(document).ready(function() {

  // Onload if we are at letter, scroll down
  if (window.location.hash === '#letter') {
    $('body').animate({
        scrollTop: $("#letter").offset().top
    }, 100);
  }

  // scroll up on click
  $('#scroll-down').on('click', function() {
    $('body').animate({
        scrollTop: $("#letter").offset().top
    }, 500, 'swing', function() {
      if (window.history && window.history.pushState) {
        window.history.pushState({}, 'Letter', '#letter');
      }
    });
  });

  // scroll down on click
  $('#scroll-top').on('click', function() {
    $('body').animate({
      scrollTop: $('#top').offset().top
    }, 500, 'swing', function() {
      if (window.history && window.history.pushState) {
        window.history.pushState({}, 'Letter', '/');
      }
    });
  });
});