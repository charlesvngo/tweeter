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
    // If the enter key is pressed, send the tweet out.
    if (event.originalEvent.key === 'Enter') {
      let $submitButton = $(this).next().children().first();
      $submitButton.submit();
    }
  });
});
