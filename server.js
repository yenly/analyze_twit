const express = require('express');
var dotenv = require('dotenv').config();
var Twitter = require('twitter');

const app = express();

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

app.get('/twit', (req, res) => {
  var params = {screen_name: 'nodejs'};
  twClient.get('statuses/user_timeline', params, function(error, tweets, response) {
    console.log(error, response);
  });
  console.log("hey");
  res.send("food");
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
