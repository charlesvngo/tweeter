$(document).ready(function() {
  $(".fa-solid").hover(function() {
    $(this).addClass("highlight");
  }, function() {
    $(this).removeClass("highlight");
  });
});