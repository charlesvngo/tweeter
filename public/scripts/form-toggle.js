$(document).ready(function() {
  $(".right-nav").click(function() {
    const $tweetForm = $(this).parent().next().next().children().first();
    $tweetForm.slideToggle("slow");
    $(window).scrollTop(0);
    $tweetForm.children().last().children().next().focus();
  });
});