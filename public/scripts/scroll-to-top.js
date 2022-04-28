$(document).ready(function() {

  $(window).scroll(function() {
    $(".scroll-up-button").fadeIn("slow");
    $(this).off("scroll");
  });

  $(".scroll-up-button").click(function() {
    // $(window).scrollTop(0);
    $("html").animate({ scrollTop: 0 }, 400);
    $(this).fadeOut("slow", function() {
      $(window).scroll(function() {
        $(".scroll-up-button").fadeIn("slow");
        $(this).off("scroll");
      });
    });

  });
});