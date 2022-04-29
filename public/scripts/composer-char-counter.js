$(document).ready(function() {
  $("#tweet-text").on("input", function(event) {
    let $counter = $(this).closest("form").find(".counter");
    let tweetLength = $(this).val().length;
    $counter.val(140 - tweetLength);
    if ($counter.val() < 0) {
      $counter.addClass("negative");
    } else {
      $counter.removeClass("negative");
    }
    console.log(event);
  });

  // If the enter key is pressed, send the tweet out.
  $("#tweet-text").on("keyup", function(event) {
    if (event.originalEvent.key === 'Enter') {
      let $submitButton = $(this).closest("form").find(".tweet-button");
      console.log($submitButton);
      $submitButton.submit();
    }
  });
});
