const express = require('express');
var dotenv = require('dotenv').config();
var Twitter = require('twitter');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/V3');

const app = express();
// let userTweets = [];
let allUserTweets = '';

var twClient = new Twitter({
  consumer_key: process.env.REACT_APP_TW_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_TW_CONSUMER_SECRET,
  access_token_key: process.env.REACT_APP_TW_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_TW_ACCESS_TOKEN_SECRET
});

var tone_analyzer = new ToneAnalyzerV3({
  username: process.env.REACT_APP_WATSON_TONE_USERNAME,
  password: process.env.REACT_APP_WATSON_TONE_PASSWORD,
  version_date: process.env.REACT_APP_WATSON_TONE_VERSION_DATE
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

  function gotUserTweets(err, data, response) {
    let userTweets = [];
    var tweets = data;
    for (key in tweets) {
      // console.log(tweets[key].text);
      userTweets.push(tweets[key].text);

      // console.log(userTweets);
    }
    //console.log('inside gotUserTweets: ', userTweets);
    allUserTweets = userTweets.join(" ");
  }
}

app.get('/twit/:username', (req, res) => {
  var data = req.params;
  console.log(data.username);

  var twParams = {
    screen_name: data.username,
    count: 200,
    include_rts: false
  }
  //allUserTweets = '';
  console.log(twParams);
  getTweets(twParams);


  var toneResults = {};

  //console.log('after getTweets: ', allUserTweets);

  if(allUserTweets){
    var inputText = {
      text: allUserTweets
    }

    tone_analyzer.tone(inputText, getTone);
  }

  function getTone(err, tone) {
    if (err)
      console.log(err);
    else
      var toneOverview = tone.document_tone;
      toneResults = JSON.stringify(toneOverview, null, 2);
      res.send(toneOverview);
      // console.log(toneResults);
  }

  // res.send(toneResults);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
