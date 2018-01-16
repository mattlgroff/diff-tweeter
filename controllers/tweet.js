const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

module.exports = {
  tweet: function(content){
    client.post('statuses/update', {status: content},  function(error, tweet, response) {
      // console.error(error);
      if(error) throw error;
      // console.log(tweet);  // Tweet body. 
      // console.log(response);  // Raw response object. 
    });
  }
}