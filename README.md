# diff-tweeter
Tweet's when a webpage change is detected from the diff-socket.

![alt text](https://i.imgur.com/XjAnsvi.png "Example Image")

Requires [diff-socket](https://github.com/mattlgroff/diff-socket)

## Example .env File 
Get these from Twitter.
```
CONSUMER_KEY=asdfghjkl
CONSUMER_SECRET=asdfghjkl
ACCESS_TOKEN_KEY=asdfghjkl
ACCESS_TOKEN_SECRET=asdfghjkl
```
Fill these in with your diff-socket URL and the URL of the webpage to watch.
```
DIFF_URL='http://mattlgroff.github.io'
SOCKET_URL='http://localhost:8080'
```
