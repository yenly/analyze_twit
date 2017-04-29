const express = require('express');
var dotenv = require('dotenv').config();
var Twitter = require('twitter');

const app = express();
let userTweets = [];

var twClient = new Twitter({
  consumer_key: process.env.REACT_APP_TW_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_TW_CONSUMER_SECRET,
  access_token_key: process.env.REACT_APP_TW_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_TW_ACCESS_TOKEN_SECRET
});

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/users', (req, res) => {
  // res.send('respond with a resource');

  let users = { users: [
    {
      id: 1,
      username: "yenly"
    }, {
      id: 2,
      username: "hobbes"
    }
  ]
  };

  // res.json({
  //   "id": "1",
  //   "username": "yenly"
  // });
  res.send(users);
});

function getTweets(user_params) {
  // console.log("Attempt to connect using: ", user_params);
  twClient.get('statuses/user_timeline', user_params, gotUserTweets);
}

function gotUserTweets(err, data, response) {
  var tweets = data;
  for (key in tweets) {
    // console.log(tweets[key].text);
    userTweets.push(tweets[key].text);

    // console.log(userTweets);
  }
}

app.get('/twit/:username', (req, res) => {
  var data = req.params;
  var twParams = {
    screen_name: data.username,
    count: 100,
    include_rts: false
  }
  getTweets(twParams);
  // console.log(userTweets);
  var allUserTweets = userTweets.join(" ");

  res.send(allUserTweets);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
