const SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:8080';
const DIFF_URL = process.env.DIFF_URL || 'http://batakang.com/';
require('dotenv').config();
const twitterClient = require('./controllers/tweet.js');

const io = require('socket.io-client')(SOCKET_URL,
  {
    transportOptions: {
      polling: {
        extraHeaders: {
          'diff_url': `${DIFF_URL}`
        }
      }
  }
  });


io.on('connect', function(){
  console.log("Connected to socket.io server to tweet out changes to: ");
  console.log(DIFF_URL);
});

io.on('change', function(data){
  console.log(`Tweeted out: ${data}`);
  twitterClient.tweet(data);
});

io.on('disconnect', function(){
  console.log("Disconnected.");
});