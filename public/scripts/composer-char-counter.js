$(document).ready(function() {
  $("#tweet-text").keyup(function(event) {
    let counter = $(this).next().children().last();
    let tweetLength = $(this).val().length;
    counter.val(140 - tweetLength);
    if (counter.val() < 0) {
      counter.addClass("negative");
    } else {
      counter.removeClass("negative");
    }
    if (event.originalEvent.key === 'Enter') {
      $(this).next().children().first().submit();
    };
  });
});
