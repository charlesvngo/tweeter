$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let $counter = $(this).closest("form").find(".counter");
    let tweetLength = $(this).val().length;
    $counter.val(140 - tweetLength);
    if ($counter.val() < 0) {
      $counter.addClass("negative");
    } else {
      $counter.removeClass("negative");
    }
  });

  // If the enter key is pressed, send the tweet out.
  $("#tweet-text").on("keyup", function(event) {
    if (event.originalEvent.key === 'Enter') {
      let $submitButton = $(this).closest("form").find(".tweet-button");
      $submitButton.submit();
    }
  });
});
