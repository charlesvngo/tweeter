$(document).ready(function() {
  $("#tweet-text").keyup(function(event) {
    let counter = $(this).next().children().last();
    let tweetLength = $(this).val().length;
    counter.val(140 - tweetLength);
    console.log("counter.val()", counter.val());
    if (counter.val() < 0) {
      console.log("counter.val()", counter.val());
      counter.css("color", "red");
    } else {
      counter.css("color", "#545149");
    }
  });
});
