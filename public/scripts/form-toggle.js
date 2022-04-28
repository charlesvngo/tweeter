$(document).ready(function() {
  $(".right-nav").click(function() {
    const $tweetForm = $(this).parent().siblings().last().children().first();
    $tweetForm.slideToggle("slow");
  });
});