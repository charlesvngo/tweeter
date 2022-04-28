$(document).ready(function() {

  $(window).scroll(function() {
    $(".scroll-up-button").fadeIn("slow");
    $(this).off("scroll");
  });

  $(".scroll-up-button").click(function() {
    $("html").animate({ scrollTop: 0 }, 400);
    $(this).fadeOut("slow", function() {
      $(window).scroll(function() {
        $(".scroll-up-button").fadeIn("slow");
        $(this).off("scroll");
      });
    });
    const $tweetField = $(this).prev().children(":first-child");
    $tweetField.slideDown();
    $tweetField.children(":last-child").children(":nth-child(2)").focus();



  });
});