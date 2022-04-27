/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $(document).ready(function() {
      $(".tweet-database").append(createTweetElement(tweet));
    });
  }
};

const createTweetElement = function(tweet) {
  let $tweet = `
  <article class="tweet-container">
    <header class="header-tweet">
      <div class="header-tweet-profile">
        <img class ="profile-picture" src=${tweet.user.avatars}/>
        <p>${tweet.user.name}</p>
      </div>
      <p class ="header-tweet-handle">${tweet.user.handle}</p>
    </header>
    <p class="tweet-body"">${tweet.content.text}</p>
    <footer class="footer-tweet">
      <p>${tweet.created_at}</p>
      <div class="social-media-buttons">
        <p><i class="fa-solid fa-flag"></i></p>
        <p><i class="fa-solid fa-retweet"></i></p>
        <p><i class="fa-solid fa-heart"></i></p>
      </div>
    </footer>
  </article>`;
  return $tweet;
};

renderTweets(data);