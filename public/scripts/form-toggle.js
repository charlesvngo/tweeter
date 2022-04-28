$(document).ready(function() {
  $(".right-nav").click(function() {
    const $tweetForm = $(this).parent().next().next().children().first();
    $tweetForm.slideToggle("slow");
    $("html").animate({ scrollTop: 0 }, 600);
    $tweetForm.children().last().children().next().focus();
  });
});