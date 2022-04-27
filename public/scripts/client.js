/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $(document).ready(function() {
      $(".tweet-database").append(createTweetElement(tweet));
    });
  }
};

const createTweetElement = function(tweet) {
  // Create header elements
  const $tweet = $("<article>").addClass("tweet-container");
  const $profile = $("<div>").addClass("header-tweet-profile");
  const $header = $("<header>").addClass("header-tweet");
  const $handle = $("<p>").text(`${tweet.user.handle}`).addClass("header-tweet-handle");
  $(`<img src=${tweet.user.avatars}>`).addClass("profile-picture").appendTo($profile);
  $("<p>").text(`${tweet.user.name}`).appendTo($profile);

  // Add all the header elements to the $tweet
  $header.append($profile).append($handle).appendTo($tweet);

  // Add body to tweet
  $("<p>").text(`${tweet.content.text}`).addClass("tweet-body").appendTo($tweet);

  // Create footer elements
  const $footer = $("<footer>").addClass("footer-tweet");
  const $buttons = $("<div>").addClass("social-media-buttons");
  $("<i>").addClass("fa-solid fa-flag").appendTo($buttons);
  $("<i>").addClass("fa-solid fa-retweet").appendTo($buttons);
  $("<i>").addClass("fa-solid fa-heart").appendTo($buttons);
  $("<p>").text(`${tweet.created_at}`).appendTo($footer);
  $footer.append($buttons);

  // append footer to tweet
  $tweet.append($footer);
  
  return $tweet;
};

// event handler to post tweets to the tweets db without refreshing the page.
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $.post("/tweets", $("#tweet-text", this).serialize());
  });
});

// Function to get tweets from the tweets db. Called on startup to load initial tweets
const loadTweets = function() {
  $(document).ready(function() {
    $.get("/tweets", function(data) {
      console.log(data);
      renderTweets(data);
    });
  });
};

loadTweets();