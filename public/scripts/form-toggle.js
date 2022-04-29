$(document).ready(function() {
  $(".right-nav").click(function() {
    const $tweetForm = $(this).parent().siblings("main").children(":first-child");
    $tweetForm.slideToggle("slow");
    $("html").animate({ scrollTop: 0 }, 600);
    $tweetForm.children(":last-child").children(":nth-child(2)").focus();
  });
});