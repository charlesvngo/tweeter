$(document).ready(function() {

  $(window).scroll(function() {
    $(".scroll-up-button").fadeIn("fast");
    $(this).off();
  });

  $(".scroll-up-button").click(function(event) {
    $(window).scrollTop(0);
    $(this).fadeOut("slow");
    setTimeout($scrollHandler, 1000);
  });
});