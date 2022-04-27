/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $(document).ready(function() {
      $(".tweet-database").prepend(createTweetElement(tweet));
    });
  }
};


// Helper function to ensure that event handlers are attached to newly generated elements.
const attachHandlers = function() {
  $(".social-buttons").hover(function() {
    $(this).addClass("highlight");
  }, function() {
    $(this).removeClass("highlight");
  });
  $(".tweet-container").hover(function() {
    $(this).addClass("shadow");
  }, function() {
    $(this).removeClass("shadow");
  });
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
  $("<i>").addClass("social-buttons fa-solid fa-flag").appendTo($buttons);
  $("<i>").addClass("social-buttons fa-solid fa-retweet").appendTo($buttons);
  $("<i>").addClass("social-buttons fa-solid fa-heart").appendTo($buttons);
  $("<p>").text(`${timeago.format(tweet.created_at)}`).appendTo($footer);
  $footer.append($buttons);

  // append footer to tweet
  $tweet.append($footer);
  return $tweet;
};

// event handler to post tweets to the tweets db without refreshing the page.
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const tweet = $("#tweet-text", this).val();
    if (tweet.length < 140 && tweet) {
      $.post("/tweets", $("#tweet-text", this).serialize())
        .then(() => loadNewTweets());
    }
  });
});

// Function to get tweets from the tweets db. Called on startup to load initial tweets
const loadTweets = function() {
  $.get("/tweets")
    .then(data => renderTweets(data))
    .then(() => attachHandlers());
};

// Function will obtain only the newest tweet
const loadNewTweets = function() {
  $.get("/tweets")
    .then(data => renderTweets(data.slice(-1)))
    .then(() => attachHandlers());
};

loadTweets();