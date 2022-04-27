$(document).ready(function() {
  $(".social-buttons").hover(function() {
    $(this).addClass("highlight");
  }, function() {
    $(this).removeClass("highlight");
  });
});