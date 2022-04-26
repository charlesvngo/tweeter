$(document).ready(function() {
  $(".tweet-container").hover(function() {
    $(this).addClass("shadow");
  }, function() {
    $(this).removeClass("shadow");
  });
});
